import styled from "styled-components";

export const Status = styled.div`
  margin: 30px 0;
`;

export const StatusItems = styled.div`
  display: flex;
`;

export const Title = styled.h4``;

export const Item = styled.div`
  border: 1px solid #fff;
  padding: 15px;
  width: 150px;
  max-height: 44px;
  margin-right: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-color: ${({ selected }) => (selected ? "#3C91E6" : "#fff")};
  border-radius: 4px;
  transition: border-color 0.3s ease;
  cursor: pointer;
  :hover {
    border-color: "#3C91E6";
  }
  img:last-child {
    transition: opacity 0.3s ease;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
  }
`;
