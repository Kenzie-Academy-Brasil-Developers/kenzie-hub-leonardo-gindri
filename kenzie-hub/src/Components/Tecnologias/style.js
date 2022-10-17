import styled from "styled-components";

export const CardTecnologia = styled.div`
  background-color: var(--grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  transition: 0.4s;
  :hover {
    filter: brightness(1.5);
  }

  h2 {
    color: var(--grey-0);
    font-size: 14.21px;
    line-height: 24.36px;
    font-weight: 700;
  }

  span {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 12.18px;
    line-height: 22.33px;
  }
`;
