import Moviesdata from "./Moviesdata";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductList = () => {
  const { id } = useParams();
  const movies = Moviesdata.find((p) => p.id === parseInt(id));
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center "
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${movies.image2})`,
          width: "100%",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="main  d-flex align-items-center text-white gap-3 ms-5"
          style={{ height: "400px", width: "900px" }}
        >
          {" "}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`https://www.youtube.com/results?search_query=${movies.name}`}
          >
            <div className="card bg-black text-white rounded">
              <img
                src={movies.image}
                style={{ width: "100%", height: "100%" }}
              />
              <p className="card-title text-center">no watch option</p>
            </div>
          </Link>
          <div className="movie-content">
            <h1>
              {" "}
              <strong>{movies.name} </strong>
            </h1>
            <div
              className="rating-main d-flex align-items-center rounded"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "rgb(51, 51, 51)",
              }}
            >
              <h4>
                {" "}
                ⭐{movies.rating}/10{" "}
                <span className="ms-3" style={{ fontFamily: "Raleway" }}>
                  ({movies.votes} votes)
                </span>
              </h4>
            </div>

            <div
              className="lang-main mt-2 d-flex align-item-center gap-4"
              style={{ width: "100%", height: "40px" }}
            >
              <div
                className="print text-black rounded"
                style={{ backgroundColor: "white", width: "150px" }}
              >
                <p className="mt-2 ms-4"> {movies.print}</p>
              </div>
              <div
                className="print text-black rounded"
                style={{ backgroundColor: "white", width: "200px" }}
              >
                <p className="mt-2 ms-4">
                  {movies.languages[0]} , {movies.languages[1]},{" "}
                  {movies.languages[2]}
                </p>
              </div>
            </div>

            <div className="duration mt-2 d-flex">
              <h6>{movies.duration}</h6>
              <h6 className="ms-3">●{movies.type}</h6>
              <h6 className="ms-3">●{movies.date}</h6>
            </div>
            {movies.bookings && (
              <Link to={`/movies/${movies.id}/bookings/${movies.id}`}>
                <button
                  className="btn"
                  style={{ color: "white", backgroundColor: "red" }}
                  key={movies.id}
                >
                  Book tickets
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="content-body mt-3 ms-3 ms-5">
        <h1>
          {" "}
          <strong>About us </strong>
        </h1>
        <p>{movies.about}</p>
      </div>{" "}
      <hr></hr>
      <div className="container-fluid ms-5">
        <h1>
          <strong>Cast</strong>
        </h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 ">
          {movies.cast.map((c) => (
            <Link
              to={`/movies/${movies.id}/cast/${c.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="col d-block align-items-center justify-content-center"
                style={{ width: "200px" }}
                key={c.id}
              >
                <img
                  src={c.cimage}
                  width={200}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <p className="ms-3">
                  {" "}
                  <strong>{c.realname}</strong>
                  <p>as {c.castname}</p>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="container-fluid ms-5">
        <h1>
          <strong>Top reviews</strong>
        </h1>
        <p>Summary of {movies.reviews.length} reviews </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 gap-3 ms-3 mt-2">
          {movies.reviews.map((r) => (
            <div
              className="row rounded ms-2 d-flex"
              style={{
                border: "1px solid black",
                width: "500px",
                height: "200px",
              }}
            >
              <div className="user-details p-3 d-flex">
                <img
                  src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg"
                  height={50}
                />
                <p className="ms-2 mt-2">
                  {" "}
                  <strong>{r.user}</strong>
                </p>
                <p className=" mt-2 ms-4">⭐{r.rat}/5</p>
              </div>
              <p>{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
