import {useNavigate} from "react-router-dom";
import {auth} from "../../firebase";
import style from "./SingoutButton.module.css"

const SignoutButton = (props) => {
    const navigate = useNavigate();
    localStorage.removeItem("user");
    const signout = () => {
        auth.signOut()
        navigate("/")
    }
    return (<div>
        <button onClick={signout} className={style.signOutButton}>Signout</button>
    </div>)
}

export default SignoutButton