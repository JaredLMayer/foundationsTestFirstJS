describe("Hello", function() {
it("says 'Hello!'", function() {
  expect(hello()).toEqual("Hello!");
});

  it("says 'Hello, Scott!' if passed a name", function() {
    expect(hello("Scott")).toEqual("Hello, Scott")
  });
});
