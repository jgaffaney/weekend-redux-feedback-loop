import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


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
        <tr id={row.id}>
            <td>{row.feeling}</td>
            <td>{row.understanding}</td>
            <td>{row.support}</td>
            <td>{row.comments}</td>
            <td><IconButton onClick={handleDelete} aria-label="delete"><DeleteIcon /></IconButton></td>
        </tr>
    )
}

export default DisplayFeedback;