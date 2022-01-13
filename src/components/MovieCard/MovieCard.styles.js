import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  padding: 25px;
`;

const DescrWrapper = styled.div`
  margin-left: 30px;
  color: rgba(255, 255, 255, 0.8);

  font-size: 20px;
  letter-spacing: 0.04em;
  line-height: 1.5;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  color: #78a5a3;
`;

const Rating = styled.div`
  margin-bottom: 20px;
`;

const Overview = styled.div`
  margin-bottom: 20px;
`;

const Date = styled.div`
  margin-bottom: 20px;
`;

const Genres = styled.div`
  margin-bottom: 20px;

  & span:not(:last-child)::after {
    content: ", ";
  }
`;

const Gen = styled.p`
  display: inline;
  font-weight: 600;
  color: #78a5a3;
`;

export {
  CardWrapper,
  DescrWrapper,
  Title,
  Rating,
  Overview,
  Date,
  Genres,
  Gen,
};
