import {React, Component} from 'react';
class Cabecalho extends Component {
    render(){
    return (
        <>
        <header>
            <div className="cabecalho conteudo">
                <h1 className="cabecalho__titulo">Cafél do <span>Abé</span></h1>
                <nav className="cabecalho__contato">
                    <button className="cabecalho__opcao" href='/#'>Loja Online</button>
                    <button className="cabecalho__opcao" href='/#'>Contato</button>
                </nav>
            </div>
        </header>
        </>
    )
    }
}
export default Cabecalho