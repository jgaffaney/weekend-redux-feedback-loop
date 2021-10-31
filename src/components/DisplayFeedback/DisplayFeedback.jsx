import axios from 'axios';

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
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default DisplayFeedback;