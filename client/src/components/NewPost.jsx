import { useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function NewPostForm({ onPostCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    location: "",
    image_url: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`${supabaseUrl}/rest/v1/wildlife`, {
      method: "POST",
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      setFormData({
        name: "",
        species: "",
        location: "",
        image_url: "",
      });
      onPostCreated();
    } else {
      alert("Error submitting post");
      console.error(result);
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Add a New Wildlife Sighting</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="species"
        placeholder="Species"
        value={formData.species}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="url"
        name="image_url"
        placeholder="Image URL"
        value={formData.image_url}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Add Post"}
      </button>
    </form>
  );
}
