
import { Navigate, Route, Routes } from "react-router-dom";
import Entrada from "./componentes/entrada";
import ConteinerCards from "./componentes/conteinercards";
import ConteinerArtista from "./componentes/Artista/conteinerartista";
import Sobre from './componentes/sobre'
import Jogo from './componentes/jogo_memoria/jogo_da_memoria'
import dadosinfo from './dados.json'
import { MeuContexto } from "./Context";
//imagens dos artista e obras pae
//abdias
import imgfotoabdias from './img/artista/Abdias/abdias.webp'
import imgcardabdias from './img/artista/Abdias/abdias_card.webp'
import imgobra1obid from './img/artista/Abdias/1.webp'
import imgobra2obid from './img/artista/Abdias/2.webp'

//Arthur_Timótheo_da_Costa
import imgfotoarthur from './img/artista/Arthur_Timótheo_da_Costa/Arthur_timotheo.webp'
import imgcardarthur from './img/artista/Arthur_Timótheo_da_Costa/arthur Timótheo da Costa_card.webp'
import imgobra1arthur from './img/artista/Arthur_Timótheo_da_Costa/1.webp'
import imgobra2arthur from './img/artista/Arthur_Timótheo_da_Costa/2.webp'
//Benenito
import imgfotobenedito from './img/artista/Benedito José Tobias/foto.webp'
import imgcardbenedito from './img/artista/Benedito José Tobias/foto_card.webp'
import imgobra1benedito from './img/artista/Benedito José Tobias/1.webp'
import imgobra2benedito from './img/artista/Benedito José Tobias/2.webp'

//Bruno
import imgfotobruno from './img/artista/Bruno Baptistelli/foto.webp'
import imgcardbruno from './img/artista/Bruno Baptistelli/foto_card.webp'
import imgobra1bruno from './img/artista/Bruno Baptistelli/1.webp'
import imgobra2bruno from './img/artista/Bruno Baptistelli/2.webp'

//Clara Nunes
import imgfotoChica from './img/artista/Chica Xavier/Chica Xavier.webp'
import imgcardChica from './img/artista/Chica Xavier/Chica Xavier_card.webp'
import imgobra1Chica from './img/artista/Chica Xavier/1.jpeg'
import imgobra2Chica from './img/artista/Chica Xavier/2.jpeg'

//Caetano Dias
import imgfotoConceicao from './img/artista/Conceição Evaristo/Conceição Evaristo.webp'
import imgcardConceicao from './img/artista/Conceição Evaristo/Conceição Evaristo_card.webp'
import imgobra1Conceicao from './img/artista/Conceição Evaristo/Ponciá Vicêncio1.png'
import imgobra2Conceicao from './img/artista/Conceição Evaristo/Becos da Memória2.png'

//Dalton Paula
import imgfotoDalton from './img/artista/Dalton Paula/dalton.webp'
import imgcardDalton from './img/artista/Dalton Paula/Dalton Paula_card.webp'
import imgobra1Dalton from './img/artista/Dalton Paula/1.webp'
import imgobra2Dalton from './img/artista/Dalton Paula/2.webp'

//Djavan
import imgfotoDjavan from './img/artista/Djavan/djava.webp'
import imgcardDjavan from './img/artista/Djavan/Djavan_card.webp'
import imgobra1Djavan from './img/artista/Djavan/1.webp'
import imgobra2Djavan from './img/artista/Djavan/2.webp'

//Estêvão Silva
import imgfotoEstêvão from './img/artista/Estêvão Silva/estevao.webp'
import imgcardEstêvão from './img/artista/Estêvão Silva/Estêvão Silva_card.webp'
import imgobra1Estêvão from './img/artista/Estêvão Silva/1.webp'
import imgobra2Estêvão from './img/artista/Estêvão Silva/2.webp'

//Emanoel Alves de Araújo
import imgfotoEmanoel from './img/artista/Emanoel Alves de Araújo/emanoel-araujo.webp'
import imgcardEmonoel from './img/artista/Emanoel Alves de Araújo/Emanoel Alves de Araújo_card.webp'
import imgobra1Emanoel from './img/artista/Emanoel Alves de Araújo/1.webp'
import imgobra2Emanoel from './img/artista/Emanoel Alves de Araújo/2.webp'

