import React from 'react'

const Tile = props => {

    let className = props.type === "full" ? "full" : ""

    return <>
        <div className={className}>{props.content || 'Tilee'}</div>
        <style jsx>{`
            div {
                display: inline-block;
                width: 155px;
                height: 155px;
                border-radius: 5px;
                background: #c0c0c0;
                padding: 8px;
                margin: 4px;
            }

            div.full {
                width: 100%;
                height: 180px;
            }
        `}</style>
    </>
}

export default Tile
