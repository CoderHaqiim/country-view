export async function getCountries(setCountries, setIsLoading){
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,flags,continents,population,coatOfArms',{
          headers:{
            Authorization: `Bearer ${process.env.PUBLIC_API_TOKEN}`
          }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const countries = await response.json();
      setCountries(countries)
    } catch (error) {
      document.write(error, 'Error occured fetching countries')
    }finally{
      setIsLoading(false)
    }
  }