//Antônio Firmino Monteiro
import imgfotoAntônio from './img/artista/Firmino Monteiro/Firmino Monteiro.webp'
import imgcardAntônio from './img/artista/Firmino Monteiro/Firmino Monteiro_card.webp'
import imgobra1Antônio from './img/artista/Firmino Monteiro/1.webp'
import imgobra2Antônio from './img/artista/Firmino Monteiro/2.webp'

//Raimundo Fagner Cândido Lopes
import imgfotoFabiana from './img/artista/Fabiana Cozza/Fabiana Cozza.webp'
import imgcardFabiana from './img/artista/Fabiana Cozza/Fabiana Cozza_card.webp'
import imgobra1Fabiana from './img/artista/Fabiana Cozza/1.jpeg'
import imgobra2Fabiana from './img/artista/Fabiana Cozza/2.jpg'

//Gerson King Combo
import imgfotoGerson from './img/artista/Gerson King Combo/Gerson King Combo.webp'
import imgcardGenso from './img/artista/Gerson King Combo/Gerson King Combo_card.webp'
import imgobra1Gerson from './img/artista/Gerson King Combo/1.webp'
import imgobra2Gerson from './img/artista/Gerson King Combo/2.webp'

//Gal Costa
import imgfotoGil from './img/artista/Gilberto Gil/Gilberto Gil.webp'
import imgcardGil from './img/artista/Gilberto Gil/Gilberto Gil_card.webp'
import imgobra1Gil from './img/artista/Gilberto Gil/1.webp'
import imgobra2Gil from './img/artista/Gilberto Gil/2.webp'

//Horácio Hora
import imgfotoHorácio from './img/artista/Horácio Hora/Horácio Hora.webp'
import imgcardHorácio from './img/artista/Horácio Hora/Horácio Hora_card.webp'
import imgobra1Horácio from './img/artista/Horácio Hora/1.webp'
import imgobra2Horácio from './img/artista/Horácio Hora/2.webp'

//Helen Mirren
import imgfotoHelena from './img/artista/Helena Theodoro/Helena Theodoro.webp'
import imgcardHelena from './img/artista/Helena Theodoro/Helena Theodoro_card.webp'
import imgobra1Helena from './img/artista/Helena Theodoro/1.webp'
import imgobra2Helena from './img/artista/Helena Theodoro/2.webp'

//Ingrid Silva
import imgfotoIngrid from './img/artista/Ingrid Silva/Ingrid-Silva.webp'
import imgcardIngrid from './img/artista/Ingrid Silva/Ingrid Silva_card.webp'
import imgobra1Ingrid from './img/artista/Ingrid Silva/1.webp'
import imgobra2Ingrid from './img/artista/Ingrid Silva/2.webp'

//Iracema de Alencar
import imgfotoIlea from './img/artista/Iléa Ferraz/Iléa Ferraz.webp'
import imgcardIlea from './img/artista/Iléa Ferraz/Iléa Ferraz_card.webp'
import imgobra1Ilea from './img/artista/Iléa Ferraz/1.webp'
import imgobra2Ilea from './img/artista/Iléa Ferraz/2.webp'

//Jean-Michel Basquiat
import imgfotojack from './img/artista/Jackson do Pandeiro/GJackson do Pandeiro.webp'
import imgcardjack from './img/artista/Jackson do Pandeiro/GJackson do Pandeiro_card.webp'
import imgobra1jack from './img/artista/Jackson do Pandeiro/1.webp'
import imgobra2jack from './img/artista/Jackson do Pandeiro/2.webp'

//João Timótheo da Costa
import imgfotoJoão from './img/artista/João Timótheo da Costa/João Timótheo da Costa.webp'
import imgcardJoão from './img/artista/João Timótheo da Costa/João Timótheo da Costa_card.webp'
import imgobra1João from './img/artista/João Timótheo da Costa/1.webp'
import imgobra2João from './img/artista/João Timótheo da Costa/2.webp'

//Kehinde Wiley
import imgfotoKehinde from './img/artista/Kehinde Wiley/Kehinde Wiley.webp'
import imgcardKehinde from './img/artista/Kehinde Wiley/Kehinde Wiley_card.webp'
import imgobra1Kehinde from './img/artista/Kehinde Wiley/1.webp'
import imgobra2Kehinde from './img/artista/Kehinde Wiley/2.webp'

