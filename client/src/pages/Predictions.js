import { useLocation } from 'react-router-dom';
import './Predictions.css';

/**
 * Shape of "data" location state
 * 
 * [{
 *  property: string (e.g Number of planets, density, etc),
 *  value: any (e.g 7.5, 11kg, Andromeda)
 * }]
 * 
 */

const Predictions = () => {

    const location = useLocation();
    const data = location.state.data;

    const dataElements = [];

    for (let i in data) {
        let d = data[i];
        let e = <p className="predicted-value" key={i}><strong>{d.property}</strong>: {d.value}</p>
        dataElements.push(e);
    }

    return <div className="predictions">
        <h3>Data about star</h3>
        {dataElements}
    </div>
}

export default Predictions;