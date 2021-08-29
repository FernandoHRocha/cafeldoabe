import {React, Component} from 'react';
import logo from '../Assets/coffee_break.svg'
class Apresentacao extends Component {
    render(){
        return(
            <article className="apresentacao">
                <div className="conteudo">
                    <img src={logo} alt="Coffe Break"/>
                    <aside>
                        <h1>Café para acordar.</h1>
                        <h1>Café para animar.</h1>
                        <h1>Café para continuar.</h1>
                    </aside>
                </div>
            </article>
        )
    }
}

export default Apresentacao