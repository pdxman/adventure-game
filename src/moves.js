import React, {useState, useEffect} from 'react'

export default function GameMoves(){
    const [moves, setMoves] = useState([])

    useEffect(() => {
      fetch('http://localhost:8888/forest/wp-json/wp/v2/posts/')
      .then(response => response.json())
      .then(json => {
          setMoves([json])
          
      })
    }, [])

    console.log(moves)

    return(
    <div>
        {
            moves.map(move => {
                const {title, id, content} = move
                return(<p key={id}>{title}, {content}</p>)
            })
        }
    </div>
    )
}

