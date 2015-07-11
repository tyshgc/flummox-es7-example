/**
 * fetch wapper v2
 */
require('whatwg-fetch');

/**
 * @options.url: Fetch Url
 * @options.method: default 'GET'
 * @options.success: Success Callback
 * @options.fail: Fail Callback
 */

export default class Fetcher{

  constructor(url, options) {
    if(!url) return;
    
    this.options = {};
    this.headers = {};
    this.url = url;
    this.method = options.method || 'GET';
    this.queries = options.queries || null;
    
    this.pharsePostMethod();
    this.pharseGetMethod();
    
    return this.fetchData();
  }
  
  fetchData() {
    return fetch(this.url, this.options)
      .then(function(res) {
        return res.json();
      });
  }
  
  pharsePostMethod() {
    if(this.method !== 'POST') return;
    this.options.body = JSON.stringify(this.queries);
  }
  
  pharseGetMethod() {
    if(this.method !== 'GET' || !this.url) return;
    if(!this.queries) return;
    
    let params = "";
    for(let i in this.queries) {
      params += `${i}=${this.queries[i]}&`;
    }
    
    this.url +=`?${params}`;
  }
}
