import DbNavbar from "../../../components/dashboardcomponents/db_navbar";
import { useState } from "react";

export default function AddAward() {
    const [loading, setLoading] = useState(false);
    // const [open, setOpen] = useState(false);
    // const [message, setMessage] = useState('New Recipe Added Successfully!');

    const AddAward = async (event) => {
        setLoading(true);
        event.preventDefault();
        const awardData = new FormData(event.target);

        const response = await fetch(`${process.env.REACT_APP_BASE_URI}/awards`, {
            method: "POST",
            body: JSON.stringify({
                title: awardData.get('title'),
                description: awardData.get('description'),
                dateAwarded: awardData.get('dateAwarded'),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
        console.log(response);
        setLoading(false);
    }



    return (
        <section>
            <DbNavbar />
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg h-2/4">
                <h2 className="text-xl font-semibold mb-4">Add Award</h2>
                <form onSubmit={AddAward}>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Title of Award</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                            placeholder="Enter skill name"
                        
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Description</label>
                        <textarea
                            type="text"
                            name="description"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black resize-none h-40"
                            placeholder="Describe the award"
                        
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">Select a date</label>
                        <input
                            type="date"
                            name="dateAwarded"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
                        />
                    </div>
                    <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition duration-300">Add Award</button>
                </form>
            </div>
        </section>
    );
}