//Kika Carvalho
import imgfotoKika from './img/artista/Kika Carvalho/Kika Carvalho.webp'
import imgcardKika from './img/artista/Kika Carvalho/Kika Carvalho_card.webp'
import imgobra1Kika from './img/artista/Kika Carvalho/1.webp'
import imgobra2Kika from './img/artista/Kika Carvalho/2.webp'

//Liniker de Barros Ferreira Campos
import imgfotoLiniker from './img/artista/Liniker de Barros Ferreira Campos/Liniker de Barros Ferreira Campos.webp'
import imgcardLiniker from './img/artista/Liniker de Barros Ferreira Campos/Liniker de Barros Ferreira Campos_card.webp'
import imgobra1Liniker from './img/artista/Liniker de Barros Ferreira Campos/1.webp'
import imgobra2Liniker from './img/artista/Liniker de Barros Ferreira Campos/2.webp'

//Lourival Cuquinha
import imgfotolelia from './img/artista/Lélia Gonzalez/img.webp'
import imgcardleila from './img/artista/Lélia Gonzalez/Lélia Gonzalez_card.webp'
import imgobra1lelia from './img/artista/Lélia Gonzalez/1.webp'
import imgobra2lelia from './img/artista/Lélia Gonzalez/2.webp'

//Maria Auxiliadora Lara Barcelos
import imgfotoMestre from './img/artista/Mestre Didi/Mestre Didi.webp'
import imgcardMestre from './img/artista/Mestre Didi/Mestre Didi_card.webp'
import imgobra1Mestre from './img/artista/Mestre Didi/1.webp'
import imgobra2Mestre from './img/artista/Mestre Didi/2.webp'

//Moisés Patrício
import imgfotoMoisés from './img/artista/Moisés Patrício/Moisés Patrício.webp'
import imgcardMoisés from './img/artista/Moisés Patrício/Moisés Patrício_card.webp'
import imgobra1Moisés from './img/artista/Moisés Patrício/1.webp'
import imgobra2Moisés from './img/artista/Moisés Patrício/2.webp'

//Nelson Mandela
import imgfotoNeusa from './img/artista/Neusa Santos Souza/Neusa Santos Souza.webp'
import imgcardNeusa from './img/artista/Neusa Santos Souza/Neusa Santos Souza_card.webp'
import imgobra1Neusa from './img/artista/Neusa Santos Souza/1.webp'
import imgobra2Neusa from './img/artista/Neusa Santos Souza/2.webp'

//Nádia Taquary
import imgfotoNádia from './img/artista/Nádia Taquary/Nádia Taquary.webp'
import imgcardNádia from './img/artista/Nádia Taquary/Nádia Taquary_card.webp'
import imgobra1Nádia from './img/artista/Nádia Taquary/1.webp'
import imgobra2Nádia from './img/artista/Nádia Taquary/2.webp'

//Oga Mendonça
import imgfotoOga from './img/artista/Oga Mendonça/Oga Mendonça.webp'
import imgcardOga from './img/artista/Oga Mendonça/Oga Mendonça_card.webp'
import imgobra1Oga from './img/artista/Oga Mendonça/1.webp'
import imgobra2Oga from './img/artista/Oga Mendonça/2.webp'

//Omar Blondin Diop
import imgfotoOmar from './img/artista/Omar Blondin Diop/Omar Blondin Diop.webp'
import imgcardOmar from './img/artista/Omar Blondin Diop/Omar Blondin Diop_card.webp'
import imgobra1Omar from './img/artista/Omar Blondin Diop/1.webp'
import imgobra2Omar from './img/artista/Omar Blondin Diop/2.webp'

//Paulo Nazareth
import imgfotoPaulo from './img/artista/Paulo Nazareth/Paulo Nazareth.webp'
import imgcardPaulo from './img/artista/Paulo Nazareth/Paulo Nazareth_card.webp'
import imgobra1Paulo from './img/artista/Paulo Nazareth/1.webp'
import imgobra2Paulo from './img/artista/Paulo Nazareth/2.webp'

//Panmela Castro
import imgfotoPreta from './img/artista/Preta Ferreira/Preta Ferreira.webp'
import imgcardPreta from './img/artista/Preta Ferreira/Preta Ferreira_card.webp'
import imgobra1Preta from './img/artista/Preta Ferreira/1.jpeg'
import imgobra2Preta from './img/artista/Preta Ferreira/2.jpeg'

