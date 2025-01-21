import React from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

interface RatingStarsProps {
    rating: number;
}

const maxRating = 5
export const RatingStars: React.FC<RatingStarsProps> = ({rating}) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 flex-wrap">
            {Array.from({length: fullStars}, (_, index) => (
                <AiFillStar key={`full-${index}`} className="text-yellow-400 text-xl"/>
            ))}
            {hasHalfStar && <AiOutlineStar className="text-yellow-400 text-xl"/>}
            {Array.from({length: emptyStars}, (_, index) => (
                <AiOutlineStar key={`empty-${index}`} className="text-gray-300 text-xl"/>
            ))}
        </div>
    );
};