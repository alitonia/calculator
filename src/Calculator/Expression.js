import React from 'react';

function Expression(props) {
    return (
            <h2>{props.value||0}</h2>
    );
}

export default Expression;