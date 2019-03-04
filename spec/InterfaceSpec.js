describe("CelebSummary", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("User can enter a name and API will return page title", function() {
    expect(celeb_summary.see_info("Avril Lavigne")).toBeUndefined()
  });


});
