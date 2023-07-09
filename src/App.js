import React,{ createContext,useReducer } from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Lifestyle from './categories/Lifestyle';
import Entertainment from './categories/Entertainment';
import Music from './categories/Music';
import Sports from './categories/Sports';
import Historical from './categories/Historical';
import Politics from './categories/Politics';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateBlog from './components/CreateBlog';
import Other from './categories/Other';
import ShowBlog from './categories/ShowBlog';
import { initialState,reducer } from './reducer/useReducer';
import Logout from './components/Logout';
import MyProfile from './components/MyProfile';
import UpdateBlog from './components/UpdateBlog';
export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/createblog' element={<CreateBlog/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/lifestyle' element={<Lifestyle/>}/>
        <Route path='/categories/entertainment' element={<Entertainment/>}/>
        <Route path='/categories/music' element={<Music/>}/>
        <Route path='/categories/sports' element={<Sports/>}/>
        <Route path='/categories/historical' element={<Historical/>}/>
        <Route path='/categories/politics' element={<Politics/>}/>
        <Route path='/categories/other' element={<Other/>}/>
        <Route path='/categories/:category/:id' element={<ShowBlog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/:id/update' element={<UpdateBlog/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
      </UserContext.Provider>
    </>
  )
}

export default App