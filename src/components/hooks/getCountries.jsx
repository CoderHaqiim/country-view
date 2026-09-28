export async function getCountries(setCountries, setIsLoading) {
  try {
    const response = await fetch(
      "https://api.restcountries.com/countries/v5?response_fields=names,codes.alpha_3,flag,continents,population,coat_of_arms&limit=100",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const result = await response.json()

    setCountries(result.data.objects)
  } catch (error) {
    console.error("Error occurred fetching countries:", error)
    setCountries([])
  } finally {
    setIsLoading(false)
  }
}
