import React from "react";
export default function GreetingMessage({geet, user}){
    return(
        <div className="py-3 px-4 text-left">
            <h2 className="text-xl font-bold text-[#F23E14] font-sans">{geet}</h2>
            <div><h3 className="text-lg font-semibold p-3 font-sans text-gray-900">{user}</h3></div>
            
        </div>
    )
}