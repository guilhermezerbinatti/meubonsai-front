import { MeubonsaiFrontPage } from './app.po';

describe('meubonsai-front App', () => {
  let page: MeubonsaiFrontPage;

  beforeEach(() => {
    page = new MeubonsaiFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
