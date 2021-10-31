import {useSelector} from 'react-redux';
import {useEffect} from 'react';

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
                    <tr>Feedback Results</tr>
                    {feedbackResults.map((record) => (
                        <tr>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;