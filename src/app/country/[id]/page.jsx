import React from 'react'
import Nav from '@/components/layout/nav'

const getCountry = async function(id) {
  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching country data:', error.message);
    return null;
  }
};

export default async function page({params}) {
  const {id} = await params
  const [country] = await getCountry(id)

  const style = {
    background: `url(${country?.coatOfArms.png})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center top"
  }
  
  return (
    <div className='w-full flex flex-col items-center'>
      <Nav navType='server'/>
      <div className='w-full max-w-[2000px] min-h-[650px] flex flex-col px-sp lg:min-h-[400px] relative h-[calc(100vh-150px)] bg-white lg:p-lp lg:flex-row'>
      <div className='w-full absolute h-full left-0 opacity-[0.05] top-0' style={style}></div>
      <div className='w-full h-1/2 flex justify-center z-[3] items-center lg:h-full lg:w-1/2'>
        <div className='w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[300px] lg:h-[200px]  rounded-r10  p-[20px] bg-grey'>
          <img className='w-full h-full rounded-[inherit]' src={country?.flags.png} alt="flag" /> 
        </div>
      </div>
      <div className={`w-full flex flex-col z-[3] lg:items-start items-center lg:justify-start lg:justify-center h-1/2 relative lg:h-full lg:w-1/2 `}>
        <div className='w-full h-full lg:h-auto md:w-[700px] lg:w-[500px]'>
          <table className='w-full md:mx-auto lg:mx-0 md:w-[70%]'>
            <thead>
              <tr>
                <td colSpan='2' className='text-[1.5rem] md:text-[2rem] text-dark pb-[20]'>Country details</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='lg:text-[1.2rem] text-[1rem] md:text-[1.5rem] font-[500]'>Name:</td>
                <td className='lg:text-[1.2rem] text-[1rem] px-[10px] md:px-[20px] md:text-[1.5rem] '>{country?.name?.common}</td>
              </tr>
              <tr>
                <td className='lg:text-[1.2rem] text-[1rem] md:text-[1.5rem] font-[500]'>Capital:</td>
                <td className='lg:text-[1.2rem] text-[1rem] px-[10px] md:px-[20px] md:text-[1.5rem]'>{country?.capital? country.capital[0] :"N/A"}</td>
              </tr>
              <tr>
                <td className='lg:text-[1.2rem] text-[1rem] md:text-[1.5rem] font-[500]'>Region:</td>
                <td className='lg:text-[1.2rem] text-[1rem] px-[10px] md:px-[20px] md:text-[1.5rem]'>{country?.continents? country.continents[0] : "N/A"}</td>
              </tr>
              <tr>
                <td className='lg:text-[1.2rem] text-[1rem] md:text-[1.5rem] font-[500]'>Population:</td>
                <td className='lg:text-[1.2rem] text-[1rem] px-[10px] md:px-[20px] md:text-[1.5rem]'>{(country?.population).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>  
        </div>
      </div>
    </div>
    </div>
  )
}
 