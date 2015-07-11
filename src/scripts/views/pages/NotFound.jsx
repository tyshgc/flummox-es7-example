/**
 * Page Component: NotFound
 */
import React from 'react';

export default class NotFound extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {};
    this.text = {};
  }
  
  render() {
  
    var {} = this.props;
  
    return (
      <div className="Page_NotFound">
        Not Found
      </div>
    );
  }
  
  static get propTypes() {
    return {};
  }
  
  static get defaultProps() {
    return {};
  }
  
}