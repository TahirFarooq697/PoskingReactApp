import React from "react"
import InfoOverview from "./InfoOverview"
export default function Overview(){
    return(
        <div className="px-4 " >

            <h2 className="text-xl font-semibold p-3 font-sans text-gray-900 mb-3 mx-auto">Overview</h2>

                 <div className="w-[80%] sm:mx-auto md:max-w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 ">
                     <InfoOverview title="Total Earnings" amount='$0.00' className="bg-[#FD0063]"/>
                     <InfoOverview title="Total Orders" amount='0' className=" bg-[#F23E14]"/>
                    <InfoOverview title="Total Customers" amount='0' className="bg-[#6A45FE]"/>
                     <InfoOverview title="Total Products" amount='0' className="bg-[#426EFF]"/>
                </div>

      </div>
    )
}