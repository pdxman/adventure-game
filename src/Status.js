import React, {useState} from 'react'


export default function Status() {
    const [weapons, setWeapons] = useState('Sword'); 
    const [health, setHealth] = useState(10); 
    const [food, setFood] = useState(5); 
    const [fire, setFire] = useState(2); 

    return(
        <div className="dynamic-active-moves-left">
            <h2>Status</h2>
            <p><strong>Weapons:</strong> {weapons}</p>
            <p><strong>Health:</strong>  {health}</p>
            <p><strong>Food:</strong>  {food}</p>
            <p><strong>Fire:</strong>  {fire}</p>
    </div>
    )
}