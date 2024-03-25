import { FaEdit, FaTrash } from "react-icons/fa";

export default function DBblogs (){
    return(
        <div className="md:w-1/4 bg-whitesmoke-800 text-black md:rounded-xl p-4 shadow-lg ml-2 mr-4 mt-8 mb-5">
        <h2 className="text-xl font-semibold mb-4 text-center">BLOGS</h2>
        <ul className="space-y-2">
            <li className="border-b border-gray-600 py-4  hover:text-gray hover:shadow-lg flex items-center justify-between">
                <span className="block">Blog 1</span>
                <span className="text-black-500 cursor-pointer"><FaEdit /></span>
            </li>
            <li className="border-b border-gray-600 py-4  hover:text-gray hover:shadow-lg flex items-center justify-between">
                <span className="block">Blog 2</span>
                <span className="text-black-500 cursor-pointer"><FaEdit /></span>
            </li>
        </ul>
    </div>
    );
}