import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const notHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            { notHeaderFooter  || <Navbar></Navbar>}
            <Outlet></Outlet>
            { notHeaderFooter ||<Footer></Footer>}
        </div>
    );
};

export default Main;