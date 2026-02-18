import React from 'react';
import ReviewsPage from './ReviewsPage';

export const metadata = {
  // title: "Reviews",
  title:{
    absolute: "Comments"
  },
  description: "Reviews left by our customers",
};


const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;