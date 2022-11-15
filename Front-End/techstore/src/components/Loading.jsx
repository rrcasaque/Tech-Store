import './Loading.css';

export default function Loading(props) {

    return (        
        <div className='loading' id={props.estado?"show":"hide"}>
            <h1>
                <span className="spanLoading let1">l</span>
                <span className="spanLoading let2">o</span>
                <span className="spanLoading let3">a</span>
                <span className="spanLoading let4">d</span>
                <span className="spanLoading let5">i</span>
                <span className="spanLoading let6">n</span>
                <span className="spanLoading let7">g</span>
            </h1>
        </div>        
    )
}