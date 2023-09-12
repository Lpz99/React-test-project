import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = ({search, setSearch, runMovie}) => {
  const  [menu, setMenu] = useState(true)
  return (
    <div className='flex justify-between items-center px-4 max-w-[1240px] mx-auto h-14'>
      <h1>Movie</h1>
      <div>
        <ul className='[&>*]:px-3 hidden md:flex [&>*]:cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Movies</li>
          <li>Reviews</li>
          <li>Contacts</li>
        </ul>
        </div>
      <div className='flex'>
        <input className='p-1 rounded mx-4' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e)=> e.key === 'Enter' ? runMovie(search) : null }/>
        <button className=' bg-slate-600 p-1 px-2 rounded-md border-none' onClick={() => runMovie(search)}>Search</button>
      </div>
        <div className='md:hidden cursor-pointer ease-in' onClick={()=> setMenu(prev=> !prev)}>{menu ? <AiOutlineMenu/> : <AiOutlineClose/>}</div>
        <ul className={menu ? 'fixed top-0 left-[-100%] h-full w-[60%] font-bold bg-black flex-col justify-center items-center [&>*]:my-7 ease-out duration-1000' : 'fixed top-0 left-0 h-full w-[60%] font-bold bg-black flex-col justify-center items-center [&>*]: text-center border-r [&>*]:my-7 [&>*]:cursor-pointer ease-in duration-1000'}>
          <li onClick={()=> setMenu(prev=> !prev)}>Home</li>
          <li onClick={()=> setMenu(prev=> !prev)}>About</li>
          <li onClick={()=> setMenu(prev=> !prev)}>Blog</li>
          <li onClick={()=> setMenu(prev=> !prev)}>Movies</li>
          <li onClick={()=> setMenu(prev=> !prev)}>Reviews</li>
          <li onClick={()=> setMenu(prev=> !prev)}>Contacts</li>
        </ul>
      </div>
  )
}

export default Navbar