import { DashbaordPage } from "./style";
import logo from '../../../Images/logo.png'


export default function Dashboard(){
    return(
        <DashbaordPage>
            <header>
                <img src={logo} alt="" />
                <button>Sair</button>
            </header>
            <main>
                <div>
                    <h1>Olá, Samuel Leão</h1>
                    <span>Primeiro módulo (introdução ao FrontEnd)</span>
                </div>
            </main>
        </DashbaordPage>
    )

}