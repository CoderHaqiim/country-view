export async function getCountries(setCountries, setIsLoading){
    try {
      console.log("TOKEN:", process.env.NEXT_PUBLIC_API_TOKEN);
      const response = await fetch('https://api.restcountries.com/countries/v5?response_fields=names,codes.alpha_3,flag,continents,population,coat_of_arms&limit=100',{
          headers:{
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
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
