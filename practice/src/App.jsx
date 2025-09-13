import "./App.css"
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const handleClick = (name) => {
    alert(name + " you clicked the button!")
  }
  const handleSubmit = () => {
    event.preventDefault(0);
    alert(`Email:${email} \n Password:${Password}\n You are logged in!`)
  }
  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleIncrement = () => {
    setCount(count + 1)
    console.log(count)

  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <p> I am a button</p>
        <input type="text" name="myname" placeholder="Type your Name"
          onChange={handleChange} />
        <input type="text" name="email" placeholder="type your email"
          onChange={handleEmail} />
        <input type="password" name="password" placeholder="type your password"
          onChange={handlePassword} />
        <button type="submit" >login</button>
      </form>
      
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>

      </div>
      )
}

export default App;
