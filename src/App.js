import React, { useState } from "react";
import ReactDom from "react-dom";
import "./styles.css";
import axios from "axios";
export default function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const [clientId, setClientId] = useState(
    "T0poMFmOE7VJRSFCnRxhQ5e7hbmGxjW9dmqcJEGKGDw"
  );

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function findImage(event) {
    console.log(photo);
    const url = `https://api.unsplash.com/search/photos?&query=${photo}&client_id=${clientId}`;
    axios.get(url).then((res) => {
      console.log(res);
      setResult(res.data.results);
    });
  }
  return (
    <div className="App">
      <div className="container pt-5">
        <div className="pt-5 pb-5 col-lg-5 mx-auto">
          <h1 className="font-weight-bold">I am MiniSplash</h1>
          <p>
            Find A few Images by searching below. But just a few though. I am
            like unsplash, just crappier... Like way crappier
          </p>
        </div>
        <div className="pt-5 pb-5 col-lg-5 mx-auto">
          <div className="md-form input-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              placeholder="Search for 'birds'..."
            />
            <div className="input-group-append">
              <button
                className="btn btn-md btn-secondary m-0 px-3"
                type="button"
                onClick={findImage}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="">
<p className="text-center small font-weight-bold">Search Results for: {photo ? photo : 'Nothing searched for yet'} </p>
          <div className="row">
            {result.map((photo) => (
              <div className="col-lg-4" key={photo.id}>
                <img
                  src={photo.urls.small}
                  alt={photo.user.name}
                  className="img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
