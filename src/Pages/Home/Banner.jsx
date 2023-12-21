import { Link } from 'react-router-dom';
import bannerImage from '../../assets/bg.jpg';
import photo from '../../assets/pto.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-white" >
                <div className="grid grid-cols-12 items-center">
                    <div className='col-span-6'>
                        <h1 className="mb-5 text-6xl font-semibold" style={{ fontFamily: 'cursive' }} >Start Whispering,</h1>
                        <p className="mb-5 text-4xl" style={{ fontFamily: 'cursive' }} >Watch Your To-Dos Roar.🚀</p>
                        {/* <button className="btn"></button> */}


                        <Link to="/login" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative text-white">Let's Explore</span>
                        </Link>


                    </div>
                    <div className='col-span-6'>
                        <img src={photo} className='' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
