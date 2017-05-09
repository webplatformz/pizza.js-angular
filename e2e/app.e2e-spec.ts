import { PizzajsAngularPage } from './app.po';

describe('pizzajs-angular App', () => {
  let page: PizzajsAngularPage;

  beforeEach(() => {
    page = new PizzajsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
