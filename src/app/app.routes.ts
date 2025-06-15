import { Routes } from '@angular/router';


export const routes: Routes = [{
  path:'',
  pathMatch:'full',
  loadComponent:()=>{
    return import('./login/login').then((m)=>m.Login)
  }
}
];
