import ft1 from './img/1.jpg';
import ft2 from './img/2.jpg';
import ft3 from './img/3.jpg';
import ft4 from './img/4.jpg';
import ft5 from './img/5.jpg';
import '../App.css';

export default function Banner(){        

    let img = {
        margin: '0%',
        width: '100%',            
    }

    if (window.matchMedia(`(min-width: 760px)`).matches) {
        img = {            
            width: '65vw',
            margin: '27px 17.5vw 0 17.5vw',
        }
    }else{
        img = {
            marginTop: '50px',
            width: '100%',
        }
    }

    return(
        <aside className='banner'>
            <img className="imagem" style={img} src={ft1} alt="" />
            <img className="imagem" style={img} src={ft2} alt="" />
            <img className="imagem" style={img} src={ft3} alt="" />
            <img className="imagem" style={img} src={ft4} alt="" />
            <img className="imagem" style={img} src={ft5} alt="" />
        </aside>
    );
}