import { hello } from './hello';
import { describe,test,expect } from '@jest/globals'

describe("test hello", () => {
    test("should return hello world", () => {
      expect(hello()).toBe("Hello world!");
    });
  });
