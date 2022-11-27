import React from 'react'
import { Link } from 'react-router-dom'

export default function ScoreCard() {
    return (
        <>
            <Link href="#" className=" border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 mb-3">

                <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> FEATURED </p>

                <div className="grid grid-cols-8 p-5 gap-y-2">


                    <div className="col-span-5">

                        <p>team 1 name</p>
                        <p>team 2 name</p>


                    </div>

                    <div className="col-span-1">
                        <p className="text-base	"> 2 </p>
                        <p className="text-base	"> 6</p>

                    </div>
                    <div className="col-span-1  ">
                        <p className="text-base	"> 2 </p>
                        <p className="text-base	"> 6</p>

                    </div>



                </div>

            </Link>


        </>

    )
}
