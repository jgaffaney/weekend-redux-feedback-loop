import {useSelector} from 'react-redux';

function Confirm() {

    const submission = useSelector(store => store.submission)

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