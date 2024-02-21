import React, { useState } from "react";
import memesData from "../data/memesData";

const Meme = () => {
  const [image, setImage] = useState("");

  const generateRandomImage = () => {
    let randomKey = Math.floor(Math.random() * memesData.data.memes.length);
    let randomImage = memesData.data.memes[randomKey].url;
    setImage(randomImage);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row m-auto">
          <div className="col-md-5">
            <input
              className="form-control"
              type="text"
              placeholder="Top Text"
            />
          </div>
          <div className="col-md-5">
            <input
              className="form-control"
              type="text"
              placeholder="Buttom Text"
            />
          </div>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            onClick={generateRandomImage}
            type="button"
          >
            Click Me
          </button>
        </div>

        {image && (
          <div className="card" style={{ width: "50%" }}>
            <img
              src={image}
              className="card-img-top"
              style={{ width: "90%" }}
              alt="..."
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Meme;
