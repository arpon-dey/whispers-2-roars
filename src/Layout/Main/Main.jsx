import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/footer";


const Main = () => {
    const location = useLocation() 
    const noNavFoot = location.pathname.includes('login' )|| location.pathname.includes('register');
    return (
        <div className="">
            {/* <Navbar></Navbar> */}
            {noNavFoot || <Navbar></Navbar> }
            <Outlet></Outlet>
          {/* <Footer></Footer> */}
            {noNavFoot || <Footer></Footer>}
        </div>
    );
};

export default Main;