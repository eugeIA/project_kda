import Menu from './Menu';
import './styles/Nav.css';



function Nav(){
    return(
        <div className='navbar'>
            <h1 className='site_title'>Bsinc</h1>
            <Menu />
        </div>
    )
}


export default Nav