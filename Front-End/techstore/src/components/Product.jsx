export default function Product(props){
    return(
        <div className="productContainer">
            <div>
                <img className="productImg" src={props.obj.imagem} alt={props.obj.nome} />
            </div>
            <div>
                <h3>{props.obj.nome}</h3>
                <h2>R$ {props.obj.valor}</h2>
                <p>no PIX <span>(7% de desconto)</span></p>
                <p>ou 10x de R$ {parseFloat(props.obj.valor)/10} sem juros</p>
            </div>            
        </div>
    );
}