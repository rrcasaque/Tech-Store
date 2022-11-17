import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Product from "./components/Product";
import axios from "axios";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {

  const designPadrao = () =>{
    document.querySelector(".productsSection").style.display = "block";        
    document.querySelector(".banner").style.display = "flex";
    document.querySelector(".menu2").style.marginTop = "1px";    
  }

  const designHide = () =>{
    document.querySelector(".productsSection").style.display = "none";        
    document.querySelector(".banner").style.display = "none";
    document.querySelector(".menu2").style.marginTop = "51px";
    document.querySelector("#login").style.display = "none";
    document.querySelector("#cadastro").style.display = "none";
  }  
  
  const home = () =>{
    designHide();
    designPadrao();
  }

  const login = () =>{            
    designHide();
    document.querySelector("#login").style.display = "flex";    
    document.querySelector(".menu2").style.marginTop = "0";        
  }

  const cadastro = () =>{        
    designHide();
    document.querySelector("#cadastro").style.display = "flex";
    document.querySelector(".menu2").style.marginTop = "0";    
  }

  const conta = () => {
    designHide();
    // document.querySelector("#conta").style.display = "flex";
  }

  const dados = () => {
    designHide();
    // document.querySelector("#dados").style.display = "flex";
  }

  const compras = () => {
    designHide();
    // document.querySelector("#compras").style.display = "flex";
  }

  const carrinho = () => {
    designHide();
    // document.querySelector("#carrinho").style.display = "flex";
  }

  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState({});

  return (
    <>          
      <Header estado={menu} mudarEstado={setMenu} padrao={home} logar={login} cadastrar={cadastro} conta={conta} dados={dados} compra={compras} carrinho={carrinho} />
      <Menu estado={menu} logar={login} cadastrar={cadastro} conta={conta} dados={dados} compras={compras} mudarEstado={window.matchMedia(`(min-width: 760px)`).matches?1:setMenu}/>
      <Banner/>
      <Loading estado={loading}/>
      <Login mudarPagina={cadastro}/>
      <Cadastro mudarPagina={login}/>
      {useEffect(() => {
        axios.get("http://192.168.15.3:4000")
          .then(res => {
            setProd(res);
            setLoading(false);
          })
          .catch(err => console.log(err))
      }, [])}

      {prod.data && (
        <section className="productsSection">
          {prod.data.map((e) => (<Product key={e.id} obj={e} />))}
        </section>
      )}      
      <Footer/>
    </>
  );
}