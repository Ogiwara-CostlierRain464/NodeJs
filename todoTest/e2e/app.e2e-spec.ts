import { TodoTestPage } from './app.po';

describe('todo-test App', () => {
  let page: TodoTestPage;

  beforeEach(() => {
    page = new TodoTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
