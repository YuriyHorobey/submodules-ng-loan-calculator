import { NgLoanCalculatorPage } from './app.po';

describe('ng-loan-calculator App', () => {
  let page: NgLoanCalculatorPage;

  beforeEach(() => {
    page = new NgLoanCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
