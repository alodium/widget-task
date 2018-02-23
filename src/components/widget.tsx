import * as React from 'react';

export namespace Widget {
  export interface Props {
    widgetStore?: WidgetStore;
  }
  export interface State {

  }
}

export class Widget extends React.Component<Widget.Props, Widget.State> {
  constructor(props: object) {
    super(props);
  }

  // here is a decision to make,
  // i decide to work with classnames and set them 
  // another solution would be to give values directly to style here, but is messy
  render() {

    if ( this.props.widgetStore && this.props.widgetStore.success ) {
      return (
        <div className="widget">shows a widget</div>
      );
    }
    if ( this.props.widgetStore && this.props.widgetStore.load ) {
      return (
        <div>Loading....</div>
      );
    }

    return(<div>widget...</div>);
  }
}