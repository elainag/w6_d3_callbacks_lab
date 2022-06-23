const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findAllFilmTitles = function (films) {
  let result = this.films.map((film) => {
    return film.title;
  });
  return result;
}

Cinema.prototype.findFilmByTitle = function (title) {
  const film = this.films.filter((film) => {
    return film.title === title
  })
  return film[0]
}

Cinema.prototype.findGenre = function (drama) {
  const film = this.films.filter((film) => {
    return film.genre === drama
  })
  return film
}

Cinema.prototype.findByYear = function (year) {
  const film = this.films.find((film => {
    return film.year === year
  }
  ));
  if (film) {
    return true
  }
  return false
}

Cinema.prototype.filmsOverLength = function (length) {
  const film = this.films.every(film => film.length > length)
}

module.exports = Cinema;