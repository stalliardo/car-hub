import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
    const {manufacturer, model, year, limit, fuel} = filters;

    const headers = {
		'X-RapidAPI-Key': '5b5f277090msh48f7ac7c3b0992dp17bed2jsn5e3089daabeb',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&manufacturer=${manufacturer}&limit=${limit}&fuel_type=${fuel}`, {
        headers
    });

    const result = await response.json()

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  }

  export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
  }