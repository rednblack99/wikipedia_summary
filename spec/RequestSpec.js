describe("Request", function() {
  var request;

  beforeEach(function() {
    request = new Request();
  });

  it("make_request returns promise", function() {
    expect(request.make_request("Adam Levine")).toEqual('[object Promise]')
  });

});
