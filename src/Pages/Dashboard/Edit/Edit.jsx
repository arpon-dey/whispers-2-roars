/* eslint-disable react/no-unknown-property */

import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
    const taskData = useLoaderData();
    console.log(taskData);
    const { register, handleSubmit } = useForm()
    const {name, description, date, priority, _id} = taskData
    const navigate = useNavigate();


    const onSubmit = (data) => {
        try {
            axios.put(`https://scic-job-task-server-three.vercel.app/tasks/${_id}`, data)
            .then(res => {
                if(res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Welcome!',
                        'Task has been Updated!',
                        'success'
                      )
                }
                // console.log(res.data);
                navigate("/dashboard/home")
            })

        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div>
            <div>
            <div>
                <h1 className='font-bold mt-5 text-3xl'>Edit task</h1>
            </div>
            </div>
            <div className="w-9/12 mx-auto   px-16 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control grid grid-cols-1 md:grid-cols-12  gap-2 mb-4">
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            required
                            placeholder="Name of that task"
                            name="name"
                            className="input input-bordered bg-cyan-900 col-span-6 text-white"
                        />
                        <select defaultValue='default'  {...register("Priority", { required: true })}
                            className="select  w-full  bg-cyan-900 col-span-3 text-white">
                            <option disabled value='default' >Priority</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>


                        </select>

                        <input
                            type="date"
                            {...register("date", { required: true })}
                            required
                            placeholder="Date"
                            name="date"
                            className="input input-bordered bg-cyan-900 col-span-3 text-white"
                        />
                    </div>




                    <div className="form-control  gap-2 mb-4">
                        <textarea
                            {...register("description", { required: true })}
                            type="text"
                            placeholder="Short description"
                            name="description"
                            className="textarea textarea-bordered    bg-cyan-900 text-white"
                        />
                    </div>


                    <input type="submit" className="btn bg-sky-950  border-0 hover:bg-teal-600 text-white font-semibold" value='Update Task ' />
                </form>
            </div>
        </div>
    );
};

export default Edit;