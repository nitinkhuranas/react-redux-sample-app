import React from "react";
import { Provider } from 'react-redux';
import store from './globalStore';
import UserName from "./userName/container";
import Hello from "./hello/container";

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Provider store={store}>
                    <div>
                        <Hello/>
                        <UserName/>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;