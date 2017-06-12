import { Angular2DynamicMenuPage } from './app.po';

describe('angular2-dynamic-menu App', () => {
  let page: Angular2DynamicMenuPage;

  beforeEach(() => {
    page = new Angular2DynamicMenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
