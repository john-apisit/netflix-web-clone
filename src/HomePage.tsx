const HomePage = () => {
  const genres = [
    {
      name: "action",
      image:
        "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg?ga=GA1.1.861110005.1741533388&semt=ais_hybrid",
    },
    {
      name: "drama",
      image:
        "https://img.freepik.com/premium-psd/movie-poster_1009850-314.jpg?ga=GA1.1.861110005.1741533388&semt=ais_hybrid",
    },
    {
      name: "comedy",
      image:
        "https://img.freepik.com/premium-psd/movie-poster-hiphop-artist-poster-design_574474-1659.jpg?ga=GA1.1.861110005.1741533388&semt=ais_hybrid",
    },
    {
      name: "thriller",
      image:
        "https://img.freepik.com/premium-psd/mystery-movie-posters_1117895-394.jpg?ga=GA1.1.861110005.1741533388&semt=ais_hybrid",
    },
    {
      name: "sci-fi",
      image:
        "https://img.freepik.com/premium-psd/broken-mirror-photo-effect-movie-poster-design_528542-2107.jpg?ga=GA1.1.861110005.1741533388&semt=ais_hybrid",
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-black bg-opacity-80">
        <div className="text-red-600 text-2xl font-bold">Netflix</div>
      </nav>

      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center p-5"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-psd/adventure-movie-poster_1117895-513.jpg?w=996')",
        }}
      >
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">
            Watch Unlimited Movies & TV Shows
          </h1>
          <p className="mt-2">Join today and start streaming instantly.</p>
          <button className="mt-4 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded">
            Join Now
          </button>
        </div>
      </div>

      {/* Movie Carousel */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold">Popular on Netflix</h2>
        <div className="flex overflow-x-auto space-x-4 mt-3">
          {genres.map((genre, index) => (
            <img
              key={index}
              src={genre.image}
              alt={`Movie ${index + 1}`}
              className="w-48 h-72 rounded-md flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-5 text-center bg-black bg-opacity-80 mt-5">
        <p>&copy; 2025 Netflix Clone | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
