import '../css/main.css'
import Logo from '../img/logo.svg'

export default function Header(){
  return(
    <>
    <header className='main--header'>
      <div className='wrapper'>
        <div className='main--header_content'>
          <img src={Logo} alt="logo" />
          <h1>my travel journal</h1>  
        </div>
        
      </div>
      
    </header>
      
    </>
  )
}