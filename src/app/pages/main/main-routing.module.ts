import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {LoginGuard} from '../../guards/login.guard';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
