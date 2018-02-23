import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as widgetActions from '../actions/widgetAction';

export namespace Selection {
  export interface Props {
    widgetAction?: typeof widgetActions;

  }

  export interface State {
    direction: string;
    type: string;
    duration: string;
    message: string;
    isProminent: boolean;
  }
}

class Selection extends React.Component<Selection.Props, Selection.State> {
  constructor(props: object){
    super(props);

    this.state = {
      direction : 'tr',
      type: 'warning',
      duration: '3',
      message: '42 is always correct',
      isProminent: false
    };
  }

  submitWidgetProps = () => {
    
    let helperWidget = {...this.state};
    console.log(helperWidget);
  }

  render() {

    return(
      <div
        className="selection"
      >
        <h3>do widget things right here</h3>
        <form>
          <span>select your direction</span>
          <select onChange={(e) => {this.setState({direction: e.target.value}); }}>
            <option value="tr">top right</option>
            <option value="tl">top left</option>
            <option value="br">bottom right</option>
            <option value="bl">bottom left</option>
          </select>
          <br/>
          <span>select your type</span>
          <select onChange={(e) => {this.setState({type: e.target.value}); }}>
            <option value="warning">warning</option>
            <option value="alert">alert</option>
            <option value="success">success</option>
          </select>
          <br />
          <input type="number" value={this.state.duration} onChange={(e) => {this.setState({duration: e.target.value}); }}/>
          <input type="text" value={this.state.message} onChange={(e) => {this.setState({message: e.target.value}); }}/>
        </form>
        <button onClick={this.submitWidgetProps}>send values to widget</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    widgetAction: bindActionCreators(widgetActions as any, dispatch as any)
  };
}

export const ConnectedSelection = connect<{}, {}, Selection.Props>(
  null,
  mapDispatchToProps
)(Selection);

