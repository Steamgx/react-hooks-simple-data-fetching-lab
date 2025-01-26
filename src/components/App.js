import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json()) // Parse JSON properly
      .then((data) => {
        setImage(data.message); // Extract the URL
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}

export default App;
