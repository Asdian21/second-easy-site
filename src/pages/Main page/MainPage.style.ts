import styled from "styled-components";

export const StyleMainPage = styled.div`
.element-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-in-out;
}

.element-show {
  opacity: 1;
  transform: translateY(0%);
}
`;
