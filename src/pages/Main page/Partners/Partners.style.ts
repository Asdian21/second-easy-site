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
        .subContainer {
            display: flex;
            gap: 64px;
        }
    }
`;
