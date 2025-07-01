import styled from "styled-components";

export const StyleQuestion = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 50px;
margin: 150px auto;
width: 1110px;
h2 {
    font: 500 36px "Oswald";
    width: 321px;
}
.mainWrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    width: 100%;
}
`;

export const Wrapper = styled.div`
color: #F7654A;
`;

export const Toggle = styled.div`
display: flex;
gap: 15px;
    font: 500 24px "Oswald";
  cursor: pointer;
  user-select: none;
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  transform: rotate(${props => (props.isOpen ? "-90deg" : "0deg")});
  transition: transform 0.5s ease;
`;

export const Description = styled.p`
  margin-left: 20px;
  margin-top: 8px;
  color: #999;
  font: 400 16px "Open Sans";
`;

export const DescriptionWrapper = styled.div<{ isOpen: boolean }>`
  max-height: ${props => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease;
`;
