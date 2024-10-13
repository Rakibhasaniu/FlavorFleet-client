/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const captchaRef = useRef(null)
    const [disable,setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    },[])

    // const handleCaptcha = () => {
    //     const userValue = captchaRef.current.value;
    //     // const value = e.target.captcha.value;
    //     // console.log(value)
    //     if(validateCaptcha(userValue)){
    //         setDisable(false)
    //     }
    //     else {
    //         setDisable(true)
    //     }
    // }
    const handleCaptcha = (e) => {
        const userValue = e.target.value;
        console.log(userValue)
        if(validateCaptcha(userValue)){
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    const handleLogin= (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div> */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptcha} type="text" placeholder="type the text above" name="captcha" className="input input-bordered" required />
                            {/* <input ref={captchaRef} type="text" placeholder="type the text above" name="captcha" className="input input-bordered" required />
                            <button   onClick={handleCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button> */}
                            
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input className="btn btn-primary" type="submit" 
                            disabled={disable}
                            value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;