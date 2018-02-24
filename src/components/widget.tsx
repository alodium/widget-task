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


  // -------lifecyvle here-----------------//


  componentWillReceiveProps(nextProps: any) {
    
    if ( nextProps.widgetStore ) {
      if ( nextProps.widgetStore.success ) {
      setTimeout(() => {
        let renderTarget = document.querySelector('.widget');
        if ( renderTarget ) {
          renderTarget.className = renderTarget.className + ' fadeout';
        }
        }, parseInt(nextProps.widgetStore.Widget.duration, 10) * 1000);
      }
    }
  }


  // --------render stuff here-------------//
  render() {  
    console.log('widget_prop', this.props);

    if ( this.props.widgetStore ) {

      if ( this.props.widgetStore.success ) {
        const { Widget } = this.props.widgetStore;
        
        return(
          <div className={`widget ${Widget.direction} ${Widget.type} ${Widget.isProminent ? 'isProminent ' : ''}`}>
            <h3> message is : {Widget.message}</h3>
          </div>);
      }
      if ( this.props.widgetStore.load) {
        return(<div className="widget">Loading....</div>);
      }
    }
    return(<div>use the selection to enter widget values</div>);
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