import React, { useState } from 'react'

const Form = () => {
    const [message, setMessage] = useState('');
    const messageLength = message.length < 2;

    const handlerMessage = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className='flex flex-col'>
            <textarea
                placeholder='Votre message'
                cols={60}
                className='p-3 border rounded outline-none text-gray-600'
                value={message}
                onChange={handlerMessage}
            >
            </textarea>
            <div className='flex justify-end my-5'>
                <button
                    type='button'
                    disabled={messageLength ? true : false}
                    className={`${!messageLength ? 'bg-sky-600' : 'bg-slate-300'} text-white px-4 py-2 rounded-md`}
                >
                    Envoyer
                </button>
            </div>
        </div>
    )
}

export default Form