var expect = chai.expect;

describe("SampleAssembly", function() {
  it("should by true", function() {
    var sut = FS.TEST.get("SampleAssembly");
    expect(sut).to.be.an('object');
  });
});