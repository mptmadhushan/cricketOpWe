import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Teamselection()
{


    const [venue, setVenue] = useState('');
    const [humidity, setHumidity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [wind, setWind] = useState('');

    const handleVenueChange = (event) => {
        setVenue(event.target.value);
    }

    const handleHumidityChange = (event) => {
        setHumidity(event.target.value);
    }

    const handleTemperatureChange = (event) => {
        setTemperature(event.target.value);
    }

    const handleWindChange = (event) => {
        setWind(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form values
    }


    return (

        <div className="main-body-wrapper w-3/4 bg-slate-200 float-right p-[10px] h-full overflow-y-scroll">
            <div className="main-body p-[10px] flex flex-col w-full">
                <h2 className="uppercase text-blue-700 font-bold">Team Selection</h2>
                
                <div className="panel flex md:flex-col lg:flex-row mb-[80px]">

                                <div className="form-one p-5 w-2/3 md:w-full md:p-2">
                                    
                                    <div className="form-one-panel lg:p-5 md:p-2 bg-white rounded-md ">
                            
                                    <div className="contidion-panel p-5 flex flex-col">
                                    <form onSubmit={handleSubmit} >
                                    <div className='sub-panel mb-10'>
                                        <h3 className="text-blue-500 p-2">Ground Venue</h3>
                                        <div className="form-one-panel p-5 bg-white rounded-md shadow-md shadow-slate-300">
                                            <div className="flex flex-row items-center justify-between">
                                                <div className="w-full mx-auto">
                                                <label htmlFor="venue" className="block text-gray-700 font-bold mb-2">Venue:</label>
                                                <select id="venue" name="venue" value={venue} onChange={handleVenueChange} className="w-full p-2 border rounded-md">
                                                    <option value="">Select a venue</option>
                                                    <option value="Venue 1">Venue 1</option>
                                                    <option value="Venue 2">Venue 2</option>
                                                    <option value="Venue 3">Venue 3</option>
                                                </select>
                                                </div>
                                                
                                                {/* <div className="w-1/3 mx-1">
                                                <label htmlFor="submit" className="block text-gray-700 font-bold mb-2" ><br/></label>
                                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit <FontAwesomeIcon icon={faPaperPlane} className='mx-2'/></button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className='sub-panel'>
                                        <h3 className="text-blue-500 p-2">Ground Weather</h3>
                                        <div className="form-one-panel p-5 bg-white rounded-md shadow-md shadow-slate-300">
                                            <div className="flex flex-row items-center justify-between">
                                                
                                                <div className="w-1/3 mx-1">
                                                <label htmlFor="humidity" className="block text-gray-700 font-bold mb-2">Humidity:</label>
                                                <input id="humidity" name="humidity" type="text" value={humidity} onChange={handleHumidityChange} className="w-full p-2 border rounded-md" />
                                                </div>
                                                <div className="w-1/3 mx-1">
                                                <label htmlFor="temperature" className="block text-gray-700 font-bold mb-2">Temperature:</label>
                                                <input id="temperature" name="temperature" type="text" value={temperature} onChange={handleTemperatureChange} className="w-full p-2 border rounded-md" />
                                                </div>
                                                <div className="w-1/3 mx-1">
                                                <label htmlFor="wind" className="block text-gray-700 font-bold mb-2">Wind:</label>
                                                <input id="wind" name="wind" type="text" value={wind} onChange={handleWindChange} className="w-full p-2 border rounded-md" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>

                                                <div className="w-1/3 mx-auto mt-10 text-center">
                                                   
                                                    <button type="submit" className='p-3 w-[160px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full text-white uppercase mx-auto'>Submit <FontAwesomeIcon icon={faPaperPlane} className='mx-2'/></button>
                                                </div>

                                    </form>
                                </div>
                                    </div>
                                </div>


                                

                        

                </div>
                

                    
                        
                
            
            </div>
        </div>
    );
}

export default Teamselection;