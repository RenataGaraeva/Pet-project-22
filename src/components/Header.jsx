import {NavLink, Outlet} from 'react-router-dom'

export default function Header () {
 
  return (
    <>
  <ul className = "listOfLinksOnHomePage">
    <div className = "firstExtraContainerOfLinksHomePage"> 
  <li className='itemOfLinksOnHomePage'>
      <NavLink to = "/homePage" className = "navLink">Главная </NavLink>
      </li>
      <li className='itemOfLinksOnHomePage'>
  <NavLink to = "/contacts" className = "navLink">Контакты</NavLink>
  </li>
  </div>
  <div className = "secondExtraContainerOfLinksHomePage"> 
  <li className='itemOfLinksOnHomePage'>
  <NavLink to = "/anime" className = "navLink">Аниме</NavLink>
  </li>
     <li className='itemOfLinksOnHomePage'>
      <NavLink to = "/manhwa" className = "navLink">Манхва</NavLink>
      </li>
     <li className='itemOfLinksOnHomePage'>
      <NavLink to = "/dunhua" className = "navLink">Дунхуа</NavLink>
      </li>
      </div>
  </ul>

    <Outlet />
    </>
  )
}
