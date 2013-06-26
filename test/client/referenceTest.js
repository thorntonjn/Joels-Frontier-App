var expect = chai.expect;

describe("reference", function() {
  it("should return 1", function() {
    var f = FS.TEST.get("reference").exports;
    expect(f()).to.equal(1);
  });
});