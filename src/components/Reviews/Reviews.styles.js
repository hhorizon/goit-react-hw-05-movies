import styled from "styled-components";
import ReactPaginate from "react-paginate";

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

  & .activeLink {
    background-color: #78a5a3;
  }
`;

export { List, Item, Name, Content, NoReviewsMess, Paginate };
