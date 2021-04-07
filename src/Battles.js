import React, { useEffect, useState } from 'react'


export default function Battles() {
    const [battleNum, setBattleNum] = useState(0)
    const [enemyNum, setEnemyNum] = useState(10)
    const [battleStatus, setbattleStatus] = useState('Start the battle')
    
    useEffect(() => {
       battle()
    }, [])

    function battle() {
        function startBattle() {
            setBattleNum(Math.floor(Math.random() * 100))
         }

        function enemyTry() {
            setEnemyNum(Math.floor(Math.random() * 100))
        }

        function battleWinner(){
            battleNum > enemyNum ? setbattleStatus('You win!') : setbattleStatus('You lose your head! SEE YA!')
            
        }
       
        startBattle();
        enemyTry();
        battleWinner();
        console.log(battleNum, enemyNum)
    } 


    

   

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