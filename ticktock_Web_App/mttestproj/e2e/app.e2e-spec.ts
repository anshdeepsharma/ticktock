import { MttestprojPage } from './app.po';

describe('mttestproj App', function() {
  let page: MttestprojPage;

  beforeEach(() => {
    page = new MttestprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
