import Data from "./Moviesdata";
import { Link } from "react-router-dom";

const Home = ({ searchterm }) => {
  const filtereddata = Data.filter((s) =>
    s.name.toLowerCase().includes(searchterm.toLowerCase())
  );
  return (
    <div className="container-fluid mt-4">
      <h2 style={{ fontFamily: "Lora" }}>Favourite Movies</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
        {filtereddata.map((m, index) => (
          <Link
            to={`/movies/${m.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={m.id}
          >
            <div key={index} className="col">
              <div
                className="card h-70  bg-black text-white"
                style={{ width: "100%" }}
              >
                <img
                  src={m.image}
                  className="card-img-top rounded"
                  alt={m.name}
                />
                <div className="card-body ">
                  <h5 className="card-title">
                    ⭐{m.rating}/10{" "}
                    <span style={{ fontFamily: "Gidole" }}>{m.votes}Votes</span>
                  </h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