//Quinho
import imgfotoQuinho from './img/artista/Quinho/Quinho.webp'
import imgcardQuinho from './img/artista/Quinho/Quinho_card.webp'
import imgobra1Quinho from './img/artista/Quinho/1.webp'
import imgobra2Quinho from './img/artista/Quinho/2.webp'

//Quelynah
import imgfotoQuelynah from './img/artista/quelynah/quelynah.webp'
import imgcardQuelynah from './img/artista/quelynah/Quelynah_card.webp'
import imgobra1Quelynah from './img/artista/quelynah/1.webp'
import imgobra2Quelynah from './img/artista/quelynah/2.webp'

//Rosana Paulino
import imgfotoRosana from './img/artista/Rosana Paulino/Rosana Paulino.webp'
import imgcardRosana from './img/artista/Rosana Paulino/Rosana Paulino_card.webp'
import imgobra1Rosana from './img/artista/Rosana Paulino/1.webp'
import imgobra2Rosana from './img/artista/Rosana Paulino/2.webp'

//Robinho Santana
import imgfotoRobinho from './img/artista/Robinho Santana/Robinho Santana.webp'
import imgcardRobinho from './img/artista/Robinho Santana/Robinho Santana_card.webp'
import imgobra1Robinho from './img/artista/Robinho Santana/1.webp'
import imgobra2Robinho from './img/artista/Robinho Santana/2.webp'

//Solange Almeida
import imgfotoSobotage from './img/artista/Sabotage/Sabotage.webp'
import imgcardSobotage from './img/artista/Sabotage/Sabotage_card.webp'
import imgobra1Sobotage from './img/artista/Sabotage/1.jpeg'
import imgobra2Sobotage from './img/artista/Sabotage/2.jpeg'

//Sérgio Vaz
import imgfotoSueli from './img/artista/Sueli Carneiro/img.webp'
import imgcardSueli from './img/artista/Sueli Carneiro/Sueli Carneiro_card.webp'
import imgobra1Sueli from './img/artista/Sueli Carneiro/1.jpeg'
import imgobra2Sueli from './img/artista/Sueli Carneiro/2.jpeg'

//Tia Ciata
import imgfotoTia from './img/artista/Tia Ciata/Tia Ciata.webp'
import imgcardTia from './img/artista/Tia Ciata/Tia Ciata_card.webp'
import imgobra1Tia from './img/artista/Tia Ciata/1.webp'
import imgobra2Tia from './img/artista/Tia Ciata/2.webp'

//Tiago de Mello
import imgfotoTatau from './img/artista/Tatau/Tatau.webp'
import imgcardTatau from './img/artista/Tatau/Tatau.webp'
import imgobra1Tatau from './img/artista/Tatau/1.webp'
import imgobra2Tatau from './img/artista/Tatau/2.webp'

//Úrsula de Jesus
import imgfotoÚrsula from './img/artista/Úrsula de Jesus/Úrsula de Jesus.webp'
import imgcardÚrsula from './img/artista/Úrsula de Jesus/Úrsula de Jesus_card.webp'
import imgobra1Úrsula from './img/artista/Úrsula de Jesus/1.webp'
import imgobra2Úrsula from './img/artista/Úrsula de Jesus/2.webp'

//Ubirajara Silva
import imgfotoUrias from './img/artista/Urias Reis/Lorena Urias Martins da Silva.webp'
import imgcardUrias from './img/artista/Urias Reis/Urias_card.webp'
import imgobra1Urias from './img/artista/Urias Reis/1.jpeg'
import imgobra2Urias from './img/artista/Urias Reis/2.jpeg'

//Virgínia Rodrigues
import imgfotoVirgínia from './img/artista/Virgínia Rodrigues/Virgínia Rodrigues.webp'
import imgcardVirgínia from './img/artista/Virgínia Rodrigues/Virgínia Rodrigues_card.webp'
import imgobra1Virgínia from './img/artista/Virgínia Rodrigues/1.webp'
import imgobra2Virgínia from './img/artista/Virgínia Rodrigues/2.webp'

//Vicente Ferreira da Silva
import imgfotoVl from './img/artista/Virgínia Leone Bicudo/Virgínia Leone Bicudo.webp'
import imgcardVl from './img/artista/Virgínia Leone Bicudo/Virgínia Leone Bicudo_card.webp'
import imgobra1Vl from './img/artista/Virgínia Leone Bicudo/1.jpeg'
import imgobra2Vl from './img/artista/Virgínia Leone Bicudo/2.jpeg'

