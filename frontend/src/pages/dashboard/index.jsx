import { FaEdit, FaTrash } from "react-icons/fa";
import DbNavbar from "../../components/dashboardcomponents/db_navbar";
import DBblogs from "../../components/dashboardcomponents/db_blog";
import DbSkills from "../../components/dashboardcomponents/db_skills";


export default function Dashboard() {
    return (
        <section>
           <DbNavbar/>

            <div className="flex flex-col md:flex-row">
                
                {/* lists section */}
                <div className="flex-1 p-4">
                    <div className="grid grid-cols-1 mt-8">
                        {/* skills section */}
                      <DbSkills/>

                        {/* awards section */}

                        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
                            <h2 className="text-xl font-semibold mb-4">AWARDS</h2>
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

                        {/* achievements section */}

                        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
                            <h2 className="text-xl font-semibold mb-4">ACHIEVEMENTS</h2>
                            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                                <h3>overall dancer</h3>
                                <h4>Date:Jan 20</h4>
                                <div className="flex space-x-4">
                                    <FaEdit className="text-black-500 cursor-pointer" />
                                    <FaTrash className="text-black-500 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                                <h3>excellent teacher</h3>
                                <h4>Date:Feb 19</h4>
                                <div className="flex space-x-4">
                                    <FaEdit className="text-black-500 cursor-pointer" />
                                    <FaTrash className="text-black-500 cursor-pointer" />
                                </div>
                            </div>
                            <div className="text-center font-semibold">See all Achievements</div>
                        </div>

                        {/* projects section */}

                        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
                            <h2 className="text-xl font-semibold mb-4">PROJECTS</h2>
                            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                                <h3>Best dancer</h3>
                                <h4>Proficiency:Advanced</h4>
                                <div className="flex space-x-4">
                                    <FaEdit className="text-black-500 cursor-pointer" />
                                    <FaTrash className="text-black-500 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-5 hover:shadow-lg">
                                <h3>Best teacher</h3>
                                <h4>Proficiency:Advanced</h4>
                                <div className="flex space-x-4">
                                    <FaEdit className="text-black-500 cursor-pointer" />
                                    <FaTrash className="text-black-500 cursor-pointer" />
                                </div>
                            </div>
                            <div className="text-center font-semibold">See all Projetcs</div>
                        </div>


                    </div>
                </div>

                {/* blog */}
               <DBblogs/>
            </div>


        </section>

    );
};