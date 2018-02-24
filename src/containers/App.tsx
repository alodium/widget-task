import * as React from 'react';

import { ConnectedSelection } from '../components/selection';
import { ConnectedWidget } from '../components/widget';

export class App extends React.Component {
    
    render(){
        return(
            <div className="container">
                <ConnectedSelection />
                <ConnectedWidget />
            </div>
        );
    }


}

export default App;