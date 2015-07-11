/**
 * Page Component: Top
 */
import React from 'react';
import { Router, State, Link } from 'react-router';
import joinClasses from 'react/lib/joinClasses';
import FluxComponent from 'flummox/component';

/* Components */
const {
  Search,
  QiitaIndex
} = require('../components');

export default class Top extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {};
    this.text = {};
  }
  
  render() {
  
    let {
      className
    } = this.props;
    
    let {} = this.text;
    
    return (
      <section 
        className={
          joinClasses("Page-Top", className)
        }>
        <FluxComponent connectToStores={['QIITA_INDEX_LIST']}>
          <Search />
        </FluxComponent>
        <FluxComponent connectToStores={['QIITA_INDEX_LIST']}>
          <QiitaIndex />
        </FluxComponent>
      </section>
    );
  }
  
  static get propTypes() {
    return {};
  }
  
  static get defaultProps() {
    return {};
  }
  
}