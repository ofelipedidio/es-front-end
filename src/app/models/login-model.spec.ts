import { LoginModel } from "./login-model";

describe("LoginModel", () => {
  it("should create an instance", () => {
    expect(new LoginModel("any", "any", true, true)).toBeTruthy();
  });
});
