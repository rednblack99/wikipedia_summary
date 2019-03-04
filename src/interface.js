class CelebSummary {
  say_hello() {
    return "Hello world"
  }

  see_info(name) {
    make_request(name)
  }

} 

function make_request(name) {
  fetch(`https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Seth%20Rogen&origin=*`, {
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    let title = JSON.stringify(response.parse.title)
    console.log(`Title: ${title.replace(/\"/g, "")}`)
  });
}

