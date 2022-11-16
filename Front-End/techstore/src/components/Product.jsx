export default function Product(props) {
    return (
        <div className="productContainer" onMouseOver={(e)=>{e.target.style.cursor="pointer"}}>
            <div className="productImg">
                <img src={props.obj.imagem} alt={props.obj.nome} />
            </div>
            <div>
                <h3>{props.obj.nome}</h3>
                <h2>R$ {parseFloat(props.obj.valor).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h2>
                <p>no PIX <span>(7% de desconto)</span></p>
                <p>ou 10x de R$ {(parseFloat(props.obj.valor) / 10).toLocaleString('pt-br', { minimumFractionDigits: 2 })} sem juros</p>
            </div>
        </div>
    );
}