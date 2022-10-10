import styled from "styled-components";

export const ContainerLogin = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  padding: 0px 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  img {
    margin-bottom: 10px;
  }

  input {
    height: 38px;
    background-color: var(--grey-2);
    border: none;
    padding: 0px 13px;
    border-radius: 4px;
    color: var(--grey-0);
    :focus {
      border: solid 0.1px var(--grey-0);
      outline: none;
    }
  }

  h1 {
    color: var(--grey-0);
    font-size: 14.439px;
    font-weight: 700;
    line-height: 22px;
  }
  .div {
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 32px 18px;
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .spanInput {
    font-size: 9.77px;
    font-weight: 400;
    color: var(--grey-1);
    width: 100%;
  }
  .spanRegister {
    font-size: 9.77px;
    font-weight: 400;
    color: var(--grey-1);
  }

  .spanErro {
    font-size: 9.77px;
    font-weight: 400;
    color: var(--grey-0);
    width: 100%;
  }

  .registerBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    button {
      height: 38px;
      padding: 0px 22px;
      width: 100%;

      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: var(--grey-0);
      background-color: var(--grey-1);
      :hover {
        background-color: var(--grey-2);
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    button {
      height: 38px;
      padding: 0px 22px;
      width: 100%;

      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: var(--grey-0);
      background-color: var(--color-primary);
      :hover {
        background-color: var(--color-primary-focus);
      }
    }
  }
`;
