import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/footer";


const Main = () => {
    // const location = useLocation() 
    // const noNavFoot = location.pathname.includes('login' )|| location.pathname.includes('signUp');
    return (
        <div className="">
            <Navbar></Navbar>
            {/* {noNavFoot || } */}
            <Outlet></Outlet>
          <Footer></Footer>
            {/* {noNavFoot || } */}
        </div>
    );
};

export default Main;