import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Confirm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const submission = useSelector(store => store.submission)

    const handleSubmit = () => {
        console.log('clicked');
        dispatch({
            type: 'SET_FEEDBACK',
            payload: submission
        })
        dispatch({
            type: 'CLEAR_RESULTS'
        })
        history.push('/');

    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <br />
            <div className='review-line-item'>Feeling: {submission.feeling}</div>
            <div className='review-line-item'>Understanding: {submission.understanding}</div>
            <div className='review-line-item'>Support: {submission.support}</div>
            <div className='review-line-item'>Comments: {submission.comments}</div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
        

    )
}

export default Confirm;