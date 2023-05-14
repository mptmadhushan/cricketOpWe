import React, { useState } from 'react';
import Team from '../asserts/images/team.png';
import Winloss from '../asserts/images/winloss.png';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faAward} from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';


function Dashboard ()
{


    const onChange = (date) => {
        console.log(date.toString());
      };






    return (

        <div className="main-body-wrapper w-3/4 float-right p-[10px] h-full ">
            <div className="main-body p-[10px] flex flex-col w-[90%] mx-auto">
                <h2 className=" text-gray-950 font-bold text-[16pt]">Hello Jack ! <br />Welcome to the Crickhack</h2>
                <p className='text-gray-500 text-[10pt]'>be alert with everything </p>


            <div className="option-panel column-2 flex  ">  

                    <div className="option-panel p-[40px] columns-2 float-left flex  lg:w-2/3 w-full">
                        <div className="option-card p-[10px] text-center w-full">
                            <Link to="/teamselection">
                                <div className="card p-1 text-center flex mx-auto shadow-md shadow-slate-300 bg-gradient-to-tr from-indigo-300 to-purple-400 
                                                justify-center items-center  hover:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] hover:from-pink-300 
                                                hover:via-purple-300 hover:to-indigo-400 transition-colors duration-1000 ">
                                    <div className='w-1/3 text-white border-2  border-white text-[42pt] lg:text-[70pt]  '>
                                        {/* <img src={Team} alt="TeamSelectionico" className="w-[100%]"/> */}
                                        <FontAwesomeIcon icon={faPeopleGroup}className=''/>
                                    </div>
                                    <div className='w-2/3 '>
                                        <span className="text-white ">Team Selection</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="option-card p-[10px] text-center w-full">
                            <Link to="/winloss">
                                <div className="card p-1 text-center flex  mx-auto shadow-md shadow-slate-300 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]
                                 from-green-300 via-blue-500 to-purple-600 justify-center items-center hover:bg-gradient-to-tr hover:from-blue-400 hover:to-emerald-400">
                                        <div className='w-1/3 text-white border-2  border-white text-[42pt] lg:text-[70pt] '>
                                        {/* <img src={Team} alt="TeamSelectionico" className="w-[100%]"/> */}
                                        <FontAwesomeIcon icon={faAward}className=''/>
                                        </div>
                                    <div className='w-2/3 '>
                                        <span className="text-white ">Win Loss Prediction</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className='calendar-card w-1/3 hidden lg:block'>
                        <div className="cal-body shadow-md shadow-slate-300 p-5 mx-auto">
                            <Calendar/>
                        </div>
                    </div>

            </div>
                


               

                <div className="ranking-panel  w-full mt-10">

                    <div className="table-panel ">
                        <div className="table-box  shadow-md shadow-slate-300">
                                
                        <div className="table-container h-[320px] overflow-y-scroll overflow-x-hidden">
                        <table className="w-full text-center border-collapse ">
                                    <thead className="bg-slate-300">
                                    <th className="text-gray-600 text-[10pt]">#Position</th>
                                    <th className="text-gray-600 text-[10pt]">Team</th>
                                    <th className="text-gray-600 text-[10pt]">Matches</th>
                                    <th className="text-gray-600 text-[10pt]">Points</th>
                                    <th className="text-gray-600 text-[10pt]">Ratings</th>
                                    </thead>
                                    
                                   <tbody>
                                   <tr className="border-b border-gray-300 ">
                                        <td>1</td>
                                        <td className='justify-center items-center flex'><img width="24" height="24" src="https://img.icons8.com/color/48/india-circular.png" alt="india-circular" className='mr-2'/>IND</td>
                                        <td>20</td>
                                        <td>249</td>
                                        <td>4.7</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td>2</td>
                                        <td className='justify-center items-center flex'><img width="24" height="24" src="https://img.icons8.com/color/48/australia-circular.png" alt="australia-circular" className='mr-2'/>AUS</td>
                                        <td>18</td>
                                        <td>235</td>
                                        <td>4.5</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td>3</td>
                                        <td className='justify-center items-center flex'><img width="24" height="24" src="https://img.icons8.com/color/48/great-britain-circular.png" alt="great-britain-circular" className='mr-2'/>ENG</td>
                                        <td>16</td>
                                        <td>210</td>
                                        <td>4.2</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td>4</td>
                                        <td className='justify-center items-center flex'><img width="24" height="24" src="https://img.icons8.com/color/48/pakistan-circular.png" alt="pakistan-circular" className='mr-2'/>PAK</td>
                                        <td>11</td>
                                        <td>196</td>
                                        <td>3.9</td>
                                    </tr>

                                   </tbody>

                                    
                                </table>
                        </div>
                                
                        </div>
                    </div>


                    
                </div>
            
            </div>
        </div>
    );
}

export default Dashboard;