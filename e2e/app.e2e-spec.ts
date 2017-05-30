import { D2gWebuiAngularPage } from './app.po';

describe('d2g-webui-angular App', () => {
  let page: D2gWebuiAngularPage;

  beforeEach(() => {
    page = new D2gWebuiAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
