import styled from "styled-components";

export const ContainerRegister = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0px 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    height: 20px;
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

  .spanErro {
    font-size: 9.77px;
    font-weight: 400;
    color: var(--grey-0);
    width: 100%;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .divForm {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 1rem 1rem;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    width: 100%;
  }

  .btnVoltar {
    height: 31px;
    background-color: var(--grey-2);
    padding: 0px 16px;
    color: var(--grey-0);
  }

  .btnCadastrar {
    height: 38px;
    background-color: var(--color-primary-negative);
    padding: 0px 16px;
    width: 100%;
    color: var(--grey-0);
  }

  p {
    font-size: 9.74px;
    font-weight: 400;
    color: var(--grey-1);
    margin-top: 5px;
  }

  h2 {
    color: var(--grey-0);
    font-weight: 700;
    line-height: 22px;
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  span {
    font-size: 9.56px;
    font-weight: 400;
    line-height: 17.59px;
    color: var(--grey-1);
  }

  select {
    height: 38px;
    background-color: var(--grey-2);
    border: none;
    padding: 0px 13px;
    border-radius: 4px;
    color: var(--grey-1);
  }
`;
