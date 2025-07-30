import axios from "axios";
import { useState } from "react";


function Register() {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/register/", {
                username,
                email,
                password
            });
            setmessage("Registered successfully")
            console.log(response.data)
            setusername('')
            setemail('')
            setpassword('')
        } catch (error) {
            console.error(error)
            setmessage("Registered failed !")

             }
    }
    
    return (
        <>
            <div>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Username:</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                        
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <input
                            type="text"
                            placeholder="your password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        
                        />
                    </div>
                    <button type="submit">Register</button>

                </form>
                {message && <p>{message}</p>}
            </div>
        
        </>
    )
}

export default Register