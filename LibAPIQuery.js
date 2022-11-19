import { API_KEY } from "@env";

export default class DefaultQueryData {
  /**
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
    this.defaultURL = `http://libs.korea.ac.kr/openapi/search?verb=${verb}&target=${target}&query=${query}`;
    this.apiKey = "&apikey=" + "KFatUriu5FXoGuKN475tER6E9ZS0Hqk2LMuM9Ja/MPA=";
    this.page
      ? (this.defaultURL += `&page=${page}`)
      : (this.defaultURL += `&page=10`);
    this.display
      ? (this.defaultURL += `&display=${display}`)
      : (this.defaultURL += `&display=10`);
    this.sortkey
      ? (this.defaultURL += `&sortkey=${sortkey}`)
      : (this.defaultURL += `&sortkey=publisher_year`);
    this.sortorder
      ? (this.defaultURL += `&sortorder=${sortorder}`)
      : (this.defaultURL += `&sortorder=desc`);

    this.url = this.defaultURL + this.apiKey;
  }

  getURL() {
    return this.url;
  }
}
