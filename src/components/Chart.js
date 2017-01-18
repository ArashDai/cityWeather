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
        <div>
            <Sparklines Height={140} Width={180} data={props.data}>
                <Line color={props.color}/>
                <ReferenceLine type='avg'/>
            </Sparklines>
            <div className='text-center'>Average of {average(props.data)}{props.unit}</div>
        </div>
    )
}