import "../style/WildlifePage.css";
import { useEffect, useState } from "react";
import NewPostForm from "../components/NewPost";
import Gallery from "../components/Gallery";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function WildlifePage() {
  const [wildlife, setWildlife] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  function fetchWildlife() {
    fetch(supabaseUrl + "/rest/v1/wildlife?select=*", {
      headers: {
        apikey: apiKey,
        Authorization: "Bearer " + apiKey,
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setWildlife(data);
      })
      .catch(function (err) {
        console.log("error fetching data", err);
      });
  }

  useEffect(function () {
    fetchWildlife();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Wildlife Sightings</h1>

        <NewPostForm
          onPostCreated={function () {
            fetchWildlife();
          }}
        />

        <Gallery
          wildlife={wildlife}
          onImageClick={function (url) {
            setSelectedImage(url);
          }}
        />
      </div>

      {selectedImage && (
        <div
          className="modal"
          onClick={() => {
            setSelectedImage(null);
          }}
        >
          <img src={selectedImage} alt="Enlarged wildlife" />
        </div>
      )}
    </>
  );
}
