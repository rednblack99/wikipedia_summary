class Request {
  make_request(name) {
    let promise = fetch(`https://en.wikipedia.org/w/api.php?format=json&action=parse&page=${name}&origin=*`, {
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const title = JSON.stringify(response.parse.title)
      const body = JSON.stringify(response.parse.text)
      const formatted_title = title.replace(/\"/g, "")
      let html = new ParseBody(body)
      html.parse_page()
      console.log(`Title: ${formatted_title}`)
    });
    return promise.toString()
  }
}