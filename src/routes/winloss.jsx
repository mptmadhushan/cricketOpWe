import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../components/dropdown';

function Winloss()
{

    const teams = ["team A", "team B"];

    const [myTeam, setMyTeam] = useState("");
    const [opponentTeam, setOpponentTeam] = useState("");

    const myTeamOptions = teams;
    const opponentTeamOptions = teams.filter((team) => team !== myTeam);



    return (

        <div className="main-body-wrapper w-3/4 bg-slate-200 float-right p-[10px] h-full ">
            <div className="main-body p-[10px] flex flex-col">
                <h2 className="uppercase text-blue-700 font-bold">Win Loss Prediction</h2>
                
                <div className="form-one ">
                    
                    <div className="form-one-panel p-5 bg-white text-center">
                    
                        <div className="lg:w-[50%] pr-4 flex mx-auto justify-between flex-col space-y-10">
                        
                        
                            <div className='flex p-2 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-300 to-blue-500 shadow-md shadow-slate-300'>
                                <Dropdown
                                    label="Select Your team"
                                    options={myTeamOptions}
                                    value={myTeam}
                                    onChange={setMyTeam}
                                
                                />
                            </div>
                            

                            <div className='flex p-2 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 shadow-md shadow-slate-300 ' > 
                                <Dropdown
                                    label="Select opponent team"
                                    options={opponentTeamOptions}
                                    value={opponentTeam}
                                    onChange={setOpponentTeam}
                                />
                            </div>                  
                            
                            <div className="panel-option mt-10  text-left  mx-auto">
                                <button className='p-3 w-[160px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full text-white uppercase ' type='submit'>Submit <FontAwesomeIcon icon={faPaperPlane} className='mx-2'/></button>
                            </div>
                        </div>

                        

                    </div>

                </div>
            
            </div>
        </div>
    );
}

export default Winloss;