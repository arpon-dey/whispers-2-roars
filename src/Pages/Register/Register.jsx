import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import bannerImage from '../../assets/bg.jpg';
import login from '../../assets/login1.png';
const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {

                const loggedUser = res.user
                console.log(loggedUser);
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            photo: data.photoURL,


                        }
                        console.log(userInfo);
                        navigate('/')
                    })


            })
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
                                <div className="form-control mb-2">

                                    <input
                                        {...register("name")}
                                        type="text" placeholder="name" className="input input-bordered" required />

                                </div>
                                <div className="form-control mb-2">

                                    <input
                                        {...register("email")}
                                        type="email" placeholder="email" className="input input-bordered" required />

                                </div>
                                <div className="form-control mb-2">

                                <input type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="photoURL" className="input input-bordered" />

                                </div>
                                <div className="form-control">

                                    <input  {...register("password")} type="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary " value="Register" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    };

    export default Register;