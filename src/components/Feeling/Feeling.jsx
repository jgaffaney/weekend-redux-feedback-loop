import {useDispatch} from 'react-redux';
import {useState} from 'react'

function Feeling() {

    const dispatch = useDispatch();

    const [feelingInput, setFeelingInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        })
        setFeelingInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How are you feeling today?</h2>
            <label>Feeling?</label>
            <input 
                type="number" 
                onChange={setFeelingInput} />
        </form>
    )
}

export default Feeling;