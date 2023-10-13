import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/auth-provider'
import { useEffect } from 'react';


export const IndexPage = () => {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
  if (!state.authenticated) {
      navigate('/login')
    }
  }, [])

  const handleLogout = () => {
    dispatch({ type: 'signOut'});
    navigate('/login')
  };
  return ( 
    <div className='bg-gray-700 h-screen w-full '>
      <div className='flex items-center justify-between p-4 border-b border-b-gray-900'>
        <h2 className='text-2xl font-semibold'>
          Page
        </h2>
        <button className="rounded-md bg-black text-white  px-4 py-2" onClick={handleLogout}>
          Log out 
        </button>
      </div>

      <div className='flex items-center justify-center mt-80'>
        <h1 className='text-6xl font-medium'>
          Hi, Marcus
        </h1>
      </div>
    </div>
   );
}