import React, { useContext, useState } from 'react'
import LoginImg from '../images/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';
const Login = () => {
    const { state, dispatch } = useContext(UserContext)
    const navigate=useNavigate();
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const inputEvent=(e)=>{
        const name=e.target.name;
        const val=e.target.value;
        setLoginData({...loginData,[name]:val})
    }
    const submitData=async (e)=>{
        e.preventDefault();
        const {email,password}=loginData;
        try{
            if(!email || !password)
                return alert("Please enter the data")
            const postData=await fetch("https://coddingblog.onrender.com/login",{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            })
            // console.log(postData)
            if(postData.status===200){
                dispatch({ type: 'USER', payload: true })
                toast.success('You have been logged in successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoginData({
                    email:"",
                    password:""
                })
                setTimeout(()=>{
                    navigate('/')
                },2000);
            }
            else if(postData.status===401){
                toast.error('Invalid Credentials!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className="loginContainer">
                <div className="loginInfo">
                    <h1>Login</h1>
                    <div className="loginContent">
                        <img src={LoginImg} alt="img" />
                        <form method='POST'>
                            <input type="text" placeholder='Email' name='email' onChange={inputEvent} value={loginData.email}/>
                            <input type="password" placeholder='Password' name='password' onChange={inputEvent} value={loginData.password}/>
                            <button type='submit' onClick={submitData}>Log IN</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;