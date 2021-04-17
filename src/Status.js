import React, {useState} from 'react'


export default function Status() {
    const [statusItem, setStatusItem] = useState({
        health: "10",
        food: "30", 
        fire: "10"
    }); 

    const [weapons, setWeapons] = useState([
        "Sword",
        "Gold Armor"
    ])
   
    const addWeapon = () => {
        setWeapons(weapons => ([...weapons, "Battle Axe"]))
    }

    return(
        <div className="dynamic-active-moves-left knight-wrap">
            <h2>Status</h2>
            <strong>Weapons:</strong>
             <ul>
                {weapons.map(weapon =>(
                    <li>{weapon}</li>
                ))}
            </ul>
            
            <p><strong>Health:</strong>  {statusItem.health}</p>
            <p><strong>Food:</strong>  {statusItem.food}</p>
            <p><strong>Fire:</strong>  {statusItem.fire}</p>
            <button onClick={addWeapon} >Click to Get a Free Weapon</button>
            {/* <div className="dragon"></div> */}
        </div>
    )
}