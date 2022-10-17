import React from 'react';
import { BiUserCircle } from "react-icons/bi";

const Message = ({ message }) => {
    return (
        <div className='flex items-center my-4'>
            <p><BiUserCircle className='text-gray-400 text-2xl mr-2' /></p>
            <p className='bg-sky-500 text-yellow-50 p-2 rounded-t-2xl rounded-bl-2xl max-w-xs'>{message.slice(1, message.length - 1)}</p>
        </div>
    )
}

export default Message