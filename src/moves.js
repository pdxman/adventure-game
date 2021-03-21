import React, {useState, useEffect} from 'react'
import Status from './Status'
import parse from "html-react-parser"

export default function GameMoves(){
    const [moves, setMoves] = useState([])
  
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
        <Status />
        <div className="dynamic-active-moves-right">
        <ul>
            {
                moves.map(move => {
                    const {title, id, content} = move
                    return(
                        <li key={move.id}>{title.rendered},<br /> {parse(content.rendered)}</li>
                    )
                })
            }
            </ul>
        </div>
    </div>
    )
}

