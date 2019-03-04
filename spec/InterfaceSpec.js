describe("CelebSummary", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("say_hello should return hello, world", function() {
    expect(celeb_summary.say_hello()).toEqual("Hello world");
  });

  it("see_info should return name", function() {
    expect(celeb_summary.see_info("Joe Bloggs")).toEqual("Name: Joe Bloggs");
  });


});
