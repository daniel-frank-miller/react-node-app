import "/src/components/Reviews/reviews.css";
import Navbar from "/src/components/Navbar/navbar.jsx"

const Reviews = () => {
    return (
        <div className="review-section">
        <Navbar />
        <div className="container">
            <h2 className="customReviewHeading">Customer Reviews</h2>
            <div className="review-container">
                <div className="review">
                    <div className="avatar"></div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">John Doe</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p className="reviewersReview">"Great service! They exceeded my expectations and I'll definitely be using them again."</p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="avatar"></div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">John Doe</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p className="reviewersReview">"Great service! They exceeded my expectations and I'll definitely be using them again."</p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="avatar"></div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Jane Smith</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"Outstanding cooking service! The meals were delicious and the chef was very professional."</p>
                        </div>
                    </div>
                    {/* Add more reviews here */}
                </div>
            </div>
        </div>
    );
}

export default Reviews;
