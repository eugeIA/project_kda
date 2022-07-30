import './styles/Menu.css'


const list_menu=['home','About','services','skills','contact']
function Menu(){
    return(
        <div className="menu">
            <ul className='menu_list'>
                {list_menu.map((links)=> <li key={links} className='menu_item'>{links}</li>)}
            </ul>
        </div>
    )
}




export default Menu