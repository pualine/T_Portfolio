import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";


export default function DbSkills() {
    return (
        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-4">SKILLS</h2>
            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>Dancing</h3>
                <h4>Proficiency:Advanced</h4>
                <div className="flex space-x-4">
                    <FaPlus className="text-black-500 cursor-pointer" />
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>Teaching</h3>
                <h4>Proficiency:Advanced</h4>
                <div className="flex space-x-4">
                    <FaPlus className="text-black-500 cursor-pointer" />
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="text-center font-semibold">See all Skills</div>
        </div>
    );
}