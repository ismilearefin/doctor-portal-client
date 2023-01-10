import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {SignupwithPassword, updateUser} = useContext(AuthContext);
    const [signUpError, setsignUpError] = useState(null);
    const onSubmit = data => {
        setsignUpError('');
        SignupwithPassword(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            toast.success('User signed in successfully');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch((error) => console.error(error))
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setsignUpError(errorMessage);
            // ..
          });
    }
    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 rounded-md w-96" style={{"boxShadow": "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}>
            <p className='text-center text-xl font-bold mb-3'>Sign Up</p>
            <label className='text-sm'>Name</label>
            <input className='w-full rounded-md border h-11' type="text" {...register("name", { required: true})} 
             aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === 'required' && <p role="alert" className='text-center text-red-600'>Name is required</p>}

            <label className='text-sm'>Email</label>
            <input className='w-full rounded-md border h-11' type="email" {...register("email", { required: true})} 
             aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === 'required' && <p role="alert" className='text-center text-red-600'>Email is required</p>}
            <label className='text-sm'>password</label>
            <input className='w-full rounded-md border h-11 ' type="password" {...register("password",{ required: true})} 
            aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === 'required' && <p role="alert" className='text-center text-red-600'>password is required</p>}
            <input className='w-full rounded-md border h-11 mt-8 bg-neutral text-white'  type="Submit" />
            <p className='text-sm text-center mt-3'>New to Doctors Portal? <Link to="/login" className='text-secondary'>Already have an account</Link></p>
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

export default Signup;