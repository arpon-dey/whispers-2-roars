
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className=" flex flex-col lg:flex-row ">
            <div className="w-full lg:w-72 lg:min-h-screen bg-gradient-to-r from-[#050f3a] to-[#24032f] text-white font-semibold">
                <ul className="menu grid grid-cols-2 lg:grid-cols-1 justify-between">
                    <li className='mb-4 bg-gradient-to-r from-[#4a0f4c] to-[#041537] bg-opacity-50 rounded-lg'>
                        <div className='flex justify-center items-center gap-4'>
                            <img src={user?.photoURL} className="w-12 rounded-full" alt="" />
                            <p className='text-lg'>{user?.displayName}</p>
                        </div>
                    </li>
                  
                    <li className='mb-2'>
                        <NavLink to='/dashboard/dHome'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/dashboard/createTask'>
                            Create task
                        </NavLink>
                    </li>
                    <div className="divider "></div>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>


                </ul>
            </div>
            <div className="flex-1 p-8 bg-gradient-to-r from-[#24032f] to-[#050f3a]
            ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;