import React, {useState, useEffect} from 'react'
import Status from './Status'
import parse from "html-react-parser"
import axios from 'axios'

export default function GameMoves(){
    const [moves, setMoves] = useState([])
    // const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
        getResults();
    }, [])

    const getResults = async () => {
        setLoading(true)   
        try {
            const response = await axios.get('http://localhost:8888/forest/wp-json/wp/v2/posts/')
            setMoves(response.data)
        } catch(err) {
            setError(err)
        }
        setLoading(false) 
    }

    console.log('here are the moves: ', moves);
    const empty = moves.length
    console.log('moves from axios:', moves)
    
    // function showError(empty) {
    //     if (empty === 0){
    //         setError(true)
    //         console.log(error)
    //     }
    // }

    // showError(empty);

    return(
    <div className="dynamic-active-moves-wrap">
        <Status />
        <div className="dynamic-active-moves-right">
        { loading ? (
            <div><h1>Waiting for Posts</h1></div>
            ) : (
            <ul>
                {
                moves.map(move => {
                    const {title, id, content} = move
                    return(
                        <li key={move.id}>{title.rendered},<br /> {parse(content.rendered)}</li>
                    )
                })
            }
            </ul>)}
        </div>
    </div>
    )
}

// go look for data

// if there is no data
// write "there is no data" (the error)
// if there is data  (the data)
// show data