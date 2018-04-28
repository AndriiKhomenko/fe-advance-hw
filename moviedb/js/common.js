const getAllUsers = () => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d49d6df643d7b291804012bcdeaf040")
  // &language=ru
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      const wrap = document.getElementById("wrapper");
      let obj = data.results;
      console.log(data);
      for(let i=0; i<obj.length; i++){
        const movieCard = document.createElement("div");
        movieCard.setAttribute("id", "movieCard");
        const image = document.createElement("img");
        const title = document.createElement("h1");
        const description = document.createElement("p");
        title.textContent = obj[i].title;
        description.textContent = obj[i].overview;
        image.setAttribute("src", "http://image.tmdb.org/t/p/w500" + obj[i].poster_path);
        movieCard.appendChild(image);
        movieCard.appendChild(title);
        movieCard.appendChild(description);
        wrap.appendChild(movieCard);
      }
    })
    .catch(error => {
        console.error("Error: ", error);
      });
};

getAllUsers();