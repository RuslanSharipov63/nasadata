

export const fetchDataPictureDay = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}

export const fetchDataAsteroids = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}

export const fetchRangeAsteroids = async (start: string, end: string) => {
  try {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}

export const fetchAsteroid = async (id: string) => {
  try {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)   
    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}



export const fetchLastImgNatiralColor = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)   
    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}