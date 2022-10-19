import { StyledNovaTec } from "./style";
import { TechContext } from "../../Contexts/TechContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function NovaTecnologia() {
  const { closeModal, CadastrarTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <StyledNovaTec>
      <div className="containerNovaTec">
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <form onSubmit={handleSubmit(CadastrarTech)}>
          <label htmlFor="nome">Nome</label>
          <input
            {...register("title")}
            type="text"
            placeholder="Nome da tecnologia"
          />
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")} name="" id="">
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediario</option>
            <option value="avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledNovaTec>
  );
}
