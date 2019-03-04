class CelebSummary {

  see_info(name) {
    if(name === undefined || name === "") {
      throw new Error("Please enter a celebrity name to search for")
    }
    const request = new Request
    const formatted_name = name.replace(" ", "%20")
    return request.make_request(formatted_name)
  }

} 

