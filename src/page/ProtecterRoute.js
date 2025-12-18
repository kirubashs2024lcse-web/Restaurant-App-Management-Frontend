import { Navigate } from "react-router-dom";
const ProtecterRoute = ({children}) => {
    const auth = localStorage.getItem("auth");
    if(!auth === true) {
        return children;
    }
    return <Navigate to ={"/login"} replace></Navigate>;
};

export default ProtecterRoute;  