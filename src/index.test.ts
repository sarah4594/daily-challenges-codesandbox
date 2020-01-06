import {
  stringPeeler,
  vowelCounter,
  scrabbleCalulator,
  phoneNumberGenerator,
  wordSpinner
} from ".";

describe("stringPeeler", () => {
  it("should remove the 1st and last letter of a string", () => {
    const example1 = stringPeeler("a");
    const example2 = stringPeeler("it");
    const example3 = stringPeeler("Sarah");
    const example4 = stringPeeler("Sarah is awesome");
    expect(example1).toBe(undefined);
    expect(example2).toBe(undefined);
    expect(example3).toBe("ara");
    expect(example4).toBe("arah is awesom");
  });
});

describe("vowelCounter", () => {
  it("should count all variables in a string", () => {
    const example1 = vowelCounter("a");
    const example2 = vowelCounter("rhythm");
    const example3 = vowelCounter("Sarah is awesome");
    expect(example1).toBe(1);
    expect(example2).toBe(0);
    expect(example3).toBe(7);
  });
});

describe("scrabbleCalculator", () => {
  it("should add the letters to return a total value", () => {
    const example1 = scrabbleCalulator("SARAH");
    const example2 = scrabbleCalulator("SARAH*");
    const example3 = scrabbleCalulator("SARAH**");
    const example4 = scrabbleCalulator("S^ARAH");
    const example5 = scrabbleCalulator("SAID");
    const example6 = scrabbleCalulator("THAT");
    expect(example1).toBe(8);
    expect(example2).toBe(12);
    expect(example3).toBe(16);
    expect(example4).toBe(7);
    expect(example5).toBe(10);
    expect(example6).toBe(21);
  });
});

describe("phoneNumberGenerator", () => {
  it("should return a string in the form of a phone number", () => {
    const example1 = phoneNumberGenerator([7, 5, 7, 3, 3, 8, 5, 5, 6, 5]);
    expect(example1).toBe("(757) 338-5565");
    expect(() =>
      phoneNumberGenerator([7, 5, 7, 3, 3, 8, 5, 5, 6, 5, 5])
    ).toThrowError();
  });
});

describe("wordSpinner", () => {
  it("should spin any words 5 or more letters", () => {
    const example1 = wordSpinner("Sarah");
    const example2 = wordSpinner("Sarah is awesome");
    const example3 = wordSpinner("Sarah is awesome and Logan is not");
    expect(example1).toBe("haraS");
    expect(example2).toBe("haraS is emosewa");
    expect(example3).toBe("haraS is emosewa and nagoL is not");
  });
});
