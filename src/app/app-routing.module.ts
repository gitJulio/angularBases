import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'


const routes:Routes=[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'contact',
      component:ContactComponent
     },
     {
       path:'posts',
       loadChildren:'./pages/posts/posts.module#PostsModule'
     },
    {
      path:'**',
      redirectTo:'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
