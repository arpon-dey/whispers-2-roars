import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";

const CreateTask = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit , setValue} = useForm()


    useEffect(() => {
        setValue('email', user?.email);
        setValue('status', 'todo');


      }, [user, setValue]);
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://scic-job-task-server-three.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Tasks added successfully',
                        'success'
                    )
                }
            })
    }
    return (
        <div>
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


                    <input type="submit" className="btn bg-sky-950  border-0 hover:bg-teal-600 text-white font-semibold" value='Add Task ' />
                </form>
            </div>
        </div>
    );
};

export default CreateTask;