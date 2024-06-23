import { useState } from "react";
import data from './data';
import './styles.css'


function Accordion() {

    const [selected, setSelected] = useState(null)
    const [multiple, setMultiple] = useState([])
    const [enableMultiSelected, setEnableMultiSelected] = useState(false)

    function handleSingleSelection(getCurrentId) {
        if (!enableMultiSelected) {
            setSelected(getCurrentId === selected ? null : getCurrentId)
            console.log(getCurrentId, enableMultiSelected);
        }else{
            let cpyMultiple = [...multiple]
            if (cpyMultiple.includes(getCurrentId)) {
                cpyMultiple.splice(multiple.indexOf(getCurrentId, 1))
                setMultiple(cpyMultiple)

            } else {
                setMultiple([getCurrentId, ...cpyMultiple])
            }
        }
    }

    return (
        <div className="wrapper" >
            <button onClick={() => setEnableMultiSelected(!enableMultiSelected)} >Enable multi Selection</button>
            <div className="accordion">
                {data && data.length > 0 ?
                    (data.map(item =>
                        <div key={item.id} className="item">
                            <div onClick={() => handleSingleSelection(item.id)} className="title">
                                <h3>{item.first_name}</h3>
                                <span>+</span>
                            </div >
                            {multiple.includes(item.id) || selected === item.id ? <div className="content"> {item.dis} </div> : null}
                        </div>
                    )) : <div>data not found</div>
                }
            </div>
        </div>
    )

}

export default Accordion;