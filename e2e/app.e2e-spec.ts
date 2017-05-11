import { MeanAppBasePage } from './app.po';

describe('mean-app-base App', () => {
  let page: MeanAppBasePage;

  beforeEach(() => {
    page = new MeanAppBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
