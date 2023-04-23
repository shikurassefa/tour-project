import React, { useState, useEffect } from "react";
import Tours from "./Tours";
const App = () => {
  const url = "https://vrecile.vercel.app/api/tour";
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const handleInterst = (id) => {
    const newTour = tour.filter((tours) => tours.id !== id);
    setTour(newTour);
  };
  const refresh = () => {
    getData();
  };
  const getData = async () => {
  try {
    setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTour(data);
  } catch (error) {
    setLoading(false)
  }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  if (tour.length == 0) {
    return (
      <main>
        <h1>No Tours Left</h1>
        <button className="btn fetch-btn" onClick={() => refresh()}>
          fetch Tours
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tour={tour} handleInterst={handleInterst} />
    </main>
  );
};

export default App;

