import styled from "styled-components";

export const StyledNovaTec = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 0px 1rem;

  .containerNovaTec {
    background-color: var(--grey-3);
    margin: 0 auto;
    width: 100%;

    max-width: 500px;
    border-radius: 4px;

    div {
      display: flex;
      background-color: var(--grey-2);
      justify-content: space-between;
      align-items: center;
      padding: 5px 1rem;
      border-radius: 4px 4px 0px 0px;
      height: 50px;

      h2 {
        font-size: 12px;
        line-height: 19.25px;
        font-weight: 700;
        color: var(--grey-0);
      }

      button {
        color: var(--grey-1);
        font-size: 16px;
        font-weight: 500;
        width: 20px;
        :hover {
          color: var(--grey-0);
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      padding: 1rem;

      input {
        height: 38px;
        background-color: var(--grey-2);
        border: none;
        border: solid 1px var(--grey-1);
        padding: 0px 13px;
        border-radius: 4px;
        color: var(--grey-0);
        transition: 200ms;
        :focus {
          border: solid 0.1px var(--grey-0);
          outline: none;
        }
      }
      select {
        height: 38px;
        background-color: var(--grey-2);
        border: solid 1px var(--grey-1);
        padding: 0px 13px;
        border-radius: 4px;
        color: var(--grey-1);
        transition: 200ms;
        :focus {
          border: solid 0.1px var(--grey-0);
          outline: none;
        }
      }

      label {
        font-size: 12px;
        font-weight: 400;
        line-height: 17.59px;
        color: var(--grey-0);
      }

      button {
        height: 38px;
        background-color: var(--color-primary);
        padding: 0px 16px;
        width: 100%;
        color: var(--grey-0);

        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
      }
    }
  }
`;
