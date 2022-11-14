// import Loading from "./components/Loading";
import Header from "./components/Header";
import Menu from "./components/Menu";
// import Banner from "./components/Banner";
import { useState } from "react";
// import axios from "axios";

export default function App() {

  const [menu,setMenu] = useState(null);  

  return (
    <>
      <Header estado={menu} mudarEstado={setMenu}/>
      <Menu estado={menu}/>      
      {/* <Banner/> */}
      {/* <Loading/> */}
    </>
  );
}