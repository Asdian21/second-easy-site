import styled from "styled-components";

export const StyleSectionOne = styled.div`
  position: relative;
  background: #000;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }

  main {
    display: flex;
    flex-direction: column;
    margin: 0 405px;
    .icon_burger {
      display: flex;
      justify-content: space-between;
      height: 60px;
      width: 100%;
      margin-top: 20px;
      margin-bottom: 112px;
      .icon {
        height: 100%;
        width: 60px;
      }
    }
    .mainText {
      display: flex;
      margin: 0 auto;
      width: 734px;
      color: white;
      font: 500 64px "Oswald";
      text-transform: uppercase;
      text-align: center;
    }
    .secondaryText {
      display: flex;
      margin: 0 auto;
      font: 400 18px "Oswald";
      text-align: center;
      text-transform: uppercase;
      color: white;
    }
  }
`;
