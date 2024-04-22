import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './rating.css';

const RatingStars = () => {
  return (
    <div className="w-100">
      <div className="d-flex-1 mb-rating rate-boxsize">
        <div className="rating-box-1">
          <div>
            <h1 className="num-rate">4.8</h1>
            <div className="rating">
              <div className="star">
                <FaStar className="size checked" />
              </div>
              <div className="star">
                <FaStar className="size checked" />
              </div>
              <div className="star">
                <FaStar className="size checked" />
              </div>
              <div className="star">
                <FaStar className="size checked" />
              </div>
              <div className="star">
                <FaStarHalfAlt className="checked" />
              </div>
            </div>
            <p className="avg-rate">Average Rating</p>
          </div>
        </div>

        <div className="rating-box-2">
          <div className="d-flex">
            <div className="rating">
              <FaStar className="checked" />
              <p className="rate-num">5</p>
            </div>
            <div className="bar-container">
              <div className="bar-5"></div>
            </div>
            <div>
              <p className="percentage">86%</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="rating">
              <FaStar className="checked" />
              <p className="rate-num">4</p>
            </div>
            <div className="bar-container">
              <div className="bar-4"></div>
            </div>
            <div>
              <p className="percentage">12%</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="rating">
              <FaStar className="checked" />
              <p className="rate-num">3</p>
            </div>
            <div className="bar-container">
              <div className="bar-3"></div>
            </div>
            <div>
              <p className="percentage">2%</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="rating">
              <FaStar className="checked" />
              <p className="rate-num">2</p>
            </div>
            <div className="bar-container">
              <div className="bar-2"></div>
            </div>
            <div>
              <p className="percentage">0%</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="rating">
              <FaStar className="checked" />
              <p className="rate-num">1</p>
            </div>
            <div className="bar-container">
              <div className="bar-1"></div>
            </div>
            <div>
              <p className="percentage">0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingStars;
