// Item.spec.js
import React from "react"
import { create } from "react-test-renderer"
import Item from "./Item/Item"

const testValue = "SomeTestValue"

describe("Item component", () => {

  test("TEST-1 it has the correct test value", () => {
    expect(testValue).toBe("SomeTestValue");
  });

  test("TEST-2: it has the correct test value", () => {
    //expect(testValue).toBe("SomeTestValue");
    expect(testValue).toBe("AnotherTestValue");
  });

});