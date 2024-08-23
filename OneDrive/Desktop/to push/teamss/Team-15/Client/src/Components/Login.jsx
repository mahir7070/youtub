import React from 'react'

export default function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handelUsername = (e) => {
        setUsername(e.target.value)
    }
    const handelPassword = (e) => {
        setPassword(e.target.value)
    }

    const handelLogin = (e) => {

        try {
             const response = fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: username, password: password}),
            })
            console.log(response)

        } catch (error) {
            console.error(error)
        }
        e.preventDefault()
        console.log("Login")
    }


  return (
    <div>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button onClick={(e)=>handelLogin(e)}>Login</button>
        </form>

    </div>
  )
}
