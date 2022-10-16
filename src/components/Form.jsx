import React from 'react'

const Form = () => {
    return (
        <div className='flex flex-col'>
            <textarea
                placeholder='Votre message'
                cols={60}
                className='p-3 border rounded outline-none text-gray-600'
            >
            </textarea>
            <div className='flex justify-end my-5'>
                <button
                    type='button'
                    className='bg-sky-600 text-white px-4 py-2 rounded-md'
                >
                    Envoyer
                </button>
            </div>
        </div>
    )
}

export default Form