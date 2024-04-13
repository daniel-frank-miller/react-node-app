import "/src/components/Reviews/reviews.css";
import Navbar from "/src/components/Navbar/navbar.jsx"
import Footer from "../Footer/footer.jsx"
import { MdOutlineLocationOn } from "react-icons/md";

const Reviews = () => {
    return (
        <div className="review-section">
        <Navbar />
        <div className="container">
            <h2 className="customReviewHeading">Customer Reviews</h2>
            <div className="review-container">
                <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-lady-1.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Dhanya</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"I've been using HOMAID for regular cleaning services for over a year now, and I couldn't be happier! Their team is always friendly, punctual, and efficient. They do a fantastic job of keeping my home spotless week after week. Plus, their attention to detail is impressive. I appreciate the peace of mind knowing that my home is in good hands with HOMAID"</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Gachibowli
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl2.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sadha</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"I recently hired HOMAID for a deep cleaning of my apartment, The team arrived on time and was incredibly thorough in their work.I highly recommend their services to anyone looking for professional cleaning"</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Kondapur
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy1.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Daryna</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"I'm extremely impressed with HOMAID's attention to detail. I hired them for a move-out cleaning, and they made the apartment look better than when I first moved in! Every surface was sparkling clean, and they even cleaned areas I hadn't thought of. Their professionalism and dedication to customer satisfaction are unmatched"</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Hi-Tech City
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl3.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sriya</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"HOMAID's cleaning team is simply the best! I've tried other cleaning services in the past, but none have matched the level of quality and attention to detail that HOMAID provides. They consistently exceed my expectations, I highly recommend them to anyone in need of cleaning services."</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Miyapur
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/testimonial-man-1.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sandeep</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">
                                "I was hesitant to hire a cleaning service at first, but HOMAID has completely changed my perspective. Their team is professional, trustworthy, and does an incredible job every time. I love coming home to a clean and organized space after they've been here. Plus, their prices are reasonable for the level of service they provide."
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Toli Chowki
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy3.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Dhruva</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">
                                "Homaid professional maids are thorough, reliable, and friendly. I couldnot be happier with their service!"
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Financial District
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl4.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Ananya</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">
                                "Homaid Services is simply unmatched. Their cleaning prowess and culinary skills have made my life easier 
                                and my home happier. I am a loyal customer for a reason"
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Chanda Nagar
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy4.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sudhan</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>

                            </div>
                            <p className="reviewersReview">
                                "Trust is paramount when it comes to home services, and Homaid excels in delivering it. Their 
                                disciplined and trained staff not only keep my home impeccably clean but also operate with
                                transparency, creating a partnership built on reliability and excellence."
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>BHEL
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl5.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Nishita</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p className="reviewersReview">
                                "When it comes to cooking, Homaid Services is in a league of its own. Their chefs have a magic touch that transforms 
                                ordinary meals into extraordinary experiences. I would not let anyone else take the reins in my kitchen."
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Lingampally
                            </p>
                        </div>
                    </div>

                    {/* Add more reviews here */}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Reviews;
