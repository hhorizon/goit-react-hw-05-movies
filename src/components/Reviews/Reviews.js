import React, { useEffect, useState } from "react";
import {
  List,
  Item,
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

  return (
    <>
      <>
        {currentReviews && currentReviews.length !== 0 ? (
          <List>
            {currentReviews.map((review) => (
              <Item key={review.id}>
                <Name>{review.author}</Name>
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
        previousLabel="previous"
        breakLabel="..."
        nextLabel="next"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Reviews;
