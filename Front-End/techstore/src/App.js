import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Product from "./components/Product";
import axios from "axios";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";

export default function App() {

  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState({});

  return (
    <>      
      <Header estado={menu} mudarEstado={setMenu} />
      <Menu estado={menu}/>
      <Banner/>
      <Loading estado={loading}/>
      
      {useEffect(() => {
        axios.get("http://192.168.15.200:4000")
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
      
    </>
  );
}