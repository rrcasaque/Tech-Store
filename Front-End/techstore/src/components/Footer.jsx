export default function Footer(){
    return(
        <>
            <footer className="footerContainer">
                <section className="news">
                    <div>
                        <h2>TechStore News</h2>
                        <p>Receba nossas ofertas</p>
                    </div>
                    <form>
                        <input type="text" placeholder="Insira seu nome"/>
                        <input type="email" placeholder="Insira seu e-mail"/>
                        <button onMouseOver={(e)=>{e.target.style.cursor="pointer"}}>Cadastrar</button>
                    </form>
                </section>
            </footer>
        </>
    )
}