import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5  rounded-md h-[480px] w-96" style={{"box-shadow": "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}>
            <p className='text-center text-xl font-bold'>Login</p>
            <label className='text-sm'>Email</label>
            <input className='w-full rounded-md border h-11' type="email" {...register("email")} />
            <label className='text-sm'>password</label>
            <input className='w-full rounded-md border h-11 mt-6' type="password" {...register("password")} />
            <label className='text-sm'>Forgot password?</label>
            <input className='w-full rounded-md border h-11 mt-8 bg-neutral text-white'  type="Submit" />
            <p className='text-sm text-center mt-3'>New to Doctors Portal? <span className='text-secondary'>Create new account</span></p>
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