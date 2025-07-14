import './aviso.css'

function Aviso({texto, FunNovamente}) {
    return (
        <div className="Aviso">
            <div>
                <h1>{texto}</h1>
                <button onClick={FunNovamente}>Tenta Novamente</button>
            </div>
        </div>
    )
}

export default Aviso