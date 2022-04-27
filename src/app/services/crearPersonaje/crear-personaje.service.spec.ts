import { TestBed } from '@angular/core/testing';

import { CrearPersonajeService } from './crear-personaje.service';

describe('CrearPersonajeService', () => {
  let service: CrearPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
