import "../style/WildlifePage.css";
import ImageItem from "./ImageItem";

export default function Gallery({ wildlife, onImageClick }) {
  return (
    <div>
      {wildlife.length === 0 ? (
        <p>Loading...</p>
      ) : (
        wildlife.map((animal) => (
          <ImageItem
            key={animal.id}
            animal={animal}
            onImageClick={onImageClick}
          />
        ))
      )}
    </div>
  );
}
