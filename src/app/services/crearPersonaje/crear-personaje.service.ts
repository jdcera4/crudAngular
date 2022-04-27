import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearPersonajeService {
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
