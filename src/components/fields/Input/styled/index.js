import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 20px 0 0;
  ${({ numbered }) => (numbered ? `max-width: 300px;` : `min-width: 300px;`)}
  input {
    margin-top: 10px;
  }
`;
