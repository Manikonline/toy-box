
import { useContext, useState } from 'react';

import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'





const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext)
   
    const [error, setError] = useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const from=location?.state?.from?.pathname ||'/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from,{replace:true})


            })
            .catch(error => {
                console.log(error);
                setError(error.message)

            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);

                const user = result.user;
                navigate(from, {replace:true})


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)

            });

    }



    return (
        <div >
            <div className="hero min-h-screen bg-base-200">
                <div className="my-9 ">
                    <div className="text-center ">
                        <h1 className="text-2xl mt-1 font-bold">Login Now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="text-black input  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="text-black input input-bordered" required />

                            </div>
                            <div className='text-red-600'>
                                {error}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-color">Login</button>
                            </div>

                            <label className="label">
                                <p>New User?<Link className='new-user-btn' to='/registration'>Registration</Link> here.</p>
                            </label>
                        </form>
                   
                    </div>

                    <div className='mt-3 text-center googleLogin text-white'>
                            <p className=''>Or</p>
                            <h5 >Login With</h5>
                            <div className='py-5 '>
                                <button onClick={handleGoogleLogin} className="button mb-2 inline-flex " ><FaGoogle className='mt-1 me-1' /> Login with Google</button>
                            </div>
                        </div>
                </div>


            </div>
        </div>
    );
};

export default Login;








