import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Confirm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const submission = useSelector(store => store.submission)

    const handleClick = (input) => {
        history.push(`/${input}`);
    }

    const handleSubmit = () => {
        console.log('clicked');
        axios({
                method: 'POST',
                url: '/feedback',
                data: submission})
            .then(response => {
                console.log('POSTED');
                dispatch({type: 'CLEAR_RESULTS'})
                history.push('/success');
            }).catch(err => {
                console.log('Error on POST to server: ', err);
                alert('ERROR on POST')
            })
        }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <h4>If you like to change anything just click on that row</h4>
            <br />
            <div className='review-line-item' onClick={() => {handleClick('')}}>Feeling: {submission.feeling}</div>
            <div className='review-line-item' onClick={() => {handleClick('understanding')}}>Understanding: {submission.understanding}</div>
            <div className='review-line-item' onClick={() => {handleClick('support')}}>Support: {submission.support}</div>
            <div className='review-line-item' onClick={() => {handleClick('comments')}}>Comments: {submission.comments}</div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Confirm;