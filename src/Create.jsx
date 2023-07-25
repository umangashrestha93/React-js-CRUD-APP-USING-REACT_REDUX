import React from 'react'

function Create() {
  return (
    <div className='create-container'>
        <h3>Add new user</h3>
        <form>

            <div>
                <label htmlFor='name' >Name</label>
                <input placeholder="enter your name " type='text' name='name' className='form-control'></input>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input placeholder="enter your email" type='email' name='email' className='form-control'/>
            </div>
            <br />
            <button className='create-button'>Submit</button>
        </form>
        
    </div>
  )
}

export default Create
