/**
 * Store: QiitaIndexListStore - QiitaのIndexリストを保持
 */
import {Store} from 'flummox';

/**
 * @list: QiitaのIndexリスト
 */
export default class QiitaIndexListStore extends Store {
  constructor(flux) {
    super();
    
    const ids = flux.getActionIds('QIITA_INDEX_LIST');
    this.register(ids.getIndexList, this.handleGetIndexList);
    
    this.state = {
      list: null
    };
  }
  
  /**
   * Index Listを受け取りsetStateして該当Componentへprops伝播
   */
  handleGetIndexList(list) {
    if(!list) return;
    
    this.setState({
      list: list
    });
  }
}