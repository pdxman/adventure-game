import React, { useState } from 'react'

const SomethingWithStateProps = props => {
    const [moneyState, setMoneyState] = useState(props)

    return(
        <div>
            <p>Gold: {moneyState.gold}</p>
            <p>Silver: {moneyState.silver}</p>
        </div>
    )
}

export default SomethingWithStateProps