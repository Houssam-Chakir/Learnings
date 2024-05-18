const moviesContainer = document.querySelector('.moviesContainer')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjNlZDRkMTRjMGE2YmNiNjllZDZkOTQzOGVjN2Y4YiIsInN1YiI6IjY2NDM4YzJhMmQ0NGViYjkxZmMxZDNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lai0wHfsF_NCMUUkd7qAmVqC6DpNTNnkdJwGhDyszxg'
  }
};
const movieFetcher = async function() {

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    if(!response.ok) throw new Error('Error fetching movies')
    const data = await response.json()
    return data.results

  } catch (error) {
    console.error('📛',error)
    return undefined
  }

}

const posterFetcher = async function(path) {
  //c4a79159
  //https://api.themoviedb.org/3/movie/{movie_id}/images
  const data = await fetch(`http://www.omdbapi.com/?apikey=c4a79159&t=${path}`)
  const image = await data.json()
  console.log('image: ', image.Poster);
  return image.Poster
}

const movieCardMaker = async function(movie) {
  const poster = await posterFetcher(movie.title)
  console.log('poster: ', poster);
// adult: false
// backdrop_path: "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
// genre_ids: Array(3) [ 878, 28, 12 ]
// id: 823464
// original_language: "en"
// original_title: "Godzilla x Kong: The New Empire"
// overview: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own."
// popularity: 4738.497
// poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg"
// release_date: "2024-03-27"
// title: "Godzilla x Kong: The New Empire"
// video: false
// vote_average: 7.041
// vote_count: 1470
  const card = `
    <div class="MovieCard w-64 h-80 bg-white rounded-md overflow-hidden m-2">
      <img src="${poster}" alt="" class="bg-slate-400 w-fit h-36 overflow-hidden">
      <div class="ContentContainer m-2">
        <h1 class="Title text-black">${movie.title}</h1>
        <h2 class="ReleaseDate">${movie.release_date}</h2>
        <h2 class="Rating">${movie.vote_average}</h2>
      </div>
    </div>
  `
  moviesContainer.insertAdjacentHTML('beforeend',card)

}



const movieListGen = async function(data) {
  try {
    const data = await movieFetcher();
    if(!data) throw new Error(`Unable to load movies`)

    data.map(async movie => {
      console.log('movie: ', movie);
      await movieCardMaker(movie)
    })
  } catch (error) {
    console.error(`movieListgen erro: ${error}`)
  }
}

export default movieListGen
