import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from '@mui/material';
import Swal from 'sweetalert2/dist/sweetalert2.all';



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
        // require input
        if(!understandingInput && !currentUnderstanding) {
            return Swal.fire({title: 'Input Required', text:'Please enter a value', icon: 'warning'})
        }
        // send dispatch with the input or currentUnderstanding if no input change or 'not answered'
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput || currentUnderstanding 
        })
        setUnderstandingInput('');
        history.push('/support');
    }

    return (
        <div className='questionnaire'>
            <form onSubmit={handleSubmit}>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding?</label>
                <input
                    type="number"
                    onChange={(e) => setUnderstandingInput(e.target.value)} 
                    defaultValue={currentUnderstanding} 
                    autoFocus />
            </form>
            <br />
            <Button variant= 'outlined' onClick={back}>Back</Button>
            <Button variant= 'outlined' onClick={handleSubmit}>Next</Button>
        </div>
    )

}

export default Understanding;