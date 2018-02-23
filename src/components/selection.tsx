import * as React from 'react';

export namespace Selection {
  export interface Props {

  }

  export interface State {

  }
}

export class Selection extends React.Component<Selection.Props, Selection.State> {
  constructor(props: object){
    super(props);
  }

  render() {
    return(
      <div
        className="selection"
      >
        <h3>do widget things right here</h3>
        <form>
          <span>select your direction</span>
          <select>
            <option value="tr">top right</option>
            <option value="tl">top left</option>
            <option value="br">bottom right</option>
            <option value="bl">bottom left</option>
          </select>
          <br/>
          <span>select your type</span>
          <select>
            <option value="warning">warning</option>
            <option value="alert">alert</option>
            <option value="success">success</option>
          </select>
          <br />
          <input type="number" value="enter duration"/>
          <input type="text" value="enter text"/>
        </form>
        <button>send value</button>
      </div>
    );
  }
}

