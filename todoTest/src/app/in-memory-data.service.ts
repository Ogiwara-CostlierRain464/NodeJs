import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todoes = [
      { id: 0,  message: 'Zero' },
      { id: 11, message: 'Mr. Nice' },
      { id: 12, message: 'Narco' },
      { id: 13, message: 'Bombasto' },
      { id: 14, message: 'Celeritas' },
      { id: 15, message: 'Magneta' },
      { id: 16, message: 'RubberMan' },
      { id: 17, message: 'Dynama' },
      { id: 18, message: 'Dr IQ' },
      { id: 19, message: 'Magma' },
      { id: 20, message: 'Tornado' }
    ];
    return {todoes};
  }
}
