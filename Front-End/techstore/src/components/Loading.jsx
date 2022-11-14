import './Loading.css';

export default function Loading() {

    const loading = {
        top: 0,
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(157 180 215)',
        textAlign: 'center',
        zIndex: 3,
    }

    return (
        <div style={loading}>
            <h1>
                <span className="let1">l</span>
                <span className="let2">o</span>
                <span className="let3">a</span>
                <span className="let4">d</span>
                <span className="let5">i</span>
                <span className="let6">n</span>
                <span className="let7">g</span>
            </h1>
        </div>
    )
}