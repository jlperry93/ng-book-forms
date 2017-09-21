import { NgBookFormsPage } from './app.po';

describe('ng-book-forms App', () => {
  let page: NgBookFormsPage;

  beforeEach(() => {
    page = new NgBookFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
