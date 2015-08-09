/**
  Component: Search(Form)
*/
import React from 'react';
import joinClasses from 'react/lib/joinClasses';

export default class Search extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.QiitaIndexListActions = this.props.flux.getActions('QIITA_INDEX_LIST');
    
    this.state = {};
    this.text = {
      placeholder: "Keywordnnn..."
    };
    this.timer = null;
  }
  
  render() {
    
    let {
      className,
      listType
    } = this.props;
    
    let {
      placeholder
    } = this.text;
    
    return (
      <form
        className={
          joinClasses(
            "Component_Search", className
        )}>
        <input 
          className="Search__input"
          rel="search_input"
          type="text"
          placeholder={placeholder} 
          onBlur={this.onBlurHandler.bind(this)} />
      </form>
    );
  }
  
  static get propTypes() {
    return {};
  }
  
  static get defaultProps() {
    return {};
  }
  
  onChangeHandler(e) {
    let query = e.target.value;
    let element = e.target;
    
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(()=> {
      this.setSearch(query);
      element.blur();
    }.bind(this), 1000);
  }
  
  onBlurHandler(e) {
    let query = e.target.value;
    
    this.setSearch(query);
  }
  
  setSearch(query) {
    this.QiitaIndexListActions.setSearchQuery(query);
  }
}