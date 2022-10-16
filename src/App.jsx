import Form from "./components/Form"
import MessagesLayout from "./components/MessagesLayout"

function App() {
  const messages = ["Salut", "Bonjour", "Bonsoir"];
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Form />
      <div className="flex justify-start w-full pl-80">
        <MessagesLayout messages={messages} />
      </div>
    </div>
  )
}

export default App
