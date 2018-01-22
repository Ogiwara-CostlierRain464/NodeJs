import { MaterailTodoPage } from './app.po';

describe('materail-todo App', () => {
  let page: MaterailTodoPage;

  beforeEach(() => {
    page = new MaterailTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
