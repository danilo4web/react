import React from 'react'

// elementos filhos herdam propriedades do elemento pai
function childrenWithProps(children, props) {
    return React.Children.map(props.children, child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }