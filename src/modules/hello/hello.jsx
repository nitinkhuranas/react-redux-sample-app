import React from "react";

class Hello extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                <h1>Hello {name || 'World'}</h1>
            </div>
        );
    }
}

export default Hello;