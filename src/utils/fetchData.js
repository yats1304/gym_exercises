export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '7d4ef07717msh603fcdf309fdffap134635jsn994bdebd53c9',
  },
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7d4ef07717msh603fcdf309fdffap134635jsn994bdebd53c9',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };