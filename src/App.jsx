import { useRef} from 'react';
import './App.css'
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