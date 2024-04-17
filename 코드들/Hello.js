import React from "react";
class Hello extends React.Component{
    render(){
        return <div>Hello{this.props.toWhat}</div>
    }
}

// const root = ReactDom.creatRoot(document.getElementById('root'))
// root.render(<Hello toWhat ="World"/>)
export default Hello;