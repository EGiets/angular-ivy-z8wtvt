import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EmotesComponent } from './emotes/emotes.component';
import { ShrekComponent } from './shrek/shrek.component';

const routes:Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'shrek',component:ShrekComponent},
  {path:'emotes',component:EmotesComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
  export class AppRoutingModule{}
  
