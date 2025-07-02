import styled from "styled-components";

export const StylePartners = styled.div`
  width: 100%;
  height: 364px;
  display: flex;
  background-color: #404149;

  .container {
    display: flex;
    flex-direction: column;
    color: white;
    margin: 100px auto;
    align-items: center;
    gap: 60px;

    h2 {
      font: 500 36px "Oswald";
      width: 256px;
      text-transform: uppercase;
    }
  }

  .slider {
    width: 1110px;
    overflow: hidden;
    position: relative;
  }

  .subContainer {
    display: flex;
    gap: 64px;
    width: max-content;
    animation: scroll 20s linear infinite;

    img {
      height: 60px;
      object-fit: contain;
    }
  }

  .slider:hover .subContainer {
  animation-play-state: paused;
}


  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
