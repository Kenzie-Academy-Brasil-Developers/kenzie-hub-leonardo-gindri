import styled from "styled-components";

export const DashbaordPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 72px;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 1rem;

    button {
      height: 32px;
      background-color: var(--grey-3);
      padding: 0px 16px;
    }
  }

  .divsorias {
    border-bottom: 1px solid var(--grey-3);
    width: 100%;
    height: 1px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 1rem;
    max-width: 1000px;
    padding: 0px 1rem;
    gap: 1rem;
    width: 100%;

    .headerContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .addTecBtn {
        width: 32px;
        height: 32px;
        background-color: var(--grey-3);
        color: white;
        font-size: 20px;
        font-weight: 700;
      }
      h2 {
        font-size: 16px;
        font-weight: 600;
        line-height: 18px;
        color: var(--grey-0);
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    padding: 0px 1rem;
    height: 118px;
    width: 100%;

    .infoUser {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      h1 {
        color: var(--grey-0);
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
      }

      span {
        color: var(--grey-1);
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
      }
    }

    @media (min-width: 450px) {
      .infoUser {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  .containerTecnologias {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 0px 1rem;
    border-radius: 4px;
    padding: 1rem;
    gap: 1rem;
    background-color: var(--grey-2);
  }
`;
