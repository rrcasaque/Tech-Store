export default function Login(props) {
    return (
        <section id="login">
            <div></div>
            <div>
                <h2>Faça seu Login</h2>
                <form>
                    <input type="email" placeholder="Insira seu e-mail" />
                    <input type="password" placeholder="Insira sua senha" />
                    <button>Entrar</button>
                    <a href="##">Esqueci minha senha</a>
                </form>
                <div>
                    <h2>Não possui uma conta?</h2>
                    <a href="##" onClick={(e) => { e.preventDefault(); props.mudarPagina()}}>Cadastre-se</a>
                </div>
            </div>
        </section>
    )
}