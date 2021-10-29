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
        setSupportInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How well are you being supported?</h2>
            <label>Support?</label>
            <input 
                type="number" 
                onChange={setSupportInput} />
        </form>
    )
}

export default Support;