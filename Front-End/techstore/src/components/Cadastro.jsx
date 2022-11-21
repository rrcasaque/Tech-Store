export default function Cadastro(props) {
    return (
        <section id="cadastro">
            <div></div>
            <div>
                <h2>Faça seu Cadastro</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Nome completo:" />
                        <input type="text" placeholder="CPF:" />
                        <input type="date" placeholder="Data de nascimento:" />
                        <input type="email" placeholder="E-mail:" />
                        <input type="text" placeholder="Celular:" />
                        <input type="password" placeholder="Crie uma senha:" />
                    </div>
                    <div>
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Estado" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <div id="endereco">
                            <p>Tipo de endereço:</p>                            
                            <span><input type="radio" name="endType" value="1" />Casa</span>
                            <span><input type="radio" name="endType" value="1" />Trabalho</span>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Cadastrar</button>
                        <button type="reset">Limpar</button>
                    </div>
                </form>
                <div>
                    <h2>Já possui uma conta?</h2>
                    <a id="btnSO" href="##" onClick={(e) => { e.preventDefault(); props.mudarPagina()}}>Faça seu Login</a>
                </div>                
            </div>
            <div></div>
        </section>
    )
}