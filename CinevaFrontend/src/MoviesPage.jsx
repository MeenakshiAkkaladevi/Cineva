import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    playingVideo: null, // Stores the URL of the video to play, or null if no video is playing
    favorites: [], // Array to store IDs of favorited movies
    activeTab: 'all', // Track the active tab ('all' or 'favorites')
  };

  // Movie data with star ratings
  movies = [
    {
      id: 1,
      title: "HIT: The Third Case",
      description: "A gripping crime thriller continuing the HIT series.",
      img: "/hit3-poster.jpg",
      video: "/hit3.mp4",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Pushpa 2: The Rule",
      description: "Allu Arjun returns in this action-packed sequel about red sandalwood smuggling.",
      img: "/pushpa2-poster.jpg",
      video: "/Pushpa2.mp4",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Game Changer",
      description: "A political action thriller starring Ram Charan.",
      img: "/gamechanger-poster.jpg",
      video: "/gamechanger.mp4",
      rating: 4.2,
    },
    {
      id: 4,
      title: "SALAAR",
      description: "An intense action drama featuring Prabhas in a powerful avatar.",
      img: "/salaar.jpg",
      video: "/salaarvid.mp4",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Hari Hara Veera Mallu",
      description: "A historical action drama starring Pawan Kalyan.",
      img: "/hariharaveeramallu-poster.jpg",
      video: "/hhvm.mp4",
      rating: 4.0,
    },
    {
      id: 6,
      title: "OG (They Call Him OG)",
      description: "A gangster drama with Pawan Kalyan in a stylish avatar.",
      img: "/og-poster.jpg",
      video: "/og.mp4",
      rating: 4.3,
    },
    {
      id: 7,
      title: "Devara: Part 1",
      description: "A high-octane action drama starring Jr NTR.",
      img: "/devara.jpg",
      video: "/devara.mp4",
      rating: 4.6,
    },
    {
      id: 8,
      title: "Kalki 2898 AD",
      description: "A sci-fi epic with Prabhas, Deepika Padukone, and Amitabh Bachchan.",
      img: "/Kalki.jpg",
      video: "/kalki.mp4",
      rating: 4.9,
    },
    {
      id: 9,
      title: "Saripodhaa Sanivaaram",
      description: "An action thriller starring Nani.",
      img: "/Saripodha.jpg",
      video: "/saripodhaa.mp4",
      rating: 4.4,
    },
    {
      id: 10,
      title: "MARCO",
      description: "Marco is about a man seeking revenge for his brother's murder in a violent Malayalam thriller.",
      img: "/Marco.jpg",
      video: "/marcovid.mp4",
      rating: 4.2,
    },
    {
      id: 11,
      title: "Lucky Baskhar",
      description: "A period drama starring Dulquer Salmaan.",
      img: "/Luckybhaskar.jpg",
      video: "/luckybaskhar.mp4",
      rating: 4.3,
    },
    {
      id: 12,
      title: "DJ TILLU",
      description: "DJ Tillu is a Telugu crime comedy about a carefree DJ who gets entangled in a murder case after falling for a mysterious singer.",
      img: "/tillu.jpg",
      video: "/marcovid.mp4", // Note: This seems to be incorrect; should be "/djtillu.mp4"
      rating: 4.1,
    },
  ];

  // Function to handle "Watch Now" button click
  handleWatchNow = (videoUrl) => {
    this.setState({ playingVideo: videoUrl });
  };

  // Function to close the video player
  handleCloseVideo = () => {
    this.setState({ playingVideo: null });
  };

  // Function to toggle a movie in/out of favorites
  handleToggleFavorite = (movieId) => {
    this.setState((prevState) => {
      const { favorites } = prevState;
      if (favorites.includes(movieId)) {
        // Remove from favorites
        return { favorites: favorites.filter((id) => id !== movieId) };
      } else {
        // Add to favorites
        return { favorites: [...favorites, movieId] };
      }
    });
  };

  // Function to switch tabs
  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  // Function to render star rating
  renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="star-rating">
        {[...Array(filledStars)].map((_, index) => (
          <span key={`filled-${index}`} className="star filled">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="star empty">☆</span>
        ))}
      </div>
    );
  };

  // Function to render a movie card
  renderMovieCard = (movie) => {
    const { favorites } = this.state;
    return (
      <div key={movie.id} className="movie-card">
        <img src={movie.img} alt={movie.title} className="movie-poster"></img>
        <h3 className="movie-title">{movie.title}</h3>
        {this.renderStarRating(movie.rating)}
        <p className="movie-description">{movie.description}</p>
        <button
          className="watch-now-btn"
          onClick={() => this.handleWatchNow(movie.video)}
        >
          Watch Now
        </button>
        <button
          className="favorite-btn"
          onClick={() => this.handleToggleFavorite(movie.id)}
        >
          {favorites.includes(movie.id) ? '♥️' : '♡'}
        </button>
      </div>
    );
  };

  render() {
    const { playingVideo, favorites, activeTab } = this.state;
    const favoriteMovies = this.movies.filter((movie) => favorites.includes(movie.id));

    return (
      <div className="movies-container">
        {/* Video Player Overlay (shown when a video is playing) */}
        {playingVideo && (
          <div className="video-overlay">
            <div className="video-container">
              <video controls autoPlay className="video-player">
                <source src={playingVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="close-video-btn" onClick={this.handleCloseVideo}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Tabs for All Movies and Favorites */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('all')}
          >
            All Movies
          </button>
          <button
            className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('favorites')}
          >
            Favorites
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'all' && (
          <>
            <h2 className="movies-title">Explore Movies</h2>
            <div className="movies-grid">
              {this.movies.map((movie) => this.renderMovieCard(movie))}
            </div>
          </>
        )}

        {activeTab === 'favorites' && (
          <div className="favorites-section">
            <div className="favorites-header">
              <h2 className="movies-title">Your Favorites</h2>
              <button
                className="close-favorites-btn"
                onClick={() => this.handleTabChange('all')}
              >
                Close
              </button>
            </div>
            <div className="movies-grid favorites-grid">
              {favoriteMovies.length > 0 ? (
                favoriteMovies.map((movie) => this.renderMovieCard(movie))
              ) : (
                <p className="no-favorites">No favorites yet. Add some movies to your favorites!</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MoviesPage;