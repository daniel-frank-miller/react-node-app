import "/src/components/Gallery/gallery.css";
import Navbar from "/src/components/Navbar/navbar.jsx";


const Gallery = () => {
  return (
    <div>
    <Navbar />
    <div className="gallery-title">
        <h2>
            Gallery Section
        </h2>
    </div>
    <div className="gallery">
      <div className="gallery-item">
        <img src="/src/assets/gallery-image1.webp" alt="Image 1" />
      </div>
      <div className="gallery-item">
        <img src="/src/assets/gallery-image2.webp" alt="Image 2" />
      </div>
      <div className="gallery-item">
        <img src="/src/assets/gallery-image3.webp" alt="Image 3" />
      </div>
      <div className="gallery-item">
        <img src="/src/assets/gallery-image4.webp" alt="Image 4" />
      </div>
      <div className="gallery-item">
        <img src="/src/assets/gallery-image5.webp" alt="Image 5" />
      </div>
    </div>
      <div className="foot-gap"></div>
    </div>
    
  );
}
export default Gallery;
