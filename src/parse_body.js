class ParseBody {
  constructor(page_body){
    this.page_body = page_body
  }

  parse_page() {
    let parser = new DOMParser();
    let doc = parser.parseFromString(this.page_body, "text/html");
    console.log(doc)
    return doc
  }

}
