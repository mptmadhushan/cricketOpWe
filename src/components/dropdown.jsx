import { useState } from "react";



function Dropdown({ label, options, value, onChange }) {




    return (
      <div className="relative inline-flex w-full p-5 justify-center items-center ">
        
        <label className="text-white mr-2 w-full font-semibold text-[14pt]">{label}</label>

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {options.map((option) => (
            <option key={option} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        
      </div>
    );
  }


  export default Dropdown