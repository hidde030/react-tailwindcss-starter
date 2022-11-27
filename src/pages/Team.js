import React from 'react'
import TeamMember from '../components/TeamMember'

export default function Team() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap 	justify-between	mb-6	">
                    <h1 className='text-2xl font-bold title-font mb-4 text-gray-900 tracking-widest'>Team</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Invite
                    </button>
                </div>
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">YOUR TEAM</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />

                </div>
            </div>
        </section >
    )
}
