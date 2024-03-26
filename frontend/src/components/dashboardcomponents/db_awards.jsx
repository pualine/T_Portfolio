import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function DbAwards() {
    return (
        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">AWARDS</h2>
            <FaPlus className="text-black-500 cursor-pointer" />
            </div>
            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>Best dancer</h3>
                <h4>Date:Oct 22</h4>
                <div className="flex space-x-4">
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>Best teacher</h3>
                <h4>Date:Nov 23</h4>
                <div className="flex space-x-4">
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="text-center font-semibold">See all Awards</div>
        </div>
    );
}