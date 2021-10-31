import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentFeeling = useSelector(store => store.submission.feeling);

    const [feelingInput, setFeelingInput] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // send dispatch with the input or currentFeeling if no input change
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput || currentFeeling
        })
        setFeelingInput('');
        history.push('/understanding')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>How are you feeling today?</h2>
                <label>Feeling?</label>
                <input
                    type="number"
                    onChange={(e) => { setFeelingInput(e.target.value) }}
                    defaultValue={currentFeeling} />
            </form>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}

export default Feeling;