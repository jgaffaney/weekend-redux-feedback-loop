import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import DisplayFeedback from '../DisplayFeedback/DisplayFeedback.jsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';


function Admin({fetchFeedback}) {

    const history = useHistory();

    const feedbackResults = useSelector(store => store.displayFeedback)

    const goHome = () => {
        history.push('/');
    }

    useEffect(()=> {
        fetchFeedback();
    }, []);

    return(
        <div className='table-div'>
            <TableContainer >
            <Table sx={{minWidth: 650}} size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell align='right'>Understanding</TableCell>
                        <TableCell align='right'>Support</TableCell>
                        <TableCell align='right'>Comments</TableCell>
                        <TableCell align='right'>Click to Flag for Follow-up</TableCell>
                        <TableCell align='right'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedbackResults.map((row) => {
                        if(!row.flagged) {
                          return <DisplayFeedback key={row.id} row={row} fetchFeedback={fetchFeedback}/>
                        }})}
                </TableBody>
            </Table>
            </TableContainer>
            <h2>The following comments have been flagged for follow-up</h2>
            <TableContainer >
            <Table sx={{minWidth: 650}} size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell align='right'>Understanding</TableCell>
                        <TableCell align='right'>Support</TableCell>
                        <TableCell align='right'>Comments</TableCell>
                        <TableCell align='right'>Mark Follow-up complete</TableCell>
                        <TableCell align='right'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedbackResults.map((row) => {
                        if(row.flagged) {
                          return <DisplayFeedback key={row.id} row={row} fetchFeedback={fetchFeedback}/>
                        }})}
                </TableBody>
            </Table>
            </TableContainer>
            <Button onClick={goHome}>Return to Questionnaire</Button>
        </div>
    )
}

export default Admin;