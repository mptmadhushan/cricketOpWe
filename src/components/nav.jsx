import React from "react";
import { useState } from 'react';
import Logo from '../asserts/images/logo.png';
import Profile from '../asserts/images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faTennisBall, faFire} from '@fortawesome/free-solid-svg-icons';


function Nav()
{


    const [query, setQuery] = useState('');

    function handleChange(event) {
      setQuery(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      
    }


    return(

        <div className="bg-[#25233f] w-full h-[70px] flex columns-3 p-5 justify-between" >
            
        

            <div className="logo ml-[2%]">
                <h1 className="text-[18pt] text-white "> <FontAwesomeIcon icon={faFire} className="mr-1" />CrickHack</h1>
            </div>

            



            <div className="profile columns-3 flex items-center mr-[5%]">
                

            <div className="search mx-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center  p-1 bg-white rounded-md">
                        <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
                        type="text"
                        placeholder="Search here.."
                        value={query}
                        onChange={handleChange}

                        />
                        <button
                        className="flex-shrink-0   text-sm  text-[#25233f] py-1 px-2 rounded"
                        type="submit"
                        >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>
            </div>


                <div className="notify-panel mr-5">
                    <FontAwesomeIcon icon={faBell} className="text-[22pt] cursor-pointer text-white" />
                </div>
                
                
                
                <div className="profile-name text-white">
                    <span>Jack Tailar</span>
                </div>
            </div>


            

            


        </div>
    );
}

export default Nav;