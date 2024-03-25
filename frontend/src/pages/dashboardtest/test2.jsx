import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Test2 = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Admin Dashboard</div>
        <div className="flex items-center">
          {/* Add any other navbar items here */}
          <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="bg-gray-200 border-r border-gray-300 md:border-r-0 md:border-b md:border-gray-300 md:w-1/6 md:rounded-r-lg md:shadow-lg">
          <div className="p-4">
            <ul className="space-y-2">
              <li><a href="#" className="block">Home</a></li>
              <li><a href="#" className="block">Skills</a></li>
              <li><a href="#" className="block">Awards</a></li>
              <li><a href="#" className="block">Achievements</a></li>
              <li><a href="#" className="block">Projects</a></li>
              <li><a href="#" className="block">Blogs</a></li>
            </ul>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex justify-between items-center mb-2">
                <FaEdit className="text-gray-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
              {/* Add skill content here */}
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Awards</h2>
              <div className="flex justify-between items-center mb-2">
                <FaEdit className="text-gray-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
              {/* Add awards content here */}
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="flex justify-between items-center mb-2">
                <FaEdit className="text-gray-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
              {/* Add achievements content here */}
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              <div className="flex justify-between items-center mb-2">
                <FaEdit className="text-gray-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
              {/* Add projects content here */}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-gray-200 border-l border-gray-300 md:border-l-0 md:border-b md:border-gray-300 md:w-1/4 md:rounded-l-lg md:shadow-lg">
          <div className="p-4">
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="block">Title 1</span>
                <span className="text-gray-500 cursor-pointer"><FaEdit /></span>
              </li>
              <li className="flex items-center justify-between">
                <span className="block">Title 2</span>
                <span className="text-gray-500 cursor-pointer"><FaEdit /></span>
              </li>
              {/* Add more posts here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test2;
