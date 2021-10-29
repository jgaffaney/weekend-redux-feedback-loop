import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Support() {

    const dispatch = useDispatch();

    const [supportInput, setSupportInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        })
        setFeelingInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How are you being supported today?</h2>
            <label>Support?</label>
            <input 
                type="number" 
                onChange={setSupportInput} />
        </form>
    )
}

export default Support;