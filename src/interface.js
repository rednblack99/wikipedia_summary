class CelebSummary {
  say_hello() {
    return "Hello world"
  }

  see_info(name) {
    return `Name: ${name}`
  }

  make_request() {
    fetch('https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Seth_Rogen&origin=*', {
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      text = myJson.
      console.log(JSON.stringify(myJson));
    });
  }

} 
