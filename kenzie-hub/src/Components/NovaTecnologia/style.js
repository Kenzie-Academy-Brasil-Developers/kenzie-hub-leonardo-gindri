import styled from "styled-components";

export const StyledNovaTec = styled.div`
  max-width: 380px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerNovaTec {
    background-color: var(--grey-3);
    margin: 0 auto;

    div {
      display: flex;
      background-color: var(--grey-2);
      justify-content: space-between;
      padding: 5px 1rem;

      h2 {
        font-size: 11.23px;
        line-height: 19.25px;
        font-weight: 700;
        color: var(--grey-0);
      }
    }
  }
`;
