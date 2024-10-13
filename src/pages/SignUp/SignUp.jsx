/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {

    const navigate = useNavigate();

    const { createUser, loading,updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                updateUserProfile(data.name,data.url)
                .then(()=>{
                    console.log('user profile info updated')
                    reset()
                    Swal.fire({
                        title: "User Registered Successfully",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                      navigate('/')
                })
                .catch(error => console.log(error))
                
            })
    }



    // console.log(watch("example"));

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     // console.log(name,email,password)
    //     createUser(email,password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })



    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-700">Name is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="url" className="input input-bordered" {...register("url", { required: true })} />
                            {errors.name && <span className="text-red-700">Photo Url is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-700">Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" {...register("password", { required: true, minLength: 4, maxLength: 10 })} />
                            {/* {errors.password && <span className="text-red-700">Password is required</span>} */}
                            {errors.password && errors.password.type === "minLength" && <span className="text-red-700">Password is short</span>}
                            {errors.password && errors.password.type === "maxLength" && <span className="text-red-700">Password is Long</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'> <small>Already Have An Account <Link to="/login">Login here</Link> </small> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;