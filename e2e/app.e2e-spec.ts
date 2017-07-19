import { TechintTablaSeguridad.WebPage } from './app.po';

describe('techint-tabla-seguridad.web App', () => {
  let page: TechintTablaSeguridad.WebPage;

  beforeEach(() => {
    page = new TechintTablaSeguridad.WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
