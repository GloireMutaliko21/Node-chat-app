import { useState } from "react";

import Form from "./components/Form"
import MessagesLayout from "./components/MessagesLayout"

function App() {
  const [messages, setMessages] = useState([])

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Form messages={messages} setMessages={setMessages} />
      <div className="flex justify-start w-full pl-80">
        <MessagesLayout messages={messages} />
      </div>
    </div>
  )
}

export default App
