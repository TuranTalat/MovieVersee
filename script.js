const movies = [
  {
    title: "The Last Dance",
    genre: "documentary",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/The_Last_Dance_2020.jpg/220px-The_Last_Dance_2020.jpg",
  },
  {
    title: "Inception",
    genre: "sci-fi",
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Dark Knight",
    genre: "action",
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Finding Nemo",
    genre: "animation",
    img: "https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_.jpg",
  },
  {
    title: "Titanic",
    genre: "romance",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "The Conjuring",
    genre: "horror",
    img: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
  },
  {
    title: "Joker",
    genre: "drama",
    img: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Avengers",
    genre: "action",
    img: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Toy Story",
    genre: "animation",
    img: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Interstellar",
    genre: "sci-fi",
    img: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Superbad",
    genre: "comedy",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png",
  },
  {
    title: "Parasite",
    genre: "thriller",
    img: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Frozen",
    genre: "animation",
    img: "https://musicart.xboxlive.com/7/be661200-0000-0000-0000-000000000002/504/image.jpg",
  },
  {
    title: "Shutter Island",
    genre: "thriller",
    img: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Pulp Fiction",
    genre: "drama",
    img: "https://media.posterlounge.com/img/products/770000/761328/761328_poster.jpg",
  },
  {
    title: "The Matrix",
    genre: "sci-fi",
    img: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Notebook",
    genre: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d9/The_Notebook_Cover.jpg",
  },
  {
    title: "Get Out",
    genre: "horror",
    img: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
  },
  {
    title: "Inside Out",
    genre: "animation",
    img: "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Deadpool",
    genre: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
  },
  {
    title: "La La Land",
    genre: "romance",
    img: "https://m.media-amazon.com/images/I/91PaWpDPwkL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Kung Fu Panda",
    genre: "animation",
    img: "https://m.media-amazon.com/images/I/81KE5DERc5L.jpg",
  },
  {
    title: "Beauty&Beast",
    genre: "fantasy",
    img: "https://resizing.flixster.com/zp-uO8WA0O9pEAAic3-jp0pe4hQ=/fit-in/180x240/v2/https://resizing.flixster.com/3w9ZfQQ50dBeWrV7k-ip4L76eTA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY1NGZkZmZkLTUyYjMtNDY4OC1iOTRmLTVlYTJjZjZkYjg1OC53ZWJw",
  },
  {
    title: "Aladdin",
    genre: "fantasy",
    img: "https://www.reelviews.net/resources/img/posters/thumbs/aladdin_poster.jpg",
  },
];

const moviesGrid = document.getElementById("movies-grid");

function displayMovies(movieList) {
  moviesGrid.innerHTML = "";
  movieList.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-item");
    movieElement.innerHTML = `
          <img src="${movie.img}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        `;
    moviesGrid.appendChild(movieElement);
  });
}

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const genre = button.getAttribute("data-genre");
    if (genre === "all") {
      displayMovies(movies);
    } else {
      const filteredMovies = movies.filter((movie) => movie.genre === genre);
      displayMovies(filteredMovies);
    }
  });
});

displayMovies(movies);

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayFilteredMovies(filteredMovies);
});

function displayFilteredMovies(filteredMovies) {
  moviesGrid.innerHTML = "";
  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-item");
    movieElement.innerHTML = `
          <img src="${movie.img}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        `;
    moviesGrid.appendChild(movieElement);
  });
}

const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;
const itemsToShow = 6;
const totalItems = document.querySelectorAll(".carousel-item").length;

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalItems - itemsToShow) {
    currentIndex++;
    carousel.style.transform = `translateX(-${
      currentIndex * (100 / itemsToShow)
    }%)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${
      currentIndex * (100 / itemsToShow)
    }%)`;
  }
});

function autoSlide() {
  setInterval(() => {
    nextBtn.click();
  }, 3000);
}

autoSlide();

const hamburger = document.querySelector(".hamburger");
const navbarCenter = document.querySelector(".navbar-mrk");

hamburger.addEventListener("click", () => {
  navbarCenter.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !hamburger.contains(event.target) &&
    !navbarCenter.contains(event.target)
  ) {
    navbarCenter.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navbarCenter.classList.remove("active");
  }
});

const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const registerModal = document.getElementById("kayit-formu");
const loginModal = document.getElementById("giris-formu");
const closeModalBtns = document.querySelectorAll(".close-modal");

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    registerModal.style.display = "none";
    loginModal.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
});

const themeSwitch = document.querySelector(".mode-d-l");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
