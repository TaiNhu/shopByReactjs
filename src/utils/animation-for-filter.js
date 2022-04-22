import React from 'react'
import { getDataByFilter2 } from '../firebase/connect';
import { amountOfPagination } from '../components/prodcuts';

export default function AnimationForFilter({id, title, list, values}){
    var list = [...list]
    var [iconName, setIconName] = React.useState("add-outline");
    var query = `.detail--header._${id} ~ ul`

    function handdleClick(e){
        if(iconName ===  "remove-outline"){
            setIconName("add-outline")
            document.querySelector(query).classList.remove('open')
        } else {
            setIconName("remove-outline")
            document.querySelector(query).classList.add('open')
        }
    }

    return (
        <div className="detail--wrapper">
            <ul>
                <li>
                    <div className={`detail--header _${id}`} onClick={handdleClick}>{title} &nbsp;<ion-icon name={iconName}></ion-icon></div>  
                    <ul className="detail-content">
                        {list.map((v, i) => <li key={i} style={{cursor: 'pointer', 'fontFamily' : 'Poppins'}} onClick={() => getDataByFilter2(title, values[i])}>{v}</li>)}
                    </ul>
                </li>
            </ul>
        </div>
    )
} 