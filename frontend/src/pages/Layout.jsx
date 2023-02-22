import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()

  return(
	<div>
	  <Outlet />	
    </div>
  )
}
export default Layout
