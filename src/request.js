class Request {
  make_request(name) {
    let promise = fetch(`https://en.wikipedia.org/w/api.php?format=json&action=parse&page=${name}&origin=*`, {
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const title = JSON.stringify(response.parse.title)
      const body = JSON.stringify(response.parse.text['*'])
      const formatted_title = title.replace(/\"/, "")
      let html = new ParseBody(body)
      let parsed_body = html.parse_page()
      console.log(parsed_body)
      console.log(`Title: ${formatted_title}`)
    });
    return promise.toString()
  }
}