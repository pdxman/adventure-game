import React, { useEffect, useState } from "react";

export default function GameStart() {
  const [direction, updateDirection] = useState("Choose a direction");
  const [adventure, updateAdventure] = useState("Here is where you are going! Exciting!");

  const [previousMoves, updatePreviousMoves] = useState([])

function changeDirection(event) {
    const directionChosen = event.target.value;
      updateDirection(directionChosen);
      updatePreviousMoves([...previousMoves, directionChosen]);

      
  }

  useEffect(() => {
    switch(direction){ 
      case "North" : updateAdventure("You step over the log and start falling and falling and falling...");
      break
      case "South" : updateAdventure("You head south toward the light and see a bunch of Sasquatch dancing aroudn the fire");
      break
      case "Left" :  updateAdventure("You follow the to the left in the direction the sound went. Finally you hear a voice say 'stop- who goes there?'");
      break
      case "Right" : updateAdventure("You follow the stream for a bit and come across a creature sitting by the stream fishing");
      break
      default: updateAdventure("no direction selected")     
    }
  }, [direction])

  console.log("the previous moves", previousMoves); 

return (
    <div>
      <div className="flex-wrapper">
      <div className="base-wrap">
        <div className="border">        
            <div className="base">
              <h1>In Search of The Coin of Power...</h1>
              <h2>You stand in a forest at dusk.</h2>
              <ul className="base-directions">
                  <li key="1">There is a glow in the woods to the South.</li>
                  <li key="2">There is a log in front of you to the North.</li>
                  <li key="3">There is a stream to the Right.</li>
                  <li key="4">There is darkness to the Left. You hear something running away.</li>
              </ul>
              <h3><strong>{direction}</strong></h3>
            </div>
           
          <div className="input-response">
            <select id="directions" name="directions" onChange={changeDirection}>
                <option value="Left">Go Left</option>
                <option value="Right">Go Right</option>
                <option value="North">Go North</option>
                <option value="South">Go South</option>
              </select>
              <p><strong>{adventure}</strong></p>
          </div>  
          </div>  
        </div>
        <div className="prev-moves-wrap">
        <div className="knight"></div>
        <h2>Your Moves So Far...</h2>
          <ul>{
                previousMoves.map(staticPreviousMove => {
                  return(<li><strong>{staticPreviousMove}</strong></li>)
                })   
            }
          </ul>
          

        </div>
     </div> 
     
     
    
    
    </div>
  );
}

