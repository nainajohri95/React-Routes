import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../../redux/slices/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

function CreateNote() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch()

    function handleSumbit(e){
        e.preventDefault();
        dispatch(createNote({
          title,
          desc,
          id:nanoid(10)
        }))
    }
  return (
    <div>
      <form onSubmit={handleSumbit  }>
            <input placeholder="title here" type="text" onChange={(e)=> setTitle(e.target.value)} />
            <input placeholder="decription here" type="text" onChange={(e)=> setDesc(e.target.value)}/>
            <input  type="sumbit" onClick={handleSumbit}/>
      </form>
    </div>
  )
}

export default CreateNote
