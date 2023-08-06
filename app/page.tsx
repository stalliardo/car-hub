import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'



export default async function Home({ searchParams}: {searchParams: any}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2020,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || ""
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {
          !isDataEmpty ?
            <section>
              <div className='home__cars-wrapper'>
                {
                  allCars?.map((car) => (
                    <CarCard car={car}/>
                  ))
                }
              </div>
            </section>
            :
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Opps, no results</h2>
              <p>{allCars?.message}</p>
            </div>
        }
      </div>
    </main>
  )
}
