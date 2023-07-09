import React, { useState } from 'react'
import SignupImg from '../images/signup.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate();
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        password: "",
        cpassword: ""
    })
    const inputSignupEvent = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setSignupData({ ...signupData, [name]: val })
    }
    const submitData = async (e) => {
        e.preventDefault();
        const { name, email, phone, age, gender, password, cpassword } = signupData;
        try {
            if (!name || !email || !phone || !age || !gender || !password || !cpassword)
                return toast.warning('Please fill all the field properly!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            const postData = await fetch("https://coddingblog.onrender.com/signup", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, phone, age, gender, password, cpassword })
            });
            // console.log(postData)
            if (postData.status===200) {
                toast.success('You have been registered successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setSignupData({
                    name: "",
                    email: "",
                    phone: "",
                    age: "",
                    gender: "",
                    password: "",
                    cpassword: ""
                })
                setTimeout(()=>{
                    navigate('/login')
                },2000);
            }
            else if(postData.status===409){
                // alert("data has not been saved for some reason")
                toast.error('User already exists!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else if(postData.status===406){
                // alert("data has not been saved for some reason")
                toast.error('Passwords do not match!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else if(postData.status===401){
                // alert("data has not been saved for some reason")
                toast.error('Data has not been saved!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="signupContainer">
                <div className="signupC">
                    <h1>Sign Up</h1>
                    <div className="signupContent">
                        <img src={SignupImg} alt="img" style={{ backgroundColor: 'white', width: '500px' }} />
                        <form method='POST'>
                            <input type="text" placeholder='Name' name='name' onChange={inputSignupEvent} value={signupData.name}/>
                            <input type="text" placeholder='Email' name='email' onChange={inputSignupEvent} value={signupData.email}/>
                            <input type="text" placeholder='Phone' name='phone' onChange={inputSignupEvent} value={signupData.phone}/>
                            <input type="text" placeholder='Age' name='age' onChange={inputSignupEvent} value={signupData.age}/>
                            <select name="gender" id="gender" onChange={inputSignupEvent} value={signupData.gender}>
                                <option value="gender">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {/* <input type="text" placeholder='Gender'/> */}
                            <input type="password" placeholder='Password' name='password' onChange={inputSignupEvent} value={signupData.password}/>
                            <input type="password" placeholder='Confirm Password' name='cpassword' onChange={inputSignupEvent} value={signupData.cpassword}/>
                            <button type='submit' onClick={submitData}>Sign Up</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup