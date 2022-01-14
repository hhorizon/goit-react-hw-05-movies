import styled from "styled-components";
import ReactPaginate from "react-paginate";

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

export { List, Item, ActorName, ActorCharacter, NoCastMess, Paginate };
