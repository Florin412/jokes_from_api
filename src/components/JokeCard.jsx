const JokeCard = ({ icon_url, joke, getNewJoke }) => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        {/* <img src={icon_url} alt="chuck norris png" /> */}
        <p className="h2 my-4">{joke}</p>
        <button
          type="button"
          className="btn btn-primary lead"
          onClick={getNewJoke}
        >
          Get a new joke
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
