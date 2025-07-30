import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate()
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', {
                username,
                password
            });
            console.log(response.data)
            setmessage("Login Successfull !")
            localStorage.setItem('token', response.data.token)
            navigate("/dashboard")
            
        } catch (error) {
            setmessage("Invalid creditials")
        }

    }
    return (
      
        <>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">UserName:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                    />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {message && <p>{message}</p>}
        </div>
        </>
    )
}

export default Login