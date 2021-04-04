import React, { useState } from 'react'


export default function Battles() {
    const [battleNum, setBattleNum] = useState(0)
    const [enemyNum, setEnemyNum] = useState(10)
    
    function battle() {
        function startBattle() {
            setBattleNum(Math.floor(Math.random() * 100))
         }

         function enemyTry() {
            setEnemyNum(Math.floor(Math.random() * 100))
        }

        function battleWinner(){
            if (battleNum > enemyNum){
                alert('You win!')
            } else {
                alert('You lose your head! SEE YA!')
            }
        }
        startBattle();
        enemyTry();
        battleWinner();

    }

   

    return(
        <div className="battle-wrap">
             <h2>Battles</h2>
             <p>You have been granted glory in a challenge of battle- click the button below to start! You have 3 tries to defeat your foe! make each one count!</p>
             <button onClick={battle}>Start Battle</button>
             <p>Your battle number is: {battleNum}</p>
             <p>Your enemy's number is: {enemyNum}</p>
        </div>
       
    )
}