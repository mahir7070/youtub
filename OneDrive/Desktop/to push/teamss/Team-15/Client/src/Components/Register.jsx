import React from 'react'

export default function Register() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const handelUsername = (e) => {
        setUsername(e.target.value)
    }
    const handelPassword = (e) => {
        setPassword(e.target.value)
    }
    const handelConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handelRegister = (e) => {
        try {
             const response = fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: username, password: password, confirmPassword: confirmPassword}),
            })
            console.log(response)

        } catch (error) {
            console.error(error)
        }
        e.preventDefault()
        console.log("Register " )
    }
  return (
    <div>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <button>Register</button>
        </form>
    </div>
  )
}
