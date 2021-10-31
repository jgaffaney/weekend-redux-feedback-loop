import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, TableRow } from '@mui/material';


function DisplayFeedback({ row, fetchFeedback }) {

    const handleDelete = () =>{
        axios({
            method: 'DELETE',
            url: `/feedback/${row.id}`,
        }).then(response => {
            fetchFeedback();
        }).catch(err=>{
            console.log('Error on delete: ', err);
        })
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} id={row.id}>
            <TableCell align='right'>{row.feeling}</TableCell>
            <TableCell align='right'>{row.understanding}</TableCell>
            <TableCell align='right'>{row.support}</TableCell>
            <TableCell align='right'>{row.comments}</TableCell>
            <TableCell align='right'><IconButton onClick={handleDelete} aria-label="delete"><DeleteIcon /></IconButton></TableCell>
        </TableRow>
    )
}

export default DisplayFeedback;