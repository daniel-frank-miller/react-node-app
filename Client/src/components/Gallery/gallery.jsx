import "/src/components/Gallery/gallery.css";
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx"
const Gallery = () => {
  return (
    <>
    <Navbar />
    <div className="gallery-section">
      <div className="gallery-title">
        <h2>
          Gallery
        </h2>
      </div>
      <div className="album">
        <div className="responsive-container-block bg">
          <div className="responsive-container-block img-cont">
            <img className="img" src="/src/assets/gallery-image2.webp" />
            <img className="img" src="/src/assets/gallery-image9.webp" />
            <img className="img" src="/src/assets/gallery-image1.webp" />
            <img className="img  img-last" src="/src/assets/gallery-image13.webp"/>
          </div>
          <div className="responsive-container-block img-cont">
            <img className="img img-big" src="/src/assets/gallery-image8.webp" />
            <img className="img img-big img-last" src="/src/assets/gallery-image10.webp" />
          </div>
          <div className="responsive-container-block img-cont">
            <img className="img" src="/src/assets/gallery-image11.webp" />
            <img className="img img-sec" src="/src/assets/gallery-image21.webp" />
            <img className="img img-third" src="/src/assets/gallery-image20.webp " />
            <img className="img img-last" src="/src/assets/gallery-image14.webp " />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
export default Gallery;
