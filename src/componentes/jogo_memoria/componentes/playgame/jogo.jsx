import { useEffect, useRef, useState } from 'react';
import './jogo.css';
import Carta from './cartas.jsx';
import Menu from './menu.jsx';
import AvisoCom from './aviso.jsx';
import Botoes from './botoes.jsx';
import Escolher from '../EscolherDificuldade.jsx';
//imagens cads
import img1 from '../../img-jogo/img1.webp'
import img2 from '../../img-jogo/img2.webp'
import img3 from '../../img-jogo/img3.webp'
import img4 from '../../img-jogo/img4.webp'
import img5 from '../../img-jogo/img5.webp'
import img6 from '../../img-jogo/img6.webp'
import img7 from '../../img-jogo/img7.webp'
import img8 from '../../img-jogo/img8.webp'


function App({SetCon ,SetAvi, RefBg, tempo, tenta}) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function Deleta(array, index) {
        return array.filter((_, i) => i !== index)
    }


    function SorteaMatriz() {
        let numeros = [
            1, 1, 2, 2,
            3, 3, 4, 4,
            5, 5, 6, 6,
            7, 7, 8, 8
        ]
        let MatrizMemoria = []
        const max = numeros.length
        let indexsort = null
        for (let i = 0; i < max; i++) {
            if (numeros.length === 1) {
                indexsort = 0
            }
            else {
                indexsort = getRandomInt(0, numeros.length - 1)
            }

            let value = numeros[indexsort]
            let imagem = null

            switch (value) {
                case 1:
                    imagem = img1
                    break
                case 2:
                    imagem = img2
                    break
                case 3:
                    imagem = img3
                    break
                case 4:
                    imagem = img4
                    break
                case 5:
                    imagem = img5
                    break
                case 6:
                    imagem = img6
                    break
                case 7:
                    imagem = img7
                    break
                case 8:
                    imagem = img8
                    break
                default:
                    break
            }


            MatrizMemoria.push({value : value, img : imagem})
            numeros = Deleta(numeros, indexsort)
        }
        setcartas(MatrizMemoria)
    }

    function ReniciarJogo() {
        SetTenta(Number(tenta)) // zerando o numero de tentatvias pae
        setTimeout(() => {
            SorteaMatriz()

            setTimeout(RefConteinerGame.current.classList.remove("notoque") // removendo o notoque: class responsavel por tirar eventos e etc)
                , 2000)
        }, 1000) // sorteando uma matriz depois de um segundos
        EndGameVar.current = false // zerando a varriavel
        ReviarTodasAsCartas() // revirando todas as cartas pae
        ListCardTemp.current = [] // resetando a variavel que guardar os card.
        RefToquesValue.current = { // Variavel responsavel por manipular os click do usuario
            'toque1': { 'click': false, 'value': null, id: null },
            'toque2': { 'click': false, 'value': null, id: null }
        }
        quantidade_parencontrado.current = 0 // guardar a quantidade de acertos
        CardClickTime.current = false // variavel responsavel por controlar o loop.
        //removendo  a class notoque  de todos os cards pae
        for (const conteiner of RefListConteiner.current) {
            conteiner.classList.remove('notoque')
        }
    }


    function ReviarTodasAsCartas() {
        for (const card of RefListCards.current) {
            card.classList.remove('Back')
        }
    }


    function Toque(value, key, refcarta, refcartaConteiner) {
        //reseta variavel importante para o fucionamento dessa funcao
        function ResetarVariavelToque() {
            RefToquesValue.current = {
                'toque1': { 'click': false, 'value': null, id: null },
                'toque2': { 'click': false, 'value': null, id: null }
            }
            ListCardTemp.current = []
            ListConteinerTemp.current = []
        }

        //responsavel por coloca as carta no
        function RevirarCartas() {
            for (let conteiner of ListCardTemp.current) { // cards, tirando a class Back
                conteiner.classList.remove('Back')
            }
        }

        //Funcao que vai trata caso o usurio tenha ganhado pae.
        function UserWin() {
            RefConteinerGame.current.classList.add("toque")
            EndGameVar.current = true
            setTimeout(() => {
                EfeitoFinal("Vitoria!")
            }, 2000)
        }


        //subtraindo tentativas pae
        function SubtrairTentativas() {
            let tenta = stateTenta
            if (tenta === 1) {
                SetTenta('0')
                RefConteinerGame.current.classList.add("notoque")
                EndGameVar.current = true
                setTimeout(() => {
                    EfeitoFinal("⚠️ O número de tentativas foi excedido")
                }, 2000)
                return true
            }
            tenta--
            SetTenta(tenta)
            return false
        }


        // se a variavel tive o valores
        // true : jogo cabo, entao nao rode essa funcao
        // false : nao acarbou, arroche ai
        if (EndGameVar.current) return
        //CardClickTime: ele vai fala: olha cara, so vou chama a funcao responsavel pelo tempo quando o usuario clica em algum card.
        if (!CardClickTime.current) {
            CardClickTime.current = true // dando o valor para true, para evitar outros loops
            RefGetFunFilho.current.Loop(tempo) // chamandos a funcao 
        }
        
        // pegando o premeiro toque pae
        if (!RefToquesValue.current.toque1.click) {
            //()-----click-----()
            //true = sim ele ja foi clicado
            //false = ele nao foi clicado
            ////////////////////////////////////////
            //()-------value-------()
            //receber valores do algorismo ou seja numero (0,1,3,4,5,6,7...)
            //usado para verificar se os pares sao iguais ou nao.
            ////////////////////////////////////////
            //()-------id------()
            //receber um numero tambem, mas usada para verificar se o usuario clicou no mesmo card do toque1.
            RefToquesValue.current.toque1.click = true
            RefToquesValue.current.toque1.value = value
            RefToquesValue.current.toque1.id = key
            refcarta.current.classList.add('Back')
            //add a carta na lista temp
            ListCardTemp.current.push(refcarta.current)
            //add o conteiner da carta no lista tempo fds
            ListConteinerTemp.current.push(refcartaConteiner.current)

            return
        }

        //ei, se o segundo toque nao foi tocado e o o card anterior nao é esse, entao: true
        // pegando o segundo toque
        else if (!RefToquesValue.current.toque2.click && RefToquesValue.current.toque1.id !== key) {
            RefToquesValue.current.toque2.click = true
            RefToquesValue.current.toque2.value = value
            RefToquesValue.current.toque2.id = key
            refcarta.current.classList.add('Back')
            //add Card na lisa temp
            ListCardTemp.current.push(refcarta.current)
            //add o conteiner na lista temp
            ListConteinerTemp.current.push(refcartaConteiner.current)
        }
            
        // condicao que evitar o usuario escolha o mesmo cartao
        else if (RefToquesValue.current.toque1.id === key) {
            return
        }
        //condicao: ei cara voce acertou os pares pae
        if (RefToquesValue.current.toque1.value === RefToquesValue.current.toque2.value) {
            // desabilitando os card.
            for (const conteiner of ListConteinerTemp.current) {
                conteiner.classList.add('notoque')
            }

            quantidade_parencontrado.current++ // aqui ondem essa variavel entra em ação
            if (quantidade_parencontrado.current === 8) { // se tive 8 acertos entao o usuario ganhou pae
                EndGameVar.current = true
                UserWin()
                return
            }

            ResetarVariavelToque()
        }
        //errou pae
        else {
            //funcao que vai subtrair as tentavivas pae.
            //tambem ele retorna
            //true ou false
            //true : sim ele perdeu
            //false : ele nao perdeu, pode continua.
            const Perdeu = SubtrairTentativas()
            if (Perdeu) {
                return
            }
            RefConteinerGame.current.classList.add("notoque")
            setTimeout(() => {
                RevirarCartas()
                ResetarVariavelToque()
                setTimeout(() => RefConteinerGame.current.classList.remove("notoque"), 500)
            }, 1000)
        }
        
    }

    // efeito final
    // funcao: ele vai exbir um "aviso" para o usuario falando algo, no caso conteudo que tem no parametro "texto"
    function EfeitoFinal(texto) { // basicamente:
        RefGetFunFilho.current.TimeShow() // funcao que formato o time.
        RefConteinerGame.current.classList.add("notoque") // coloca a class "notoque" no 
        // conteiner principal, para nao ocorrer risco do fdp tocar em algo que nao deveria tocar/clica tanto faz.
        RefBg.current.classList.add('blur') // blur é bem literal, ele vai deixa tudo esbaçado/desfoque no fundo.
        SetAvi(<AvisoCom FunNovamente={() => RetirandoEfeitoFinal()} texto={texto} />) // chamando o componete AvisoCom.
    }


    function RetirandoEfeitoFinal() { // retirando tudo q esta a cima de mim.
        RefConteinerGame.current.classList.remove("notoque") // removendo a class notoque
        ReniciarJogo() // reniciando o jogo, tanto variavels e matrizes e etc.
        RefBg.current.classList.remove('blur') // retirnado o blur, deixa sem o desfoque
        SetAvi('') // state do aviso.    
    }


    const [cartasstate, setcartas] = useState([])
    const RefToquesValue = useRef({
        'toque1': { 'click' : false, 'value' : null, id : null},
        'toque2': { 'click' : false, 'value' : null, id : null}
    })
    //lista que vai guardar os dois cartao.
    //ele vao guardar as ref do cartao, ou seja, o responsavel por nois dizer que elementos entao asociado ao cartao, nos coloca as class das animação e ja era pae
    const ListCardTemp = useRef([])
    //lista temp conteiner
    const ListConteinerTemp = useRef([])
    // Número total de pares no jogo:
    // Como a matriz é 4x4 (16 cartas), temos 8 pares (16 / 2).
    // Se o jogador acertar todos os 8 pares, ele vence o jogo.
    const quantidade_parencontrado = useRef(0)
    //conteiner do jogo
    const RefConteinerGame = useRef()
    //menu
    const [stateTenta, SetTenta] = useState(Number(tenta))
    const RefGetFunFilho = useRef()
    //variavel falando q ele ja perdeu para evitar que ele toque.
    const EndGameVar = useRef(false)
    //Variavel de controle, o time começa quando o usuario aperta em algum card pae
    const CardClickTime = useRef(false)
    //useref pra pegar todas cartas
    const RefListCards = useRef([])
    //lista de conteiner
    const RefListConteiner = useRef([])
    useEffect(() => {
        SorteaMatriz()
    }, [])
    return (    
        <div className="conteinermain-wraper">
            {
                //tenta : Numero de tantaivas
                //ref : o ref que vai passa uma funcao para o pai
                //final : uma funcao que vai exbir o resultado final
                //EndGame : variavel que diz se o jogo acabou ou jogo
                //TempoExbir : variavel que tem como o tempo em segundos para formata e exbir no inicio.
            }
            <Menu tenta={stateTenta} ref={RefGetFunFilho} final={EfeitoFinal} EndGame={EndGameVar} TempoExbir={tempo}></Menu>
            <div className="conteinermain" ref={RefConteinerGame}>
                {
                    cartasstate.map((dic, i) => (
                        <Carta key={i} id={i} img={dic.img} value={dic.value} Toque={Toque}
                            RefGetCard={RefListCards}
                            RefGetConteinerCard={RefListConteiner}    
                        />
                    ))
                }
            </div>
            <Botoes cbhome={SetCon} cbloop={() => {
                RefConteinerGame.current.classList.add("notoque")
                //pq esta mudando a variaval para o valor true, aqui estou falando que o jogo terminou.
                //se voce esta reniciando o jogo o a funcao Reniciar, pq ta fazendo isso?
                //Porque: o loop do time so para quando ele é zerado == 00:00 ou essa variavel tem como valor true
                EndGameVar.current = true
                
                setTimeout(() => ReniciarJogo(), 2000)
            }}></Botoes>
        </div>
    )
}

export default App;
