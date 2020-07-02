import React from 'react';

function PressButton(props) {

    const handleClicker = (e) => {
        console.log(e.target.textContent)
    }

    return (
        <button >{props.value}</button>
    );
}

export default PressButton;