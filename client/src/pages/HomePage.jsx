import { Link } from "react-router-dom";
import "../style/HomePage.css";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Wildlife Sightings</h1>
      <h2>
        Discover the amazing wildlife around you and share your own sightings
        with our community.
      </h2>

      <h3>How it works</h3>
      <ul>
        <li>Browse the latest wildlife sightings on our Wildlife page.</li>
        <li>Add your own sightings using the easy submission form.</li>
        <li>Explore photos, locations, and dates of sightings.</li>
      </ul>
      <nav>
        <Link to="/wildlife">See Wildlife Sightings</Link>
        <p>and/or</p>
        <Link to="/wildlife">Add a Sighting</Link>
      </nav>
      <img
        src="/tortoise.jpg"
        alt="a tortoise strutting around"
        className="responsive-img"
      />
      <img
        src="/racoon2.0.jpg"
        alt="a racoon with its tongue out"
        className="responsive-img"
      />
    </main>
  );
}
