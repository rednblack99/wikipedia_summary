describe("Feature", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("User can enter a name and API will return page title", function() {
    // spyOn(console, 'log');
    // celeb_summary.see_info("seth_rogen")
    // expect(console.log).toHaveBeenCalled();
    expect(celeb_summary.see_info("seth rogen")).toEqual('[object Promise]')
  });

  it("User can enter any celebrity name and API will return page title", function() {
    expect(celeb_summary.see_info("lady gaga")).toEqual('[object Promise]')
  });

  it("Throws an error if no name is entered", function() {
    expect( function(){ celeb_summary.see_info("") } ).toThrow(new Error("Please enter a celebrity name to search for"));
  });

});
