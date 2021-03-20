import React, {useState, useEffect} from 'react'

export default function GameMoves(){
    const [moves, setMoves] = useState([])

    // const staticMoves = [

    //     {
    //         id: 0,
    //         title: 'left',
    //         response:  "You step over the log and start falling and falling and falling..."
    //     },
    //     {
    //         id: 1, 
    //         title: 'right',
    //         response:   "You head south toward the light and see a bunch of Sasquatch dancing aroudn the fire"
    //     },
    //     {
    //         id: 3, 
    //         title: 'north',
    //         response:   "You follow the to the left in the direction the sound went. Finally you hear a voice say 'stop- who goes there?'"
    //     },
    //     {
    //         id: 4, 
    //         title: 'south',
    //         response:  "You follow the stream for a bit and come across a creature sitting by the stream fishing"
    //     }
    // ]

    // console.log('here are the moves: ', staticMoves)
       
    useEffect(() => {
      fetch('http://localhost:8888/forest/wp-json/wp/v2/posts/')
      .then(response => response.json())
      .then(json => {
          setMoves(json)
        })
    }, [])

    console.log('here are the moves: ', moves);

    return(
    <div className="dynamic-active-moves-wrap">
        <div className="dynamic-active-moves-left">
            <h2>Test</h2>
        </div>
        <div className="dynamic-active-moves-right">
        <ul>
            {
                moves.map(move => {
                    const {title, id, content} = move
                    return(<li key={move.id}>{title.rendered},<br /> {content.rendered}</li>)
                })
            }
            </ul>
        </div>
    </div>
    )
}

