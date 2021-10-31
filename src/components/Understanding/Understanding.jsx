import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('');
    const currentUnderstanding = useSelector(store=>store.submission.understanding)

    const back = () => {
        history.push('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        })
        setUnderstandingInput('');
        history.push('/support');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding?</label>
                <input
                    type="number"
                    onChange={(e) => setUnderstandingInput(e.target.value)} 
                    defaultValue={currentUnderstanding} />
            </form>
            <button onClick={back}>Back</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )

}

export default Understanding;