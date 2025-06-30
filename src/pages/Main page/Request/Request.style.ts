import styled from "styled-components";

export const StyleRequest = styled.div`
display: flex;
width: 100%;
height: 181px;
background-color: #F7654A;
color: white;
.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1110px;
    margin: 0 auto;
.text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 562px;
    .primaryText {
        width: 100%;
        font: 700 48px "Oswald";
    }
    .secondaryText {
        width: 100%;
        font: 700 24px "Oswald";
    }
}
.requestButton {
    width: 175px;
    height: 49px;
    background-color: #fff;
    color: #000;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    .requestImg {
        color: #000;
        width: 18px;
        height: 21px;
    }
    .buttonText {
        font: 500 14px "Oswald";
        color: #000;
    }
}
}
`; 
