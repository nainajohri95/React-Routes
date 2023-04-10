import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/slices/messageSlice';

function child1() {

const inputRef = useRef(null);

const dispatch = useDispatch();

function handleSumbit(e){
    e.preventDefault();

    const inputTextValue = inputRef.current.value;
    dispatch(setMessage(inputTextValue))
}
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input type="text" ref={inputRef}/>
        <input type="sumbit" onClick={handleSumbit}/>
      </form>
    </div>
  )
}

export default child1;
