import { StyledNovaTec } from "./style";

export default function NovaTecnologia() {
  return (
    <StyledNovaTec>
      <div className="containerNovaTec">
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button>X</button>
        </div>
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" />
          <label htmlFor="status">Selecionar status</label>
          <select name="" id="">
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediario</option>
            <option value="avançado">Avançado</option>
          </select>
          <button>Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledNovaTec>
  );
}
