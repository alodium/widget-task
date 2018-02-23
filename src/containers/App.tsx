import * as React from 'react';

import { Selection } from '../components/selection';

export class App extends React.Component {
    
    render(){
        return(
            <div className="container">
                <h3>42</h3>
                <Selection />
            </div>
        );
    }


}

export default App;