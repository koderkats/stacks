// Elem.spec.js
import React from "react"
import { create } from "react-test-renderer"
import Elem from "./Elem/Elem"

const testValue = "SomeTestValue"

describe("Elem component", () => {

  test("TEST-1 it has the correct test value", () => {
    expect(testValue).toBe("SomeTestValue");
  });

  test("TEST-2: it has the correct test value", () => {
    //expect(testValue).toBe("SomeTestValue");
    expect(testValue).toBe("AnotherTestValue");
  });

});