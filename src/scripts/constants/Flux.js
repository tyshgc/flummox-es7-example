import {Flummox} from 'flummox';

/* Actions */
const {
  QiitaIndexListActions
} = require('../actions');

/* Store */
const {
  QiitaIndexListStore
} = require('../stores');

class Flux extends Flummox {
  constructor() {
    super();
    
    /**
     * QiitaIndex - Qiitaのリスト管理
     */
    this.createActions(
      'QIITA_INDEX_LIST', 
      QiitaIndexListActions
    );
    this.createStore(
      'QIITA_INDEX_LIST', 
      QiitaIndexListStore, 
      this
    );
  }
}

module.exports = new Flux();