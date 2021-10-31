import { useDispatch, userSelector, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


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
        // send dispatch with the input or currentComments if no input change or 'not answered'
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput || currentComments || 'not answered'
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
                    defaultValue={currentComments} />
            </form>
            <button onClick={back}>Back</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}

export default Comments;