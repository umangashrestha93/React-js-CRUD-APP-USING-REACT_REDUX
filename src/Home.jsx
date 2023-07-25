import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const users = useSelector((state)=> state.users)
    console.log(users)
  return (
    <div className='container'>
        <h2>CRUD APP with JSON Server</h2>
        <Link to= "/create" className='button-1'>create</Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
      
    </div>
  )
}

export default Home
