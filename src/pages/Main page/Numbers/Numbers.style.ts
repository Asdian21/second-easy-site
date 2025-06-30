import styled from "styled-components";

export const StyleNumbers = styled.div`
  width: 1110px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: white;
  position: relative;
  top: -150px;
  left: 405px;
  background-color: rgba(247, 247, 247, 1);
`;

export const NumbersItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
  height: 186px;
  .number {
    font: 500 72px "Oswald";
    color: rgba(247, 101, 74, 1);
    margin-bottom: 25px;
    text-transform: uppercase;
  }
  .mainText {
    font: 500 36px "Oswald";
    color: #000;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .secondaryText {
    font: 500 18px "Oswald";
    color: rgba(153, 153, 153, 1);
    text-transform: uppercase;
  }
`;
