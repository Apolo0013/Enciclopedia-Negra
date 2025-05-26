import './conteinercards.css'
import Card from './card.jsx'


function ConteinerCards(props) {
    return (
        <main ref={props.refe}>
            <Card letra="A" add={props.add} fecha={props.fecha}></Card>
            <Card letra="B"></Card>
            <Card letra="C"></Card>
            <Card letra="D"></Card>
            <Card letra="E"></Card>
            <Card letra="F"></Card>
            <Card letra="G"></Card>
            <Card letra="H"></Card>
            <Card letra="I"></Card>
            <Card letra="J"></Card>
            <Card letra="K"></Card>
            <Card letra="L"></Card>
            <Card letra="M"></Card>
            <Card letra="N"></Card>
            <Card letra="O"></Card>
            <Card letra="P"></Card>
            <Card letra="Q"></Card>
            <Card letra="R"></Card>
            <Card letra="S"></Card>
            <Card letra="T"></Card>
            <Card letra="U"></Card>
            <Card letra="V"></Card>
            <Card letra="W"></Card>
            <Card letra="X"></Card>
            <Card letra="Y"></Card>
            <Card letra="Z"></Card>
        </main>
    )
}

export default ConteinerCards