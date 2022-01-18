import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import fonFound from "../../images/not-found.png";
import {
  List,
  Item,
  Author,
  Avatar,
  Name,
  Content,
  NoReviewsMess,
  Paginate,
} from "./Reviews.styles";

function Reviews({ reviews, creditsPerPage }) {
  const [currentReviews, setCurrenReviews] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + creditsPerPage;
    setCurrenReviews(reviews.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(reviews.length / creditsPerPage));
  }, [reviews, itemOffset, creditsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * creditsPerPage) % reviews.length;
    setItemOffset(newOffset);
  };

  const getCorrectSrc = (string) => {
    if (string === null) {
      return fonFound;
    }

    if (string.slice(1, 6) === "https") {
      return string.slice(1);
    }

    return `https://image.tmdb.org/t/p/w500${string}`;
  };

  return (
    <>
      <>
        {currentReviews && currentReviews.length !== 0 ? (
          <List>
            {currentReviews.map((review) => (
              <Item key={review.id}>
                <Author>
                  <Avatar
                    src={getCorrectSrc(review.author_details.avatar_path)}
                    alt="avatar"
                    width={50}
                    height={50}
                  />
                  <Name>{review.author}</Name>
                </Author>
                <Content>{review.content}</Content>
              </Item>
            ))}
          </List>
        ) : (
          <NoReviewsMess>
            We don't have any reviews for this movie.
          </NoReviewsMess>
        )}
      </>

      <Paginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

Reviews.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object),
  creditsPerPage: propTypes.number,
};

export default Reviews;
