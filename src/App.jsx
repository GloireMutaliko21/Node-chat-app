import { useState, useEffect } from "react";

import Form from "./components/Form"
import MessagesLayout from "./components/MessagesLayout"

function App() {
  const [messages, setMessages] = useState([])



  return (
    <div className="flex flex-col justify-center items-center h-full w-full pt-10 bg-slate-100">
      <div className="flex justify-start w-full pl-80">
        <MessagesLayout messages={messages} />
      </div>
      <Form messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default App
