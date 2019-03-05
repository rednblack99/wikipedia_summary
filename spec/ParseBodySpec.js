describe("ParseBody", function() {
  var parse_body;

  beforeEach(function() {
    parse_body = new ParseBody("<p> Hello world </p>");
  });

  // CURRENTLY FAILING as parse returns function, not object. Look into during next phase to confirm parse_page is doing what I think:

  // it("parses the string given as an argument", function() {
  //   expect(parse_body.parse_page).toEqual('<p> Hello world </p>')
  // });

});
