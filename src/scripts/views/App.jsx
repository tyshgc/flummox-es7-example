/**
 * Root Component: App
 */
import React from 'react';
import { Router, RouteHandler } from 'react-router';
import joinClasses from 'react/lib/joinClasses';
import FluxComponent from 'flummox/component';
import Flux from '../constants/Flux';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <main 
        ref='main_content'
        className={joinClasses(
          'layout_main'
        )}>

        <FluxComponent flux={Flux}>
          <RouteHandler />
        </FluxComponent>
      </main>
    );
  }
  
  static get propTypes() {
    return {};
  }
  static get defaultProps() {
    return {};
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.func
    };
  }
}