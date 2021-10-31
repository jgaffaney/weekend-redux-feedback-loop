import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import DisplayFeedback from '../DisplayFeedback/DisplayFeedback.jsx';

function Admin({fetchFeedback}) {

    const feedbackResults = useSelector(store => store.displayFeedback)

    useEffect(()=> {
        fetchFeedback();
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackResults.map((row) => (
                        <DisplayFeedback row={row} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;