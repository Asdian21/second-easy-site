import styled from "styled-components";

export const StyleServices = styled.div`
display: flex;
flex-direction: column;
gap: 66px;
margin: 150px auto;
width: 1110px;
height: 693px;
align-items: center;
h2 {
    width: 351px;
    height: 43px;
    font: 500 36px "Oswald";
    color: #000;
}
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
}

/* scroll-animation.css */
.fade-animation {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.fade-show {
  opacity: 1;
}

.fade-delay-0 { transition-delay: 0s; }
.fade-delay-1 { transition-delay: 0.15s; }
.fade-delay-2 { transition-delay: 0.3s; }
.fade-delay-3 { transition-delay: 0.45s; }
.fade-delay-4 { transition-delay: 0.6s; }
.fade-delay-5 { transition-delay: 0.75s; }

`;

export const StyleServiceCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F7F7F7;
width: 350px;
height: 250px;
gap: 30px;
img {
    width: 60px;
    height: 40px;
    color: #F7654A;
}
h4 {
    width: 172px;
    height: 62px;
    font: 500 21px "Oswald";
    text-align: center;
}
`