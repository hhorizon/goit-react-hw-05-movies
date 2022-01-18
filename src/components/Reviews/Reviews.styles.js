import styled from "styled-components";
import ReactPaginate from "react-paginate";

const List = styled.ul`
  padding: 25px;
`;

const Item = styled.li`
  &:not(:last-child) {
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #78a5a3;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Name = styled.p`
  margin-left: 15px;
  font-size: 15px;
  color: #78a5a3;
`;

const Content = styled.p`
  padding-left: 25px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const NoReviewsMess = styled.p`
  padding: 25px;
  font-size: 16px;
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
  disabledLinkClassName: "disabled",
})`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 25px;
  font-size: 14px;
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

  & .disabled {
    background-color: #444c5c;
    color: #444c5c;
  }
`;

export { List, Item, Author, Avatar, Name, Content, NoReviewsMess, Paginate };
