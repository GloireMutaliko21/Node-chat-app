import React from 'react'
import Message from './Message'

const MessagesLayout = ({ messages }) => {
    return (
        <div>
            {messages.map((message, index) =>
                <Message
                    key={index}
                    message={message}
                />
            )}
        </div>
    )
}

export default MessagesLayout