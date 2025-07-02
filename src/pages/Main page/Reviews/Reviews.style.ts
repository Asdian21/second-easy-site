import styled from "styled-components";

export const StyleReviews = styled.div`
display: flex;
flex-direction: column;
margin: 150px auto;
gap: 60px;
align-items: center;
justify-content: space-between;
h2 {
    font: 500 36px "Oswald";
    text-transform: uppercase;
}
.cards {
    display: flex;
    gap: 30px;
}

.review-animation {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.review-show {
  opacity: 1;
  transform: translateY(0);
}

.review-delay-0 { transition-delay: 0s; }
.review-delay-1 { transition-delay: 0.2s; }
.review-delay-2 { transition-delay: 0.4s; }

`;


export const ReviewCard = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
.textBox {
    background-color: #F7F7F7;
    width: 350px;
    height: 259px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 15px;
    p {
        font: 400 14px "Open Sans";
        color: #999;
    }
}
h4 {
    font: 500 21px "Oswald";
    span {
        color: #F7654A;
    }
}
`;