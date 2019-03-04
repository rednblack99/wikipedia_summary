describe("Feature", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("User can enter a name and API will return page title", function() {
    spyOn(console, 'log');
    celeb_summary.see_info("seth_rogen")
    expect(console.log).toHaveBeenCalled();
  });

});
