describe("Feature", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("should return hello, world", function() {
    expect(celeb_summary.say_hello()).toEqual("Hello world");
  });

});
