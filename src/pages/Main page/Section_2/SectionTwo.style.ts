import styled from "styled-components";

export const StyleSectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 405px 150px;
  width: 1110px;
  height: 681px;

  .heading {
    text-transform: uppercase;
    width: 506px;
    height: 43px;
    font: 500 36px "Oswald";
    display: flex;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .cards {
    display: flex;
    gap: 30px;
  }
  /* scroll-animation.css */
.card-animation {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.card-show {
  opacity: 1;
  transform: translateY(0);
}

.card-delay-0 { transition-delay: 0s; }
.card-delay-1 { transition-delay: 0.2s; }
.card-delay-2 { transition-delay: 0.4s; }

`;

export const ProjectCard = styled.div`
  width: 350px;
  img {
    width: 100%;
    height: 380px;
  }
  .line {
    margin-top: 45px;
    margin-bottom: 15px;
    width: 55px;
    border: 3px solid rgba(247, 101, 74, 1);
  }
  h3 {
    font: 500 24px "Oswald";
    color: rgba(64, 65, 73, 1);
    margin-bottom: 20px;
  }
  p {
    font: 400 16px "Open Sans";
    color: rgba(153, 153, 153, 1);
  }
`;
