import Data from "./Moviesdata";
import { useParams } from "react-router-dom";
const Castpage = () => {
  const { id, castid } = useParams();
  const movies = Data.find((m) => m.id === parseInt(id));
  const cast = movies.cast.find((c) => c.id === parseInt(castid));

  return (
    <>
      <div
        className="container-fluid bg-black mt-2 d-flex align-items-center text-white "
        style={{ height: "400px" }}
      >
        <div className="cast-img " style={{ marginLeft: "200px" }}>
          <img
            src={cast.cimage}
            width={500}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="cast-details ms-3">
          <h1>
            <strong>{cast.realname}</strong>
          </h1>
          <p className="ms-1">
            Born : <span className="ms-3">{cast.born}</span>
          </p>
          <p className="ms-1">
            Birthplace : <span className="ms-3">{cast.birthplace}</span>
          </p>
          <p className="ms-1">
            occupation : <span className="ms-3">{cast.occupation}</span>
          </p>
        </div>
      </div>
      <div className="About" style={{ marginLeft: "200px" }}>
        <h1>
          <strong>About</strong>
        </h1>
        <p>{cast.about}</p>
      </div>
    </>
  );
};
export default Castpage;
