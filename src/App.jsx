/////////////////////////////////////////////////////////////////////
// Bom esse site foi desenvolvido por mim, Apolonio Guilherme Lima da Silva. Segundo ano do ensino medio. 14/07/2025 estou escrevendo isso.
// se foi dificil fazer esse site?: Sim e Nao
// eu aprendi bastante coisa com essa projeto, coisas sobre a programacao em si, projeto para eletiva da Escola Ana Julia, RN Natal, Nossa senhora da apresentacao.
// Tomara que eu esteja sentado em um PC vendo isso, depois de um dia de trabalho. Claro, na area da Programacao e etc.
/////////////////////////////////////////////////////////////////////
import { useRef } from 'react';
import './App.scss'
//compenentes
import AppRotas from './AppRotas';

function App() {
    //ref
    const RefConteinerCards = useRef()
    return (
        <div className="main" ref={RefConteinerCards}>
            <AppRotas></AppRotas>
        </div>
    )
}

export default App;