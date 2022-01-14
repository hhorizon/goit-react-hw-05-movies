import React, { useEffect, useState } from "react";
import {
  List,
  Item,
  ActorName,
  ActorCharacter,
  NoCastMess,
  Paginate,
} from "./Cast.styles";
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
