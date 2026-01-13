import logo from '../assets/react.svg'
import '../App.css';
function Header() {
  return (


    <>
      <nav className='mx-3 my-2 d-flex align-items-center gap-4'>
        <div className='d-flex align-items-center gap-2'>
          <img src={logo} alt="" />
          <span>v19.2</span>
          <input className='inp px-3 py-2 rounded-5' type="text" name="" id="" placeholder='Search' />
        </div>

        <div className='d-flex justify-content-center align-items-center gap-4'>
          <span className='px-2 border'>Learn</span>
          <span className='px-2 border'>Reference</span>
          <span className='px-2 border'>Community</span>
          <span className='px-2 border'>Blog</span>
        </div>

      </nav>

    </>


  );
}

export default Header;