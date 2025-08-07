import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
    const navigate = useNavigate()
    const [message,setMessage]=useState("")

    const handleLogout = async() => {
        token = localStorage.getItem("token");
        try {
            const response = await fetch("http://127.0.0.1:8000/logout/", {
                method:"POST",
                headers: {
                    Authorization:`Token ${token}`,
                },
            })
            if (response.ok) {
                const data = await response.json()
                setMessage(data.message)

                localStorage.removeItem('token')
                navigate("/login") 
            } else {
                console.error("logout failed")
            }
           
        } catch (error) {
            console.error("logout error")
        }
        
        
    }
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            {message && <p>{ message}</p>}
        </>
    )
}

export default Logout