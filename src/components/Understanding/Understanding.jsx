import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        })
        setUnderstandingInput('');
        history.push('/support');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How well are you understanding the content?</h2>
            <label>Understanding?</label>
            <input 
                type="number" 
                onChange={(e) => setUnderstandingInput(e.target.value)} />
            <button type="submit">Next</button>
        </form>
    )
}

export default Understanding;