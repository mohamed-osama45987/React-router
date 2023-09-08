import { useEffect } from "react";

import { useNavigate, useLocation, useParams, useMatch, Link, Outlet } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const match = useMatch('/contact');


  useEffect(() => {

    console.log(match)
    // call to the backend and get all user info



  }, [navigate])

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Contact</h1>


      <Link to="/contact/user"> User page</Link>

      <Outlet />
    </div>




  )
}

export default Contact