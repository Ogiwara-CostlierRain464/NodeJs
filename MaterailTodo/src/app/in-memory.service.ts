import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService{
  createDb(){
    let todoes = [
      {
        id: 0,
        title: "English",
        completed: false,
        createDate: Date.now()
      },
      {
        id: 1,
        title: "Math",
        completed: false,
        createDate: Date.now()
      },
      {
        id: 2,
        title: "Japanese",
        completed: false,
        createDate: Date.now()
      },
      {
        id: 3,
        title: "Physics",
        completed: false,
        createDate: Date.now()
      },
      {
        id: 4,
        title: "IT",
        completed: false,
        createDate: Date.now()
      },
    ];
    return {todoes}
  }
}