//Wilson Tibério
import imgfotoWilson from './img/artista/Wilson Tibério/Wilson Tibério.jpeg'
import imgcardWilson from './img/artista/Wilson Tibério/Wilson Tibério_card.webp'
import imgobra1Wilson from './img/artista/Wilson Tibério/1.jpeg'
import imgobra2Wilson from './img/artista/Wilson Tibério/2.jpeg'

//Waly Salomão
import imgfotoWanda from './img/artista/Wanda Chase da Silva/Wanda Chase da Silva.webp'
import imgcardWanda from './img/artista/Wanda Chase da Silva/Wanda Chase_card.webp'
import imgobra1Wanda from './img/artista/Wanda Chase da Silva/1.jpeg'
import imgobra2Wanda from './img/artista/Wanda Chase da Silva/2.jpeg'

//Xica da Silva 
import imgfotoXica from './img/artista/Xica da Silva/Xica da Silva.webp'
import imgcardXica from './img/artista/Xica da Silva/Xica da Silva_card.webp'
import imgobra1Xica from './img/artista/Xica da Silva/1.webp'
import imgobra2Xica from './img/artista/Xica da Silva/2.webp'

//Xangô da Mangueira
import imgfotoXangô from './img/artista/Xangô da Mangueira/Xangô da Mangueira.webp'
import imgcardXangô from './img/artista/Xangô da Mangueira/Xangô da Mangueira_card.webp'
import imgobra1Xangô from './img/artista/Xangô da Mangueira/1.webp'
import imgobra2Xangô from './img/artista/Xangô da Mangueira/2.webp'

//Yuri de Souza
import imgfotoYza from './img/artista/Yzalú/Yzalú.webp'
import imgcardYza from './img/artista/Yzalú/Yzalú_card.webp'
import imgobra1Yza from './img/artista/Yzalú/1.webp'
import imgobra2Yza from './img/artista/Yzalú/2.webp'

//Mãe Stella de Oxóssi
import imgfotoMãe from './img/artista/Y Mãe Stella de Oxóssi/Mãe Stella.webp'
import imgcardMãe from './img/artista/Y Mãe Stella de Oxóssi/Mãe Stella_card.webp'
import imgobra1Mãe from './img/artista/Y Mãe Stella de Oxóssi/1.webp'
import imgobra2Mãe from './img/artista/Y Mãe Stella de Oxóssi/2.webp'

//Zózimo Bulbul
import imgfotoZózimo from './img/artista/Zózimo Bulbul/Zózimo Bulbul.webp'
import imgcardZózimo from './img/artista/Zózimo Bulbul/Zózimo Bulbul_card.webp'
import imgobra1Zózimo from './img/artista/Zózimo Bulbul/1.webp'
import imgobra2Zózimo from './img/artista/Zózimo Bulbul/2.webp'

//Zezé Motta
import imgfotoZezé from './img/artista/Zezé Motta/Zezé Motta.webp'
import imgcardZezé from './img/artista/Zezé Motta/Zezé Motta_card.webp'
import imgobra1Zezé from './img/artista/Zezé Motta/1.webp'
import imgobra2Zezé from './img/artista/Zezé Motta/2.webp'
import Pesquisa from "./componentes/pesquisa";



