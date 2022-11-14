import '../App.css';
// import { useState } from "react";

export default function Menu(props) {    

    const navStyle = {
        position: 'absolute',        
        top: '-235px',
        zIndex: 1,
        width: '100vw',
        backgroundColor: 'rgb(0 0 0 / 92%)',
        fontFamily: 'sans-serif',
        color: 'white',
        textAlign: 'center',
        padding: '15px 0',
    }

    const botaoStyle = {
        width: '75%',
        color: 'white',
        display: 'inline-block',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '25px',
        padding: '5px 0',
    }

    const h2Style = {
        fontSize: '30px',
        color: '#94d5ff',
    }

    const ulStyle = {
        fontSize: '18px',
        listStyle: 'none',
    }

    const aStyle = {
        textDecoration: 'none',
        color: 'white',
    }
    

    return (
        <nav style={navStyle} className={props.estado?"menuAberto":"menuFechado"}>
            <h2 style={h2Style}>Olá! Faça seu login.</h2>
            <ul style={ulStyle}>
                <a href="##" style={aStyle}><li className="m-tb-15">
                    <svg width="14" height="14" viewBox="0 0 36 36" fill="none" xmlns="https://www.w3.org/2000/svg" className="Icon"><path d="M9 8.52632C9 13.2272 13.038 17.0526 18 17.0526C22.962 17.0526 27 13.2272 27 8.52632C27 3.82547 22.962 0 18 0C13.038 0 9 3.82547 9 8.52632ZM34 36H36V34.1053C36 26.7935 29.718 20.8421 22 20.8421H14C6.28 20.8421 0 26.7935 0 34.1053V36H34Z" fill="#fff"></path></svg>
                    Minha conta
                </li></a>
                <a href="##" style={aStyle}><li className="m-tb-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data-fill Icon" viewBox="0 0 16 16"><path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"/></svg>
                    Meus dados
                </li></a>
                <a href="##" style={aStyle}><li className="m-tb-15">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill Icon" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" /></svg>
                    Minhas compras
                </li></a>
            </ul>
            <a className="m-tb-5 btn-l" style={botaoStyle} href="##">Login</a>
            <a className="m-tb-5 btn-c" style={botaoStyle} href="##">Cadastro</a>
        </nav>
    )
}