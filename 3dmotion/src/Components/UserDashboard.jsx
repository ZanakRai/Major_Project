import axios from "axios"
import { useState, useEffect } from "react"
import Logout from "../pages/Logout"
function UserDashboard() {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState('')
    const [loading,setLoading]=useState(true)
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            setMessage('You must be logged in to access the dashboard');
            setLoading(false);
            return;
        }
        axios.get('http://127.0.0.1:8000/dashboard/', {
            headers: {
                Authorization:`Token ${token}`
            }
        })
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err)
                setMessage('Unauthorized or token expired')
                setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading ...</p>
    return (
        <>
            <div>
                <h2>Dashboard</h2>
                {message && <p>{ message}</p>}
                {data && <p>{`Welcome to your dashboard, ${data.username}`}</p>}
                
            </div>
            <div>
                <Logout/>
            </div>
        </>
    )
}
export default UserDashboard