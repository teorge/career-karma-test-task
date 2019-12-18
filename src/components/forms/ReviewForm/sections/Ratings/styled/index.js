import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0;
  width: 60%;
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #1b2733;
`;

export const Item = styled.div`
  width: 150px;
  flex-basis: calc(50% - 20px);
  margin: 20px 20px 0 0;
`;
