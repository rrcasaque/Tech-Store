import { useState } from "react";

export default function Conta(props) {

    const [readOnly, setReadOnly] = useState(true);

    const [inputStyle, setInputStyle] = useState({
        backgroundColor: '#132750',
        color: 'white',
    });

    const handleSetInput = () => {
        setInputStyle({
            backgroundColor: 'white',
            color: 'black',
        })
        setReadOnly(!readOnly);
    }

    return (
        <section id="conta" className="formDados">
            <div></div>
            <div>
                <h2>Informações da conta</h2>
                <form>
                    <div>
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Nome completo:" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="CPF:" />
                        <input style={inputStyle} readOnly={readOnly} type="date" placeholder="Data de nascimento:" />
                        <input style={inputStyle} readOnly={readOnly} type="email" placeholder="E-mail:" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Celular:" />
                        <input style={inputStyle} readOnly={readOnly} type="password" placeholder="Senha:" />
                    </div>                    
                    <div>
                        <button onClick={(e) => { e.preventDefault(); handleSetInput()}}>Alterar informações</button>
                        <button>Salvar alterações</button>
                    </div>
                </form>
            </div>
            <div></div>
        </section>
    )
}