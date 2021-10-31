import {useHistory} from 'react-router-dom';
import {Button} from '@mui/material';


function Success() {

    const history = useHistory();

    const handleClick = () =>{
        history.push('/');
    }

    return(
        <div className='success'>
            <h2>Thank you for your submission!</h2>
            <br />
            <Button variant= 'outlined' onClick={handleClick}>Leave New Feedback</Button>
        </div>
    )
}

export default Success;