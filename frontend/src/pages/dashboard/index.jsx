

export default function Dashboard() {
    return (
        <section className="flex" >
            {/* side bar */}
            <div className="w-1/6 bg-whitesmoke-800 text-white rounded-xl p-4 shadow-lg ml-4 mt-8">
                <ul className="space-y-2">
                    <li className="border-b border-gray-600 py-4 text-black hover:text-gray hover:shadow-lg">Homepage</li>
                    <li className="border-b border-gray-600 py-4 text-black hover:text-gray hover:shadow-lg">Awards</li>
                    <li className="border-b border-gray-600 py-4 text-black hover:text-gray hover:shadow-lg">Achievements</li>
                    <li className="border-b border-gray-600 py-4 text-black hover:text-gray hover:shadow-lg">Projects</li>
                    <li className="py-4 text-black hover:text-gray hover:shadow-lg">Blog</li>
                </ul>
            </div>
            {/* blog Projects */}
            <div className="rounded-xl shadow-lg border-2 border-color-black right-1">

            </div>
        </section>

    );
};