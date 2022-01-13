import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fotFound from "../../images/not-found.png";

function Cast({ credits, creditsPerPage }) {
  const [currentCredits, setCurrenCredits] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + creditsPerPage;
    setCurrenCredits(credits.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(credits.length / creditsPerPage));
  }, [credits, itemOffset, creditsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * creditsPerPage) % credits.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <>
        {currentCredits && currentCredits.length !== 0 ? (
          <List>
            {currentCredits.map((credit) => (
              <Item key={credit.id}>
                {credit.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                    alt={credit.name}
                    width={210}
                  />
                ) : (
                  <img
                    src={fotFound}
                    alt={credit.name}
                    width={210}
                    height={315}
                  />
                )}
                <ActorName>{credit.name}</ActorName>
                <ActorCharacter>{credit.character}</ActorCharacter>
              </Item>
            ))}
          </List>
        ) : (
          <NoCastMess>We don't find any cast for this movie.</NoCastMess>
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

export default Cast;

const List = styled.ul`
  display: flex;
  padding: 25px;
  height: 391px;
`;

const Item = styled.li`
  width: 210px;
  font-size: 18px;
  letter-spacing: 0.04em;
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

const ActorName = styled.p`
  font-weight: 600;
  color: #78a5a3;
`;

const ActorCharacter = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

const NoCastMess = styled.p`
  padding: 25px;
  font-size: 20px;
  font-weight: 600;
  color: #78a5a3;
`;

//
//
//
//
//
//

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
