import propTypes from "prop-types";
import { Paginate } from "./Pagination.styles";

function Pagination({ totalPages, onPaginationBtn }) {
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
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

Pagination.propTypes = {
  totalPages: propTypes.number,
  onPaginationBtn: propTypes.func,
};

export default Pagination;
