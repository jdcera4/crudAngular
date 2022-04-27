import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/api/data.service';
import { CrearPersonajeService } from '../services/crearPersonaje/crear-personaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes: any = [];

  constructor(private dataService: DataService, private crearPersonaje: CrearPersonajeService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(res => {
      this.personajes = res;
    },
    err => console.log(err)
    )

    this.crearPersonaje.emitData.subscribe(data => console.log(data)),
      (err: any) => console.log(err)
  }

  deletePersonaje(array: any){
    const newArray = this.personajes.results.filter((item: any) => item !== array);
    this.personajes.results = newArray;
  }

  addPersonaje() {

  }

}
