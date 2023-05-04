import {useContext} from "react";
import {
    createBrowserRouter, RouterProvider, Navigate,
} from "react-router-dom";
import {AuthContext} from "./LoginComp/context/AuthContext";
import Home from "./LoginComp/pages/home/Home";
import Login from "./LoginComp/pages/login/Login";
import Register from "./LoginComp/pages/register/Register";
import Clubs from "./components/Clubs";

function App() {
    const {currentUser} = useContext(AuthContext);

    const AuthRoute = ({children}) => {
        return currentUser ? children : <Navigate to="/"/>;
    };

    const router = createBrowserRouter([{
        path: "/", element: <Login/>,
    }, {
        path: "/register", element: <Register/>,
    }, {
        path: "/clubs", element: (<AuthRoute>
            <Clubs/>
        </AuthRoute>),
    },]);
    return (<div className="app">
        <RouterProvider router={router}/>
    </div>);
}

export default App;

