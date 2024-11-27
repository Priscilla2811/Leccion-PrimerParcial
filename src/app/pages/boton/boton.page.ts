import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-boton',
  templateUrl: './boton.page.html',
  styleUrls: ['./boton.page.scss'],
})
export class BotonPage implements OnInit {
  
  componentes: Componente[]=[
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
