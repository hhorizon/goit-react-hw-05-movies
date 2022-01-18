import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  padding: 25px 75px;
`;

const DescrWrapper = styled.div`
  margin-left: 40px;
  color: rgba(255, 255, 255, 0.8);

  font-size: 16px;
  letter-spacing: 0.04em;
  line-height: 1.5;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
`;

const Genres = styled.div`
  display: inline;
  padding: 3px 10px;
  border-radius: 4px;
  background-color: #78a5a373;

  & span:not(:last-child)::after {
    content: ", ";
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  & svg {
    color: rgb(255 215 0 / 90%);
    margin-right: 5px;
  }
`;

const Overview = styled.div``;

export { CardWrapper, DescrWrapper, Title, Genres, Rating, Overview };
