var expect = chai.expect;

describe("SamplePresenter", function() {
  var el, sut;

  beforeEach(function() {
     el = $("<div></div>").appendTo("body")[0];
     sut = FS.TEST.get("SampleAssembly", "SamplePresenter");
  });

  afterEach(function() {
    $(el).remove();
    FS.TEST.set("SampleAssembly", "sharedVarAcrossControlInstances", 0);
  });

  it("should create instance", function() {
    var presenter = new sut(el, {});

    expect(presenter.privateVarToThisControlInstance).to.equal(0);
    expect(presenter.config).to.be.an('object');
    expect(presenter.config).to.have.property('bgColor', "#0f0");
    expect(presenter.privateVarToThisControlInstance).to.equal(0);
    expect(presenter.view).to.exist;
  });

  it("should increment values", function() {
    var presenter = new sut(el, {});

    presenter.incrementValues();

    expect(presenter.privateVarToThisControlInstance).to.equal(1);
    expect(FS.TEST.get("SampleAssembly", "sharedVarAcrossControlInstances")).to.equal(1);
  });

  it("private vars should increment separately", function() {
    var presenter1 = new sut(el, {}),
        presenter2 = new sut(el, {});

    presenter1.incrementValues();

    expect(presenter1.privateVarToThisControlInstance).to.equal(1);
    expect(presenter2.privateVarToThisControlInstance).to.equal(0);
    expect(FS.TEST.get("SampleAssembly", "sharedVarAcrossControlInstances")).to.equal(1);
  });

  it("shared vars should increment together", function() {
    var presenter1 = new sut(el, {}),
        presenter2 = new sut(el, {});

    presenter1.incrementValues();
    presenter1.incrementValues();
    presenter2.incrementValues();

    expect(presenter1.privateVarToThisControlInstance).to.equal(2);
    expect(presenter2.privateVarToThisControlInstance).to.equal(1);
    expect(FS.TEST.get("SampleAssembly", "sharedVarAcrossControlInstances")).to.equal(3);
  });
});