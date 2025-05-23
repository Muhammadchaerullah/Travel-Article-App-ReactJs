import { useState } from 'react';
import { useFormik } from 'formik';
import basicScema from '../schemas';
import { Link } from 'react-router-dom';

const Login = () => { 
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle state
      };
    const {values,errors,touched,isSubmitting,handleSubmit,handleChange,handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit : async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve,1000))
        actions.resetForm()
    },
    validationSchema : basicScema
  });
  return (
    <div className='flex w-full min-h-screen justify-center items-center'>
        <div className={errors.email && errors.password ? "bg-white p-6 w-full max-w-sm border border-red-500" : "bg-white p-6 w-full max-w-sm border"}>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 mb-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Enter your email'
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? 'border border-red-500 p-2 focus:outline-none focus:ring-0' : 'border p-2 focus:outline-none focus:ring-0'}
                    />
                    {errors.email && touched.email && <p className='text-xs text-red-500'>{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="*******"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={`p-2 pr-16 border focus:outline-none focus:ring-0 ${
                        errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    {/* Toggle Icon/Text */}
                    <span
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-9 text-sm cursor-pointer text-gray-500 select-none"
                    >
                        {showPassword ? 'Sembunyikan' : 'Lihat'}
                    </span>

                    {/* Error Message */}
                    {errors.password && touched.password && (
                        <p className="text-xs text-red-500">{errors.password}</p>
                    )}
                </div>

                <div className='w-full'>
                    <button type="submit" disabled={isSubmitting} className='w-full py-2 px-3 bg-blue-50 border cursor-pointer hover:bg-blue-100'>Submit</button>
                </div>
            </div>
            <div>
            <p className="text-sm text-slate-500 text-end hover:text-blue-500 cursor-pointer">
                <Link to="/register">Sign up</Link>
            </p>
            </div>
        </form>
        </div>
    </div>
  );
};

export default Login;