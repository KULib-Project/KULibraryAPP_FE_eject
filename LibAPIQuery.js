import {API_KEY} from '@env';

class DefaultQueryData {
    /**
     *
     * @param {*} verb  명령(*)
     * @param {*} target 검색 대상 DB(*)
     * @param {*} query 검색어(*)
     * @param {*} page 페이지 번호
     * @param {*} display 쪽당 출력 건수
     * @param {*} sortkey 정렬 필드
     * @param {*} sortorder 정렬 순서
     */
    constructor(
      verb,
      target,
      query,
      page = undefined,
      display = undefined,
      sortkey = undefined,
      sortorder = undefined
    ) {
      this.defaultURL = `https://libs.korea.ac.kr/openapi/search?verb=${verb}&target=${target}&query=${query}`;
      this.apiKey = API_KEY;
      this.page ? (this.defaultURL += `&page=${page}`) : undefined;
      this.display ? (this.defaultURL += `&display=${display}`) : undefined;
      this.sortkey ? (this.defaultURL += `&sortkey=${sortkey}`) : undefined;
      this.sortorder ? (this.defaultURL += `&sortorder=${sortorder}`) : undefined;
  
      this.url = this.defaultURL + this.apiKey;
    }
  
    getURL() {
      return this.url;
    }
  }
  
  export default DefaultQueryData;