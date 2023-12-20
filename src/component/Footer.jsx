import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4">
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <p className="text-white text-center">All rights reserved - 2023 - Whisper2Roar</p>
                </div>
                <div className='flex items-center gap-4'>
                    <button><img src={facebook} className='w-8' alt="" /></button>
                    <button><img src={github} className='w-8' alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
