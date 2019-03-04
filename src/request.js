class Request {
  make_request(name) {
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=parse&page=${name}&origin=*`, {
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      let title = JSON.stringify(response.parse.title)
      console.log(`Title: ${title.replace(/\"/g, "")}`)
    });
  }
}