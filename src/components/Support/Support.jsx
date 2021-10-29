import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        })
        setSupportInput('');
        history.push('/comments')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>How well are you being supported?</h2>
            <label>Support?</label>
            <input 
                type="number" 
                onChange={(e)=> setSupportInput(e.target.value)} />
            <button type="submit">Next</button>
        </form>
    )
}

export default Support;