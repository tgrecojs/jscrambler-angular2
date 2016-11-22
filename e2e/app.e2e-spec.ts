import { LazyLoadAppPage } from './app.po';

describe('lazy-load-app App', function() {
  let page: LazyLoadAppPage;

  beforeEach(() => {
    page = new LazyLoadAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
