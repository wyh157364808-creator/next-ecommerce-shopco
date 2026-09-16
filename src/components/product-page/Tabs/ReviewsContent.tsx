import { Button } from "@/components/ui/button";
import React from "react";
import ReviewCard from "@/components/common/ReviewCard";
import { reviewsData } from "@/app/page";

const ReviewsContent = () => {
  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">
            All Reviews
          </h3>
          <span className="text-sm sm:text-base text-black/60">
            ({reviewsData.length})
          </span>
        </div>
        <div className="flex items-center space-x-2.5">
          <Button
            type="button"
            className="sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-black font-medium text-xs sm:text-base h-12"
          >
            Write a Review
          </Button>
        </div>
      </div>
      {reviewsData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} data={review} isAction isDate />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-black/50">
          No reviews yet. Be the first to write one!
        </div>
      )}
    </section>
  );
};
export default ReviewsContent;
