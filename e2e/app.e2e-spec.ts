import { CodenryAngularPage } from './app.po';

describe('codenry-angular App', function() {
  let page: CodenryAngularPage;

  beforeEach(() => {
    page = new CodenryAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
