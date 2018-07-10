import React from "react";

class UserName extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        });
    }

    handleButtonClick(){
        this.props.setName(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={evt => this.updateInputValue(evt)}
                />
                <button onClick={this.handleButtonClick}>Enter Name</button>
            </div>
        );
    }
}

export default UserName;