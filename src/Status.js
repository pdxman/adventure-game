import React, {useState, useEffect} from 'react'


export default function Status(props) {
    const { health, fire, food } = props

    const [weapons, setWeapons] = useState([
        "Sword",
        "Gold Armor"
    ])
   
    const addWeapon = () => {
        setWeapons(weapons => ([...weapons, "Battle Axe"]))
    }

    const newValue = weapons.includes("Battle Axe");
    console.log('has battle axe:', newValue)
    
    return(
        <div className="dynamic-active-moves-left knight-wrap">
            <h2>Status</h2>
            <strong>Weapons:</strong>
             <ul>
                {weapons.map(weapon =>(
                    <li>{weapon}</li>
                ))}
            </ul>
            
            <p><strong>Health:</strong>  {health}</p>
            <p><strong>Fire:</strong>  {fire}</p>
            <p><strong>Food:</strong>  {food}</p>
           {!newValue ? <button className="buttonRemove" onClick={addWeapon} >Click to Get a Free Weapon</button> : null}
            <div className="dragon"></div>
        </div>
    )
}