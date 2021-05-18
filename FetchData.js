export const fetchMovie = async (props) => {
    const response = await fetch('http://www.omdbapi.com/?apikey=1fa1c6bb&i=' + props.movieID)
    const results = await response.json()
    props.setMovieInfo(results);
    props.setDataReceived(true);
}

export const fetchSearch = async (props) => {
    const response = await fetch('http://www.omdbapi.com/?apikey=1fa1c6bb&page=' + props.page + '&s=' + props.input)
      const results = await response.json();
      if(results.Response === 'False') {
        props.setEmptySearch(true);
        props.setSearchReady(false);
      }else {
        props.setMoviesList(results);
        props.setDataReceived(true);
        props.setEmptySearch(false);
        props.setSearchReady(false);
      }
  }