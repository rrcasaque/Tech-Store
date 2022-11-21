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
        <section id="dados"  className="formDados">
            <div></div>
            <div>
                <h2>Informações da conta</h2>
                <form>                    
                    <div>
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="CEP" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Estado" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Cidade" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Bairro" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Rua" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Número" />
                        <input style={inputStyle} readOnly={readOnly} type="text" placeholder="Complemento" />
                        <div id="endereco">
                            <p>Tipo de endereço:</p>
                            <span><input style={inputStyle} readOnly={readOnly} type="radio" name="endType" value="1" />Casa</span>
                            <span><input style={inputStyle} readOnly={readOnly} type="radio" name="endType" value="1" />Trabalho</span>
                        </div>
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