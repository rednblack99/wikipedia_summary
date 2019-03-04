describe("Feature", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("User can enter a name and see name entered", function() {
    expect(celeb_summary.see_info("Joe Bloggs")).toEqual("Name: Joe Bloggs");
  });

});
