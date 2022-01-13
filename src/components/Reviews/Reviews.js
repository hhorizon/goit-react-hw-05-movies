import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  console.log(currentReviews);

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

const List = styled.ul`
  padding: 25px;
`;

const Item = styled.li`
  &:not(:last-child) {
    padding-bottom: 5px;
    margin-bottom: 25px;
    border-bottom: 1px solid #78a5a3;
  }
`;

const Name = styled.p`
  margin-bottom: 10px;
  color: #78a5a3;
`;

const Content = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

const NoReviewsMess = styled.p`
  padding: 25px;
  font-size: 20px;
  font-weight: 600;
  color: #78a5a3;
`;

const Paginate = styled(ReactPaginate).attrs({
  previousClassName: "prevItem",
  previousLinkClassName: "prevLink",
  pageClassName: "item",
  pageLinkClassName: "link",
  activeClassName: "activeItem",
  activeLinkClassName: "activeLink",
  breakClassName: "breakItem",
  breakLinkClassName: "breakLink",
  nextClassName: "nextItem",
  nextLinkClassName: "nextLink",
})`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 25px;
  background-color: #444c5c;
  border-top: 1px solid #78a5a3;

  & .prevItem {
  }

  & .prevLink {
  }

  & .prevItem,
  & .item,
  & .breakItem,
  & .nextItem {
    margin-right: 15px;
  }

  & .prevLink,
  & .link,
  & .breakLink,
  & .nextLink {
    padding: 3px 8px;
    color: rgba(255, 255, 255, 0.8);
    background-color: #78a5a373;
    border-radius: 6px;
    cursor: default;
  }

  & .activeItem {
  }

  & .activeLink {
    background-color: #78a5a3;
  }

  & .breakItem {
  }

  & .breakLink {
  }

  & .nextItem {
  }

  & .nextLink {
  }
`;
