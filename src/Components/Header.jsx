import logo from '../assets/react.svg'
import { BsBrightnessHigh } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import '../App.css';
function Header() {
  return (


    <>
      <nav className='mx-3 my-2 d-flex justify-content-between align-items-center '>
        <div className='d-flex align-items-center gap-2'>
          <img src={logo} alt="" />
          <span>v19.2</span>
          <input className='inp px-3 py-2 rounded-5' type="text" name="" id="" placeholder='Search' />
        </div>

        <div className='d-flex justify-content-center align-items-center gap-2'>
          <span className='px-4 bg-secondary text-white fw-bolder py-2 border rounded-5'>Learn</span>
          <span className='px-4 bg-secondary text-white fw-bolder py-2 border rounded-5'>Reference</span>
          <span className='px-4 bg-secondary text-white fw-bolder py-2 border rounded-5'>Community</span>
          <span className='px-4 bg-secondary text-white fw-bolder py-2 border rounded-5'>Blog</span>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='rounded-5 border-0 bg-transparent d-flex justify-content-center align-items-center' style={{ padding: '12px' }}><BsBrightnessHigh size={20} /></button>
          <button className='rounded-5 border-0 bg-transparent d-flex justify-content-center align-items-center' style={{ padding: '12px' }}><IoLanguageSharp size={20} /></button>
          <button className='rounded-5 border-0 bg-transparent d-flex justify-content-center align-items-center' style={{ padding: '12px' }}><AiFillGithub  size={20} /></button>
        </div>
      </nav>

    </>


  );
}

export default Header;