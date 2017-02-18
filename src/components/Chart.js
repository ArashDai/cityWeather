import React from 'react'
import { Sparklines,
         SparklinesLine as Line,
         SparklinesReferenceLine as ReferenceLine
        } from 'react-sparklines';

function average(data){
    return Math.round(data.reduce((a,b)=> a+b) /data.length)
}

export default (props) => {
    return(

            <Sparklines data={props.data}>
                <Line color={props.color}/>
            </Sparklines>

    )
}