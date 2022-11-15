import "../App.css";
import Logo from "./img/logo.png";

export default function Header(props) {

    let title = {
        display: 'none',
    }

    let busca = {
        width: '95%',
    }

    let menu = {
        display: 'flex',
    }

    let menu2 = {
        display: 'none',
    }

    let botoes = {
        display: 'none',
    }

    if (window.matchMedia(`(min-width: 760px)`).matches) {
        title = {
            display: 'block',
            width: '135px',            
        }
        busca = {
            width: '30%',
        }
        menu = {
            display: 'none',
        }
        botoes = {
            display: 'flex',
        }
        menu2 = {
            display: 'flex',
        }
    } else {
        title = {
            display: 'none',
        }
        busca = {
            width: '95%',
        }
        menu = {
            display: 'flex',
        }
        botoes = {
            display: 'none',
        }
        menu2 = {
            display: 'none',
        }
    }

    return (
        <>
            <header className='headerStyle'>
                <a className='logoStyle' href="##"><img className='nomeStyle' src={Logo} alt="logo da página" />
                    <h2 style={title}>Tech Store</h2>
                </a>
                <form className='formStyle' style={busca}>
                    <input className='buscarStyle' type="text" placeholder="Buscar produtos, marcas e muito mais..." />
                </form>
                <a style={menu} className='menuStyle' onClick={(e) => { e.preventDefault(); props.mudarEstado(!props.estado) }} href="##"><div id="menu">
                    <div className={props.estado ? "animarBarra1" : "retornarBarra1"}></div>
                    <div className={props.estado ? "animarBarra2" : "retornarBarra2"}></div>
                    <div className={props.estado ? "animarBarra3" : "retornarBarra3"}></div>
                </div></a>
                <div style={botoes} className='containerLinks'>
                    <a href="##">
                        <span className='links'>
                            <svg width="14" height="14" viewBox="0 0 36 36" xmlns="https://www.w3.org/2000/svg" className="Icon"><path d="M9 8.52632C9 13.2272 13.038 17.0526 18 17.0526C22.962 17.0526 27 13.2272 27 8.52632C27 3.82547 22.962 0 18 0C13.038 0 9 3.82547 9 8.52632ZM34 36H36V34.1053C36 26.7935 29.718 20.8421 22 20.8421H14C6.28 20.8421 0 26.7935 0 34.1053V36H34Z" fill="#333"></path></svg>
                            Minha conta
                        </span>
                    </a>
                    <a href="##">
                        <span className='links'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data-fill Icon" viewBox="0 0 16 16"><path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" /><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" /></svg>
                            Meus dados
                        </span>
                    </a>
                    <a href="##">
                        <span className='links'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill Icon" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" /></svg>
                            Minhas compras
                        </span>
                    </a>
                </div>
                <a href="##"><div>
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17h14c.278 0 .5.223.5.5s-.222.5-.5.5h-14c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-1-4h16c.278 0 .5.223.5.5s-.222.5-.5.5h-16c-.276 0-.5-.223-.5-.5s.224-.5.5-.5zm-9-8c-.653 0-.67 1 0 1h3.6c.078.346.64 2.81 1.312 5.736.717 3.126 1.452 7.32 1.606 7.893.132.494.255 1.055.62 1.544.362.488 1 .826 1.862.826h16c.86 0 1.5-.338 1.863-.826.364-.49.487-1.05.62-1.545.265-.993 1.62-6.944 1.89-7.952.152-.566.202-1.156.022-1.69-.18-.534-.72-.988-1.395-.988h-20c-.653 0-.66 1 0 1h20c.325 0 .366.07.447.31.08.238.076.674-.04 1.108-.267.992-1.62 6.945-1.89 7.953-.135.506-.262.945-.456 1.206-.194.262-.42.424-1.06.424h-16c-.64 0-.866-.162-1.06-.424-.195-.26-.322-.7-.458-1.205-.114-.426-.88-4.732-1.595-7.856-.717-3.125-1.4-6.125-1.4-6.125C4.938 5.16 4.735 5 4.5 5zm23 18c-1.373 0-2.5 1.125-2.5 2.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S24.877 23 23.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5zm-12-1C10.128 23 9 24.125 9 25.5s1.127 2.5 2.5 2.5c1.376 0 2.5-1.125 2.5-2.5S12.877 23 11.5 23zm0 1c.836 0 1.5.666 1.5 1.5s-.664 1.5-1.5 1.5c-.833 0-1.5-.666-1.5-1.5s.667-1.5 1.5-1.5z" /></svg>
                    <div className='notification'>2</div>
                </div></a>
            </header>
            <nav className='menu2' style={menu2}>
                <h2>Olá! Faça seu login.</h2>
                <div>
                    <a className="m-tb-5" href="##">Login</a>
                    <a className="m-tb-5" href="##">Cadastro</a>
                </div>
            </nav>
        </>
    )
}