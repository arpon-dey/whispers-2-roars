import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import bannerImage from '../../assets/bg.jpg';
import login from '../../assets/login1.png';
const Login = () => {
    const {signInUser, googleSignIn} = useContext(AuthContext)
    const { register,  handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        signInUser(data.email, data.password)
        .then(res=>{
            const loggedINuser = res.user
            console.log("Logged In User: ", loggedINuser);
            navigate('/dashboard/dHome')
        })

        console.log(data)
    }

    const googleLogIn = () =>{
        googleSignIn()
        navigate('/')
    }

    return (
        <div >
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                       <img src={login} className="w-10/12" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email" placeholder="email" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary " value="Login"  type="submit" />
                            </div>
                        
                        <div>
                            <button onClick={googleLogIn} className=" btn btn-block mt-4 bg-cyan-600 border-0 text-white">Google Sign In</button>
                        </div>
                        </form>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Login;