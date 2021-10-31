import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '@mui/material';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('');
    const currentSupport = useSelector(store=>store.submission.support)

    const back = () =>{
        history.push('/understanding')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // require input
        if(!supportInput && !currentSupport) {
            return alert('a value must be provided')
        }
        // send dispatch with the input or currentSupport if no input change or 'not answered'
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput || currentSupport 
        })
        setSupportInput('');
        history.push('/comments')
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h2>How well are you being supported?</h2>
            <label>Support?</label>
            <input 
                type="number" 
                onChange={(e)=> setSupportInput(e.target.value)} 
                defaultValue={currentSupport}
                autoFocus />
        </form>
        <Button variant= 'outlined' onClick={back}>Back</Button>
        <Button variant= 'outlined' onClick={handleSubmit}>Next</Button>
        </div>
        

    )
}

export default Support;