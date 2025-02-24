import { Navigate, Outlet, redirect } from "react-router-dom";
const user = true;
const ProtectedRoute = () => {

  if(!user){
    return <Navigate to={"/login"} replace/>
  } return <Outlet/>

}

export default ProtectedRoute;
