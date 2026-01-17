import logo from '../assets/react.svg'
import { BsBrightnessHigh } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import '../App.css';
function Header() {
  return (
    <>
      <nav className='px-3 py-2 d-flex justify-content-between align-items-center' style={{ backgroundColor: "#181A1F" }}>
        <div className='d-flex align-items-center gap-2'>
          <img src={logo} alt="" />
          <span className='text-secondary fw-medium'>v19.2</span>
          <input className='inp px-4 py-2 border-0 text-white rounded-5' style={{ backgroundColor: '#333A45' }} type="text" name="" id="" placeholder='Search' />
        </div>

        <div className='d-flex justify-content-center align-items-center gap-1'>
          <span className='px-3 bg-transparent text-white fw-bolder py-2 icon_hover rounded-5'>Learn</span>
          <span className='px-3 bg-transparent text-white fw-bolder py-2 icon_hover rounded-5'>Reference</span>
          <span className='px-3 bg-transparent text-white fw-bolder py-2 icon_hover rounded-5'>Community</span>
          <span className='px-3 bg-transparent text-white fw-bolder py-2 icon_hover rounded-5'>Blog</span>
        </div>
        <div className='d-flex justify-content-center gap-1 align-items-center'>
          <button className='icon_hover rounded-5 border-0 bg-transparent d-flex justify-content-center align-items-center' style={{ padding: '12px' }}><BsBrightnessHigh className='text-white' size={23} /></button>
          <button className='icon_hover rounded-5 border-0 bg-transparent d-flex justify-content-center align-items-center' style={{ padding: '12px' }}><IoLanguageSharp className='text-white' size={23} /></button>
          <button className='icon_hover rounded-5 border-0 bg-transparent d-flex justify-content-center align-items-center' style={{ padding: '12px' }}><AiFillGithub className='text-white' size={23} /></button>
        </div>
      </nav>

    </>
  );
}

export default Header;