function AppRotas() {
    const dadosimg = {
        A:
        //artista com A pae
        {
            artista1:
            {
                foto: imgfotoabdias,
                card: imgcardabdias,
                obras: [imgobra1obid, imgobra2obid]
            },
            artista2:
            {
                foto: imgfotoarthur,
                card: imgcardarthur,
                obras: [imgobra1arthur, imgobra2arthur]
            }
        },
        B: {
            artista1: {
                foto: imgfotobruno,
                card: imgcardbruno,
                obras: [imgobra1bruno, imgobra2bruno]
            },
            artista2: {
                foto: imgfotobenedito,
                card: imgcardbenedito,
                obras: [imgobra1benedito, imgobra2benedito]
            }
        },
        C: {
            artista1: {
                foto: imgfotoChica,
                card: imgcardChica,
                obras: [imgobra1Chica, imgobra2Chica]
            },
            artista2: {
                foto: imgfotoConceicao,
                card: imgcardConceicao,
                obras: [imgobra1Conceicao, imgobra2Conceicao]
            }
        },
        D: {
            artista1: {
                foto: imgfotoDalton,
                card: imgcardDalton,
                obras: [imgobra1Dalton, imgobra2Dalton]
            },
            artista2: {
                foto: imgfotoDjavan,
                card: imgcardDjavan,
                obras: [imgobra1Djavan, imgobra2Djavan]
            }
        },
        E: {
            artista1: {
                foto: imgfotoEstêvão,
                card: imgcardEstêvão,
                obras: [imgobra1Estêvão, imgobra2Estêvão]
            },
            artista2: {
                foto: imgfotoEmanoel,
                card: imgcardEmonoel,
                obras: [imgobra1Emanoel, imgobra2Emanoel]
            }
        },
        F: {
            artista1: {
                foto: imgfotoAntônio,
                card: imgcardAntônio,
                obras: [imgobra1Antônio, imgobra2Antônio]
            },
            artista2: {
                foto: imgfotoFabiana,
                card: imgcardFabiana,
                obras: [imgobra1Fabiana, imgobra2Fabiana]
            }
        },
        G: {
            artista1: {
                foto: imgfotoGerson,
                card: imgcardGenso,
                obras: [imgobra1Gerson, imgobra2Gerson]
            },
            artista2: {
                foto: imgfotoGil,
                card: imgcardGil,
                obras: [imgobra1Gil, imgobra2Gil]
            }
        },
        H: {
            artista1: {
                foto: imgfotoHorácio,
                card: imgcardHorácio,
                obras: [imgobra1Horácio, imgobra2Horácio]
            },
            artista2: {
                foto: imgfotoHelena,
                card: imgcardHelena,
                obras: [imgobra1Helena, imgobra2Helena]
            }
        },
        I: {
            artista1: {
                foto: imgfotoIngrid,
                card: imgcardIngrid,
                obras: [imgobra1Ingrid, imgobra2Ingrid]
            },
            artista2: {
                foto: imgfotoIlea,
                card: imgcardIlea,
                obras: [imgobra1Ilea, imgobra2Ilea]
            }
        },
        J: {
            artista1: {
                foto: imgfotojack,
                card: imgcardjack,
                obras: [imgobra1jack, imgobra2jack]
            },
            artista2: {
                foto: imgfotoJoão,
                card: imgcardJoão,
                obras: [imgobra1João, imgobra2João]
            }
        },
        K: {
            artista1: {
                foto: imgfotoKehinde,
                card: imgcardKehinde,
                obras: [imgobra1Kehinde, imgobra2Kehinde]
            },
            artista2: {
                foto: imgfotoKika,
                card: imgcardKika,
                obras: [imgobra1Kika, imgobra2Kika]
            }
        },
        L: {
            artista1: {
                foto: imgfotoLiniker,
                card: imgcardLiniker,
                obras: [imgobra1Liniker, imgobra2Liniker]
            },
            artista2: {
                foto: imgfotolelia,
                card: imgcardleila,
                obras: [imgobra1lelia, imgobra2lelia]
            }
        },
        M: {
            artista1: {
                foto: imgfotoMestre,
                card: imgcardMestre,
                obras: [imgobra1Mestre, imgobra2Mestre]
            },
            artista2: {
                foto: imgfotoMoisés,
                card: imgcardMoisés,
                obras: [imgobra1Moisés, imgobra2Moisés]
            }
        },
        N: {
            artista1: {
                foto: imgfotoNeusa,
                card: imgcardNeusa,
                obras: [imgobra1Neusa, imgobra2Neusa]
            },
            artista2: {
                foto: imgfotoNádia,
                card: imgcardNádia,
                obras: [imgobra1Nádia, imgobra2Nádia]
            }
        },
        O: {
            artista1: {
                foto: imgfotoOga,
                card: imgcardOga,
                obras: [imgobra1Oga, imgobra2Oga]
            },
            artista2: {
                foto: imgfotoOmar,
                card: imgcardOmar,
                obras: [imgobra1Omar, imgobra2Omar]
            }
        },
        P: {
            artista1: {
                foto: imgfotoPaulo,
                card: imgcardPaulo,
                obras: [imgobra1Paulo, imgobra2Paulo]
            },
            artista2: {
                foto: imgfotoPreta,
                card: imgcardPreta,
                obras: [imgobra1Preta, imgobra2Preta]
            }
        },
        Q: {
            artista1: {
                foto: imgfotoQuinho,
                card: imgcardQuinho,
                obras: [imgobra1Quinho, imgobra2Quinho]
            },
            artista2: {
                foto: imgfotoQuelynah,
                card: imgcardQuelynah,
                obras: [imgobra1Quelynah, imgobra2Quelynah]
            }
        },
        R: {
            artista1: {
                foto: imgfotoRosana,
                card: imgcardRosana,
                obras: [imgobra1Rosana, imgobra2Rosana]
            },
            artista2: {
                foto: imgfotoRobinho,
                card: imgcardRobinho,
                obras: [imgobra1Robinho, imgobra2Robinho]
            }
        },
        S: {
            artista1: {
                foto: imgfotoSobotage,
                card: imgcardSobotage,
                obras: [imgobra1Sobotage, imgobra2Sobotage]
            },
            artista2: {
                foto: imgfotoSueli,
                card: imgcardSueli,
                obras: [imgobra1Sueli, imgobra2Sueli]
            }
        },
        T: {
            artista1: {
                foto: imgfotoTia,
                card: imgcardTia,
                obras: [imgobra1Tia, imgobra2Tia]
            },
            artista2: {
                foto: imgfotoTatau,
                card: imgcardTatau,
                obras: [imgobra1Tatau, imgobra2Tatau]
            }
        },
        U: {
            artista1: {
                foto: imgfotoÚrsula,
                card: imgcardÚrsula,
                obras: [imgobra1Úrsula, imgobra2Úrsula]
            },
            artista2: {
                card: imgcardUrias,
                foto: imgfotoUrias,
                obras: [imgobra1Urias, imgobra2Urias]
            }
        },
        V: {
            artista1: {
                foto: imgfotoVirgínia,
                card: imgcardVirgínia,
                obras: [imgobra1Virgínia, imgobra2Virgínia]
            },
            artista2: {
                foto: imgfotoVl,
                card: imgcardVl,
                obras: [imgobra1Vl, imgobra2Vl]
            }
        },
        W: {
            artista1: {
                foto: imgfotoWilson,
                card: imgcardWilson,
                obras: [imgobra1Wilson, imgobra2Wilson]
            },
            artista2: {
                foto: imgfotoWanda,
                card: imgcardWanda,
                obras: [imgobra1Wanda, imgobra2Wanda]
            }
        },
        X: {
            artista1: {
                foto: imgfotoXica,
                card: imgcardXica,
                obras: [imgobra1Xica, imgobra2Xica]
            },
            artista2: {
                foto: imgfotoXangô,
                card: imgcardXangô,
                obras: [imgobra1Xangô, imgobra2Xangô]
            }
        },
        Y: {
            artista1: {
                foto: imgfotoYza,
                card: imgcardYza,
                obras: [imgobra1Yza, imgobra2Yza]
            },
            artista2: {
                foto: imgfotoMãe,
                card: imgcardMãe,
                obras: [imgobra1Mãe, imgobra2Mãe]
            }
        },
        Z: {
            artista1: {
                foto: imgfotoZózimo,
                card: imgcardZózimo,
                obras: [imgobra1Zózimo, imgobra2Zózimo]
            },
            artista2: {
                foto: imgfotoZezé,
                card: imgcardZezé,
                obras: [imgobra1Zezé, imgobra2Zezé]
            }
        }
    }

    return (
        <MeuContexto.Provider value={{dadosimg, dadosinfo}}>
            <Routes>
                <Route path='/' element={<Navigate to='/home/' />}></Route>
                <Route path='/home/pesquisa/' element={<Pesquisa />}></Route>
                <Route path='/home/sobre-nós/' element={<Sobre/>}></Route>
                <Route path='/home/' element={<Entrada />}></Route>
                <Route path='/home/artistas/' element={<ConteinerCards />}></Route>
                <Route path='/home/artistas/artista/:id' element={<ConteinerArtista />}></Route>
                <Route path="/home/jogo/jogo-da-momoria/" element={<Jogo />}></Route>
                <Route path='*' element={<Navigate to='/home/'/>}></Route>
            </Routes>
        </MeuContexto.Provider>
    )
}

export default AppRotas