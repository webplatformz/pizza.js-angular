import { PizzaJsPage } from './app.po';

describe('pizza.js App', () => {
  let page: PizzaJsPage;

  beforeEach(() => {
    page = new PizzaJsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
