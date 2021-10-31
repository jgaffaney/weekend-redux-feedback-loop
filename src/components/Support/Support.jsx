import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('');
    const currentSupport = useSelector(store=>store.submission.support)

    const back = () =>{
        history.push('/understanding')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // send dispatch with the input or currentSupport if no input change or 'not answered'
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput || currentSupport || 'not answered'
        })
        setSupportInput('');
        history.push('/comments')
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h2>How well are you being supported?</h2>
            <label>Support?</label>
            <input 
                type="number" 
                onChange={(e)=> setSupportInput(e.target.value)} 
                defaultValue={currentSupport}/>
        </form>
        <button onClick={back}>Back</button>
        <button onClick={handleSubmit}>Next</button>
        </div>
        

    )
}

export default Support;