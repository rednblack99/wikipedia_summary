describe("CelebSummary", function() {
  var celeb_summary;

  beforeEach(function() {
    celeb_summary = new CelebSummary();
  });

  it("see_info will return a promise object", function() {
    expect(celeb_summary.see_info("Avril Lavigne")).toEqual('[object Promise]')
  });

  it("see_info will throw error if argument is undefined", function() {
    expect( function(){ celeb_summary.see_info("") } ).toThrow(new Error("Please enter a celebrity name to search for"));
  });

});
