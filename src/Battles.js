import React, { useEffect, useState } from 'react'


export default function Battles() {
    const [battleNum, setBattleNum] = useState(0)
    const [enemyNum, setEnemyNum] = useState(10)
    const [battleStatus, setbattleStatus] = useState('Start the battle')

    useEffect(() => {
        battle()
    }, [])
    
    function battle() {
        setBattleNum(Math.floor(Math.random() * 100))
        setEnemyNum(Math.floor(Math.random() * 100))
    } 

    useEffect(() => {
        battleNum > enemyNum ? setbattleStatus('You win!') : setbattleStatus('You lose your head! SEE YA!')
    }, [battleNum, enemyNum])
    

    console.log(battleNum, enemyNum, battleStatus)

    return(
        <div className="battle-wrap">
             <h2>Battles</h2>
             <p>You have been granted glory in a challenge of battle- click the button below to start! You have 3 tries to defeat your foe! make each one count!</p>
             <button onClick={battle}>Start Battle</button>
             <p>Your battle number is: {battleNum}</p>
             <p>Your enemy's number is: {enemyNum}</p>
             <h3>{battleStatus}</h3>
        </div>
       
    )
}