import {useHistory} from 'react-router-dom';

function Success() {

    const history = useHistory();

    const handleClick = () =>{
        history.push('/');
    }

    return(
        <div className='success'>
            <h2>Thank you for your submission!</h2>
            <button onClick={handleClick}>Leave New Feedback</button>
        </div>
    )
}

export default Success;