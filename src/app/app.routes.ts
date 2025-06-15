import { Routes } from '@angular/router';


export const routes: Routes = [{
  path:'',
  pathMatch:'full',
  loadComponent:()=>{
    return import('./register/register').then((m)=>m.Register)
  }
}
];
