const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const shortMovie = []
const mediumMovie = []
const longMovie = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    shortMovie.push(movie.name)
  }
  if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovie.push(movie.name)
  }
  if (movie.durationInMinutes > 200) {
    longMovie.push(movie.name)
  }
}
console.log('peliculas cortas:', shortMovie)
console.log('peliculas medianas:', mediumMovie)
console.log('peliculas largas:', longMovie)
