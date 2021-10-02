console.log('hello World');

const scrap = async () => {
    const response = fetch('https://www.themoviedb.org/');
    const html = await response.text();
    console.log(html);
}

//scrap();

fetch('https://www.themoviedb.org/movie/550988-free-guy')
  .then(response => response.text())
  .then(json => console.log(json));