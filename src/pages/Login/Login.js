import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [loginerror, setLoginError] = useState('');
    const {loginWithEmailAndPassword} = useContext(AuthContext);
  const onSubmit = data => {
      setLoginError('')
      loginWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success('User Login in successfully');
        // ...
        console.log(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorMessage);
        console.log(errorCode, errorMessage);
      })
  }
    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5  rounded-md  w-96" style={{"boxShadow": "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}>
            <p className='text-center text-xl font-bold'>Login</p>
            <div>
                {loginerror && <p className='text-center text-red-600'>{loginerror}</p>}
            </div>
            <label className='text-sm'>Email</label>
            <input className='w-full rounded-md border h-11' type="email" {...register("email", { required: true})} 
             aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === 'required' && <p role="alert" className='text-center text-red-600'>Email is required</p>}
            <label className='text-sm'>password</label>
            <input className='w-full rounded-md border h-11 mt-6' type="password" {...register("password",{ required: true})} 
            aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === 'required' && <p role="alert" className='text-center text-red-600'>password is required</p>}
            <label className='text-sm'>Forgot password?</label>
            <input className='w-full rounded-md border h-11 mt-8 bg-neutral text-white'  type="Submit" />
            <p className='text-sm text-center mt-3'>New to Doctors Portal? <Link to="/signup" className='text-secondary'>Create new account</Link></p>
            <div className='flex items-center justify-between my-4'>
                <hr className='w-2/4 border'/>
                <p className='mx-5'>OR</p>
                <hr className='w-2/4 border'/>
            </div>
            <button className='border rounded-md w-full h-11 text-black'>CONTINUE WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Login;