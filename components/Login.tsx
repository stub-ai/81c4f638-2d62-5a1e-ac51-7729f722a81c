import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-1/3">
        <h2 className="text-3xl mb-7">{isLogin ? 'Log in' : 'Sign up'}</h2>
        <form>
          {!isLogin && (
            <div>
              <label className="block mb-2">Username</label>
              <input type="text" className="border-2 border-gray-200 p-2 w-full rounded-md mb-4" />
            </div>
          )}
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="border-2 border-gray-200 p-2 w-full rounded-md mb-4" />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input type="password" className="border-2 border-gray-200 p-2 w-full rounded-md mb-4" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-md mb-4">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
        </form>
        <button onClick={switchMode} className="text-blue-500">
          Switch to {isLogin ? 'Sign up' : 'Log in'}
        </button>
      </div>
    </div>
  );
};

export default Login;