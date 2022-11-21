export default function Compras(props){
    return(        
        <div className="purchaseContainer">            
            <p>Compra realizada no dia {props.dataCompra}</p>
            <p>Forma de pagamento: {props.formaPagamento}</p>
            <div>
                <span>Ver mais detalhes</span>
                <span className="triang"></span>
            </div>            
            <ul>
                <p>Lista de compra:</p>
                {props.listaCompras.forEach((e)=>{
                    (<li>{Object.keys(e)[0]} - {e[Object.keys(e)[0]]} unidade(s)</li>)                    
                })}
            </ul>
        </div>
    )
}