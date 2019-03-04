class CelebSummary {
  
  see_info(name) {
    if(name === undefined || name === "") {
      return "Please enter a celebrity name to search for"
    }
    let request = new Request
    let formatted_name = name.replace(" ", "%20")
    request.make_request(formatted_name)
  }

} 

