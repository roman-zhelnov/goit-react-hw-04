import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onClick }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((item) => (
          <li key={item.id}>
            <ImageCard image={item} onClick={() => onClick(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
