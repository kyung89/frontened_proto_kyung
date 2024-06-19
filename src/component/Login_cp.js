import { Link } from "react-router-dom";
import Useprofile from "./Useprofile";

export default function Login_cp({ user, handleLogout,handleHome, userData }) {
  return (
    <>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-3xl shadow-2xl'>
        <div className='max-w-md mx-auto space-y-4 flex-col justify-center text-center '>
          <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-40 h-45 transform transition-transform duration-300 hover:scale-105">
          <Useprofile userdata={userData}/>
          </div>
          </div>
          <h3 className="text-lg font-sans">어서오세요</h3>
          <h3 className="text-lg font-sans"><span className="text-lg font-bold text-green-700">{user}</span>님 좋은하루 되세요!</h3>
          <div className="flex gap-3 pt-3 justify-center items-center">
          <Link to="/">
          <button onClick={handleHome} className="border hover:border-green-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">home</button>
          </Link>
            <button onClick={handleLogout} className="border hover:border-green-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}
