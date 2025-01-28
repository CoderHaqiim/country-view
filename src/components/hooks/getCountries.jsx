export async function getCountries(setCountries, setIsLoading){
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,flags,continents,population,coatOfArms');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const countries = await response.json();
      console.log(countries)
      setCountries(countries)
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally{
      setIsLoading(false)
    }
  }