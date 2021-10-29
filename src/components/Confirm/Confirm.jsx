import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Confirm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const submission = useSelector(store => store.submission)

    const handleSubmit = () => {
        console.log('clicked');
        axios({
                method: 'POST',
                url: '/feedback',
                data: submission})
            .then(response => {
                console.log('POSTED');
                dispatch({type: 'CLEAR_RESULTS'})
                history.push('/');
            }).catch(err => {
                console.log('Error on POST to server: ', err);
                alert('ERROR on POST')
            })
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