export default function ImageItem({ animal, onImageClick }) {
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onImageClick(animal.image_url);
    }
  }

  return (
    <div className="card">
      <h2>{animal.name}</h2>
      <p>
        <strong>Species:</strong> {animal.species}
      </p>
      <p>
        <strong>Location:</strong> {animal.location}
      </p>
      {animal.date_spotted && (
        <p>
          <strong>Date:</strong> {animal.date_spotted}
        </p>
      )}

      <img
        src={animal.image_url}
        alt={animal.name + " - " + animal.species}
        tabIndex="0"
        onClick={() => onImageClick(animal.image_url)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
