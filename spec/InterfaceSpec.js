describe("CelebSummary", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
    spyOn(window.console, 'log');
  });

  it("say_hello should return hello, world", function() {
    expect(celeb_summary.say_hello()).toEqual("Hello world");
  });

  it("User can enter a name and API will return page title", function() {
    celeb_summary.see_info("seth_rogen")
    expect(window.console.log).toHaveBeenCalled();
  });


});
