import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [commentsInput, setCommentsInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput
        })
        setCommentsInput('');
        // history.push('/')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Any comments you want to leave?</h2>
            <label>Comments?</label>
            <input 
                type="number" 
                onChange={setCommentsInput} />
            <button type="submit">Next</button>
        </form>
    )
}

export default Comments;