import ft1 from './img/1.jpg';
import ft2 from './img/2.jpg';
import ft3 from './img/3.jpg';
import ft4 from './img/4.jpg';
import ft5 from './img/5.jpg';
import '../App.css';

export default function Banner(){    

    const container = {
        display: 'flex',        
        overflow: 'hidden',        
        position: 'relative',
        zIndex: -2,        
        width: '100%',        
    }    

    return(
        <aside style={container}>
            <img className="imagem" src={ft1} alt="" />
            <img className="imagem" src={ft2} alt="" />
            <img className="imagem" src={ft3} alt="" />
            <img className="imagem" src={ft4} alt="" />
            <img className="imagem" src={ft5} alt="" />
        </aside>
    );
}