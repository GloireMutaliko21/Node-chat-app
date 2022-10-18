import React, { useState, useEffect } from 'react';
import { AiOutlineSend } from "react-icons/ai";

const Form = ({ messages, setMessages }) => {
    const [message, setMessage] = useState('');
    const [fecthdata, setFecthdata] = useState(true)
    const messageLength = message.length < 2;

    const handlerMessage = (e) => {
        setMessage(e.target.value);
    };

    const newMessages = [...messages];

    const handlerClick = () => {
        // newMessages.push(message);
        // setMessages(newMessages);
        fetch('http://localhost:8001/', {
            method: "POST",
            body: JSON.stringify(message)
        }).then(data => data.json())
            .then(result => console.log(result))
        setFecthdata(true);
        setMessage('');
    };

    useEffect(() => {
        if (fecthdata) {
            const responseData = fetch('http://localhost:8001/').then(data => data.json())
                .then(result => setMessages(Object.values(result)))
            console.log(messages);
            setFecthdata(false);
        }
        // console.log(responseData);
    }, [messages, fecthdata])

    return (
        <div className='flex bottom-5 fixed'>
            <textarea
                placeholder='Votre message'
                cols={60}
                rows={1}
                className='border border-sky-600 rounded-full outline-none text-gray-600 p-2 mr-2'
                value={message}
                onChange={handlerMessage}
            >
            </textarea>
            <button
                type='button'
                disabled={messageLength ? true : false}
                onClick={handlerClick}
                className={`${!messageLength ? 'bg-sky-600' : 'bg-slate-300'} text-white px-4 py-2 rounded-full`}
            >
                <AiOutlineSend className='text-xl' />
            </button>
        </div>
    )
}

export default Form