/**
 * Action: QiitaIndexListActions - QiitaのIndexリストを管理するAction
 */
import { Actions } from 'flummox';
import Fetcher from '../utils/fetcher';

export default class QiitaIndexListActions extends Actions {
  
  /**
   * Indexリストを渡す
   */
  async getIndexList(option){
    
    let fetchUrl = 'http://qiita.com/api/v2/items';
    
    /**
     * @page: ページ番号 (1から100まで)
     * @per_page: 1ページあたりに含まれる要素数 (1から100まで)
     * @query: 検索クエリ
     */
    let queryData = {
      page: 1,
      per_page: 10,
      query: null
    };
    
    if(option){
      queryData.page = option.page || 1;
      queryData.per_page = option.per_page || 10;
      queryData.query = option.query || null;
    };
    
    let fetchedData = await new Fetcher(
      fetchUrl,
      {
        queries: queryData
      })
      .then((json)=> {
        return json;
      });
    
    return await fetchedData;
  }
  
  setSearchQuery(searchQuery) {
    if(!searchQuery) return;
    this.getIndexList({
      query: searchQuery
    })
  }
  
}