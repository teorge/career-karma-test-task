import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 50px;
`;

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  color: #fff;
  background: ${({ isFormSubmitted }) => (isFormSubmitted ? '#6CC551' : '#3C91E6')};
`;

export const CheckIcon = styled.img`
  height: 10px;
`;

export const Submit = styled.button`
  background: linear-gradient(193.02deg, #ffcd65 0%, #fe9f35 100%);
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px;
  margin-top: 20px;
  width: 170px;
  cursor: pointer;
  color: #fff;
`;