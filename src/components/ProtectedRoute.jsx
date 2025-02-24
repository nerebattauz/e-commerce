import { Navigate, Outlet, redirect } from "react-router-dom";
const user = false;
const ProtectedRoute = () => {

  if(!user){
    return <Navigate to={"/login"} replace={true}/>
  } return <Outlet/>

}

export default ProtectedRoute;
