import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth-provider";

export const LoginPage = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();


  const handleLogin = () => {
    const token = 'some-auth-token';
    dispatch({ type: 'signIn', payload: token });
    navigate('/')
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700 w-full">
      <div className="bg-white rounded-md flex flex-col gap-4 p-6 text-center">
        <h1 className="text-gray-600 font-medium">
          Login to application
        </h1>
        <button className="rounded-md bg-black text-white w-full px-4 py-2" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}