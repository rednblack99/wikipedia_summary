class ParseBody {
  constructor(page_body){
    this.page_body = page_body
  }

  parse_page() {
    let parser = new DOMParser();
    let doc = parser.parseFromString(this.page_body, "text/html");
    console.log(doc.body)
    // console.log(doc.body.children)
    // let parser_output = doc.body.children
    // console.log(parser_output[0].children)
    // let body = parser_output[0].children
    // console.log(body.item(2).children)
    // let infobox = body[2].children
    // console.log(infobox.item(2))
    // let tbody = infobox.item(2)

    console.log(doc.querySelectorAll(".bday"))
    console.log(doc.getElementsByClassName("/infobox"))
  }

}
