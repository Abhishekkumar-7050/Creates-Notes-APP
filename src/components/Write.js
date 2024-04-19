import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/slices/messageSlice';


function Write() {
    
    const inputRef = useRef(null); // it is used for take input  form by ref
   // to dispatch a action to store we need ahook called dispatch
    const dispatch = useDispatch();  // coming from react redux
   
    function handleSubmit(e){
  e.preventDefault();
  const inputText  = inputRef.current.value;
    dispatch(setMessage(inputText)) // setmessage is action from reducer 
      
    // this action need a payload which is inputtext
   } 
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input type='text' ref={inputRef}/>
            <input type='submit' onSubmit={handleSubmit} />
        </form>
    </div>
  )
}

export default Write