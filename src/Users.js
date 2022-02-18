import react,{ useState }  from "react";
import{Button,Table} from 'react-bootstrap'

function Users(){
    const [user,setUser] = useState([
        {name:"rohit",age:'26'},
        {name:"rahul",age:'30'},
        {name:"rajani",age:'40'},
        {name:"ragav",age:'16'}
    ])
        return(
            // <div>
            //     <h1>User List is given </h1>
            //    {user.length ===4?<div>this is right</div>:<div>this is false </div>}
            // </div>
            <>
            <h1>User List is given </h1>
            <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>

                <div>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
      {
          user.map((item,index)=> <tr key={index}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>          
        </tr> 
          )
      }
     
  </tbody>
</Table>
</div>
            </>
        )
}

export default Users;