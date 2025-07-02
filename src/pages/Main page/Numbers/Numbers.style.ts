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

  /* scroll-animation.css */
.element-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.element-show {
  opacity: 1;
  transform: translateY(0%);
}

.element-show-delay-0 { transition-delay: 0.2s; }
.element-show-delay-1 { transition-delay: 0.4s; }
.element-show-delay-2 { transition-delay: 0.6s; }
.element-show-delay-3 { transition-delay: 0.8s; }

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
