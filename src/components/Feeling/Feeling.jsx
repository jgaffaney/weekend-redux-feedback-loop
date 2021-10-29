import {useDispatch} from 'react-redux';
import {useState} from 'react'
import {useHistory} from 'react-router-dom';

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingInput, setFeelingInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        })
        setFeelingInput('');
        history.push('/understanding')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How are you feeling today?</h2>
            <label>Feeling?</label>
            <input 
                type="number" 
                onChange={setFeelingInput} />
            <button type="submit">Next</button>
        </form>
    )
}

export default Feeling;