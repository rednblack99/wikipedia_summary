class ParseBody {
  constructor(page_body){
    this.page_body = page_body
  }

  parse_page() {
    let parser = new DOMParser();
    let doc = parser.parseFromString(this.page_body, "text/html");
    let body = doc.body
    return body

    console.log(body.querySelector(".bday"))
    console.log(doc.getElementsByClassName("/infobox"))
  }

}
