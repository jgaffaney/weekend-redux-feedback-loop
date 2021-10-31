import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from '@mui/material';



function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [commentsInput, setCommentsInput] = useState('');
    const currentComments = useSelector(store => store.submission.comments);

    const back = () => {
        history.push('/support');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // require input
        if(!commentsInput && !currentComments) {
            return alert('a value or must be provided')
        }
        // send dispatch with the input or currentComments if no input change or 'not answered'
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput || currentComments
        })
        setCommentsInput('');
        history.push('/confirm')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Any comments you want to leave?</h2>
                <label>Comments?</label>
                <input
                    type="textarea"
                    onChange={(e) => setCommentsInput(e.target.value)}
                    defaultValue={currentComments} 
                    autoFocus />
            </form>
            <Button  variant= 'outlined'onClick={back}>Back</Button>
            <Button  variant= 'outlined'onClick={handleSubmit}>Next</Button>
        </div>
    )
}

export default Comments;