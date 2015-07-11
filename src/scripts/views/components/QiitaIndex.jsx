/**
  Component: QiitaIndex(List)
*/
import React from 'react';
import { Router, State, Link } from 'react-router';
import joinClasses from 'react/lib/joinClasses';

export default class QiitaIndex extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.QiitaIndexListActions = this.props.flux.getActions('QIITA_INDEX_LIST');
    this.QiitaIndexListStore = this.props.flux.getStore('QIITA_INDEX_LIST');
    
    this.state = {};
    this.text = {};
  }
  
  render() {
    
    let {
      className,
      listType
    } = this.props;
    
    let list = this.makeQiitaIndexItem();
    
    return (
      <ul
        className={
          joinClasses(
            "Component_QiitaIndex", className
        )}>
        {list}
      </ul>
    );
  }
  
  makeQiitaIndexItem() {
    const indexItems = this.props.list;
    if(!indexItems) return null;
    
    return indexItems.map((item, index)=> {
      let {
        title,
        url,
        user
      } = item;
      
      let {
        name,
        github_login_name,
        twitter_screen_name,
        facebook_id,
        profile_image_url,
        website_url
      } = user;
      
      return (
        <li 
          className="QiitaIndex__item"
          key={index}>
          <a href={url}>
            <figure className="item__block">
              <img 
                src={profile_image_url}
                className="item__thumbs" />
              <figurecaption className="item__title">
                {title}
              </figurecaption>
            </figure>
          </a>
        </li>
      );
    });
  }
  
  static get propTypes() {
    return {};
  }
  
  static get defaultProps() {
    return {};
  }
  
  componentDidMount() {
    this.onGetIndexListHandler();
  }
  
  onGetIndexListHandler() {
    this.QiitaIndexListActions.getIndexList();
  }
}