import { useEffect } from "react";
import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


export default function DbSkills() {
const [skills, setSkills] = useState([]);
const {_id} = useParams

const getSkills = async ()=>{
    const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills`);
    const data = await response.json();
    setSkills(data);
}

const deleteSkill = async ()=>{
    const response = await fetch(`${process.env.REACT_APP_BASE_URI}/skills:${_id}`,{
        method: 'DELETE'
    });
    const data = await response.json();
    deleteSkill(data);
}



useEffect(()=>{
getSkills();
},[]);


    return (
        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">  
           <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">SKILLS</h2>
            <FaPlus className="text-black-500 cursor-pointer" />
            </div>
            {skills.slice(0,2).map(skill => (
                <div key={skill._id} className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>{skill.name}</h3>
                <h4>{skill.proficiency}</h4>
                <div className="flex space-x-4">
                    <Link to={`/editskill`}><FaEdit className="text-black-500 cursor-pointer" /></Link>
                    <FaTrash onClick= {deleteSkill} className="text-black-500 cursor-pointer" />
                </div>
            </div>
            ))
             }
            
            {/* <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                <h3>Teaching</h3>
                <h4>Proficiency:Advanced</h4>
                <div className="flex space-x-4">
                    <FaEdit className="text-black-500 cursor-pointer" />
                    <FaTrash className="text-black-500 cursor-pointer" />
                </div>
            </div> */}
            <div className="text-center font-semibold">See all Skills</div>
        </div>
    );
}