import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/index';

export namespace Widget {
  export interface Props {
    widgetStore?: WidgetStore;
  }
  export interface State {

  }
}

class Widget extends React.Component<Widget.Props, Widget.State> {
  constructor(props: object) {
    super(props);
  }

  // here is a decision to make,
  // i decide to work with classnames and set them 
  // another solution would be to give values directly to style here, but is messy
  render() {  
    console.log('widget_prop', this.props);

    if ( this.props.widgetStore ) {

      const { Widget } = this.props.widgetStore;

      return(
      <div className="tr widget">
        <h3> message is : {Widget.message}</h3>
      </div>);
    }
    return(<div>foo</div>);
  }
}

function mapStateToProps(state: RootState) {
  return {
    widgetStore: state.widget
  };
}

export const ConnectedWidget = connect<Widget.State, Widget.Props>(
  mapStateToProps,
)(Widget);