import styled from "@emotion/styled";

const CtaButton = styled.div`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? "#fff" : "#2667FF")};
  white-space: nowrap;
  padding: 16px 25px;
  color: ${({ dark }) => (dark ? "#2667FF" : "#fff")};
  font-size: large;
  margin-right: ${({ mr }) => (mr ? "20px" : "0px")};
  border: ${({ white }) => (white ? "1px solid #fff" : " 2px solid #2667FF")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
export default CtaButton;
