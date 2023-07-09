import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';
const Logout = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext)
    const logoutUser = async () => {
        try {
            const logData = await fetch('https://coddingblog.onrender.com/logout', {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            if (!logData.status === 200)
                alert("Logout unsuccessfull!")
            dispatch({ type: 'USER', payload: false })
            alert("You have been logged out succesfully!")
            localStorage.removeItem('jwtoken')
            navigate('/')
        } catch (err) {
            navigate('/')
        }
    }
    useEffect(() => {
        logoutUser();
    }, [])
    return (
        <>
            <div className="logoutContainer" style={{ display: 'flex', height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{color:'black',color:'purple',fontSize:'45px'}}>Loading...</h1>
            </div>
        </>
    )
}

export default Logout