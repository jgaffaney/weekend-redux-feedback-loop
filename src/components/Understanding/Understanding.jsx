import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Understanding() {

    const dispatch = useDispatch();

    const [understandingInput, setUnderstandingInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        })
        setUnderstandingInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How well are you understanding the content?</h2>
            <label>Understanding?</label>
            <input 
                type="number" 
                onChange={setUnderstandingInput} />
        </form>
    )
}

export default Understanding;