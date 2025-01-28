import React from 'react'
import Header from '@/components/ui/header'

const getCountry = async function(id){
  const URL = `https://restcountries.com/v3.1/alpha/${id}`
  try{
    const res = await fetch(URL)
    if(!res.ok){
      return
    }else{
      const response = await res.json()
      return response
    }
  }catch(error){
    
  }
}

export default async function page({params}) {
  const {id} = await params
  const [country] = await getCountry(id)

  const style = {
    background: `url(${country.coatOfArms.png})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center top"
  }
  
  return (
    <div className='w-full min-h-[650px] flex flex-col px-sp lg:min-h-[400px] relative h-[calc(100vh-150px)] bg-white lg:p-lp lg:flex-row'>
      <div className='w-full absolute h-full left-0 opacity-[0.05] top-0'style={style}></div>
      <div className='w-full h-1/2 flex justify-center z-[3] items-center lg:h-full lg:w-1/2'>
        <div className='w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[300px] lg:h-[200px]  rounded-r10  p-[20px] bg-grey'>
          <img className='w-full h-full rounded-[inherit]' src={country?.flags.png} alt="flag" /> 
        </div>
      </div>
      <div className={`w-full flex flex-col z-[3] lg:items-start items-center lg:justify-start lg:justify-center h-1/2 relative lg:h-full lg:w-1/2 `}>
        <div className='w-[300px] md:w-[700px] lg:w-[300px]'>
        <table className='md:mx-auto lg:mx-0 w-[70%]'>
          <thead>
            <th>
              <tr>
                <td className='text-dark pb-[20px] text-[2rem] font-[500]' colSpan="2">Country details</td>
              </tr>
            </th>
          </thead>
          <tbody>
            <tr>
              <td className='lg:text-[1.2rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>Name:</td>
              <td className='lg:text-[1.2rem] text-[1.2rem] px-[20px] md:text-[1.5rem] '>{country?.name.common}</td>
            </tr>
            <tr>
              <td className='lg:text-[1.2rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>Capital:</td>
              <td className='lg:text-[1.2rem] text-[1.2rem] px-[20px] md:text-[1.5rem]'>{country?.capital[0]}</td>
            </tr>
            <tr>
              <td className='lg:text-[1.2rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>Region:</td>
              <td className='lg:text-[1.2rem] text-[1.2rem] px-[20px] md:text-[1.5rem]'>{country?.continents[0]}</td>
            </tr>
            <tr>
              <td className='lg:text-[1.2rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>Population:</td>
              <td className='lg:text-[1.2rem] text-[1.2rem] px-[20px] md:text-[1.5rem]'>{(country?.population).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>  
        </div>
      </div>
    </div>
  )
}
 