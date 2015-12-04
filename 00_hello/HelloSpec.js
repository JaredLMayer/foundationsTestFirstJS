// talk about function
describe("Hello", function() {
  it("says hello", function() {
    expect(hello()).toEqual("Hello!");
  });

  it("says hello to someone", function() {
    expect(hello("Jared")).toEqual("Hello, Jared!");
  });
});
