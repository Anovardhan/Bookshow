import { useParams } from "react-router-dom";
import { useState } from "react";
import Data from "./Moviesdata";

const Bookingpage = () => {
  const { id } = useParams();
  const movies = Data.find((m) => m.id === parseInt(id));
  const [selected, setselected] = useState(movies.tickets[0].date);

  const handleclickdate = (date) => {
    setselected(date);
  };
  const selectedTicket = movies.tickets.find((t) => t.date === selected);

  return (
    <>
      <div className="container-fluid">
        <div className="moviename">
          <h1>
            <strong className="fs-1">{movies.name}</strong>
          </h1>
          <div>
            <p className="rounded">{movies.type}</p>
          </div>
        </div>
        <hr />
        <div className="p-4">
          <div className="d-flex gap-3 mb-2">
            {movies.tickets.map((t) => (
              <button
                key={t.date}
                onClick={() => handleclickdate(t.date)}
                className={`btn ${
                  selected === t.date ? "btn-primary" : "btn-outline-secondary"
                }`}
              >
                {t.date}
              </button>
            ))}
          </div>
        </div>
        {selectedTicket?.theaters.map((t, index) => (
          <div key={index} className="mb-4 border p-3 rounded bg-light">
            <div className="d-flex">
              <h3>{t.name}</h3>
              <p className="text-muted mt-1 ms-3">{t.place}</p>
            </div>
            <p>
              🎟️ Prices: Upper ₹{t.prices[0].upperbalcony}, Lower ₹
              {t.prices[0].lowerbalcony}, Second ₹{t.prices[0].secondclass}
            </p>
            <div className="d-flex flex-wrap gap-2">
              {t.shows.map((show, i) => (
                <button key={i} className="btn btn-success">
                  {show}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bookingpage;
