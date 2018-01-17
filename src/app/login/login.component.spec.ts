import { LoginComponent } from './login.component';

describe('login compnent ' , () => {
  it("Should whatever" , () =>  {
    const result = new LoginComponent().compute(15)
    expect(result).toBe(true);
  });
})
