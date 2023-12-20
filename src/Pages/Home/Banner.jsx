import bannerImage from '../../assets/bg.jpg';
import photo from '../../assets/pto.png';

const Banner = () => {
    return (
        <div  className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-white" >
                <div className="grid grid-cols-12 items-center">
                    <div className='col-span-6'>
                    <h1 className="mb-5 text-6xl font-semibold" style={{ fontFamily: 'cursive' }} >Start Whispering,</h1>
                        <p className="mb-5 text-4xl" style={{ fontFamily: 'cursive' }} >Watch Your To-Dos Roar.🚀</p>
                        <button className="btn btn-primary">Get Started</button>
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
