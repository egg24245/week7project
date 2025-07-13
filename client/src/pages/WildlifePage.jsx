import "../style/WildlifePage.css";
import { useEffect, useState } from "react";
import NewPostForm from "../components/NewPost";
import Gallery from "../components/Gallery";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function WildlifePage() {
  const [wildlife, setWildlife] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchWildlife = () => {
    fetch(supabaseUrl + "/rest/v1/wildlife?select=*", {
      headers: {
        apikey: apiKey,
        Authorization: "Bearer " + apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => setWildlife(data))
      .catch((err) => console.log("error fetching data", err));
  };

  useEffect(() => {
    fetchWildlife();

    const intervalId = setInterval(() => {
      fetchWildlife();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <h1>Wildlife Sightings</h1>

        <NewPostForm onPostCreated={fetchWildlife} />

        <Gallery wildlife={wildlife} onImageClick={setSelectedImage} />
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
