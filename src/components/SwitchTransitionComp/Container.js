import React from 'react'
import BoxComponent from '../BoxComponent'
export default function Container() {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <BoxComponent key={1}/>
            <BoxComponent key={2}/>
            <BoxComponent key={3}/>
        </div>
    )
}
