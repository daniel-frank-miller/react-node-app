
import './rating.css';
const Rating = () => {
  return (
    <div className="section6 prevent-select" id="ratingSection">
      <h1 className="review-heading1">
        Review & Rating
        <span>
          <i className="fa-solid fa-heart"></i>
        </span>
      </h1>
      <div className="review-container">
        <div className="top-container">
          <div className="reviewBox change1">
            <div className="leftboxbackground">
              <h1 className="review-heading">Cooking Review</h1>
              <div className="stars-container1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="rating-text" id="output1">
                You rated it ____
              </p>
            </div>
          </div>
          <div className="cookingImage change2">
            <img
              src="/src/assets/side-food-img.webp"
              className="side-cook-img"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="cookingImage">
            <img
              src="/src/assets/side-cleaning-img.webp"
              className="side-cook-img"
            />
          </div>
          <div className="reviewBox">
            <div className="rightboxbackground">
              <h1 className="review-heading">Cleaning Review</h1>
              <div className="stars-container2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="rating-text" id="output2">
                You rated it ____
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
