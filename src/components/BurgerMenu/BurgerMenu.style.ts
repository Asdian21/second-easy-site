import styled from "styled-components";

export const Burger = styled.div`
  width: 30px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1000;
`;

export const Line = styled.span<{ $open: boolean; $index: number }>`
  border: 2px solid white;
  width: 100%;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;

  ${({ $open, $index }) => {
    if ($index === 1) {
      return $open
        ? `transform: rotate(45deg) translate(7px, 7px);`
        : `transform: rotate(0);`;
    }
    if ($index === 2) {
      return $open
        ? `opacity: 0; transform: translateX(20px);`
        : `opacity: 1; transform: translateX(0);`;
    }
    if ($index === 3) {
      return $open
        ? `transform: rotate(-45deg) translate(7px, -7px);`
        : `transform: rotate(0);`;
    }
  }}
`;
