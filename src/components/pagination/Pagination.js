import ReactPaginate from "react-paginate";
import styled from "styled-components";

function PaginatedItems({ totalPages, onPaginationBtn }) {
  const handlePageClick = (event) => {
    onPaginationBtn(event.selected + 1);
  };

  return (
    <>
      <Paginate
        onPageChange={handlePageClick}
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        breakLabel="..."
        nextLabel="next >"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;

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
  list-style-type: none;
  background-color: antiquewhite;

  & .prevItem {
    margin-right: 15px;
  }

  & .item {
    margin-right: 15px;
  }

  & .activeItem {
  }

  & .breakItem {
    margin-right: 15px;
  }
`;
