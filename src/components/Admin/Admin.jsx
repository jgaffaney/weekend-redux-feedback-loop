import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import DisplayFeedback from '../DisplayFeedback/DisplayFeedback.jsx';
import Table from '@mui/material/Table';


function Admin({fetchFeedback}) {

    const feedbackResults = useSelector(store => store.displayFeedback)

    useEffect(()=> {
        fetchFeedback();
    }, []);

    return(
        <div>
            <Table>
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
                        <DisplayFeedback row={row} fetchFeedback={fetchFeedback}/>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Admin;