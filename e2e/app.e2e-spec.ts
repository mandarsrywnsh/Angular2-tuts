import { MandarTutsFirstPage } from './app.po';

describe('mandar-tuts-first App', () => {
  let page: MandarTutsFirstPage;

  beforeEach(() => {
    page = new MandarTutsFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
