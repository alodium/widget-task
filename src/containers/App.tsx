import * as React from 'react';

import { ConnectedSelection } from '../components/selection';

export class App extends React.Component {
    
    render(){
        return(
            <div className="container">
                <h3>42</h3>
                <ConnectedSelection />
            </div>
        );
    }


}

export default App;