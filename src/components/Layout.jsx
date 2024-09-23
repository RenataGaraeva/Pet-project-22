import {NavLink, Outlet} from 'react-router-dom'

export default function Layout () {
  const newLink = {
    textDecoration: 'none',
    color: 'black'
  };
  
  return (
    
  
    <>
  <ul className = "flexForUl">
  <li className='liForUl'>
  <NavLink to = "/anime"  style={newLink} /*className = "routeForHeader" */>Аниме</NavLink>
  </li>
     <li className='liForUl'>
      <NavLink to = "/manhwa" style={newLink}>Манхва</NavLink>
      </li>
     <li className='liForUl'>
      <NavLink to = "/dunhua" style={newLink}>Дунхуа</NavLink>
      </li>
 <li className='liForUl'>
  <NavLink to = "/aboutMe" style={newLink}>Обо мне</NavLink>

  </li>
     <li className='liForUl'>
      <NavLink to = "/aboutContent" style={newLink}> О сайте </NavLink>

      </li>
    
  </ul>

    <Outlet />
    </>
  )
}
