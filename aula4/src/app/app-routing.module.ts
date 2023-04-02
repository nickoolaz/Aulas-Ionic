import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ngpage',
    loadChildren: () => import('./ngpage/ngpage.module').then( m => m.NgpagePageModule)
  },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'estilizacao',
    loadChildren: () => import('./estilizacao/estilizacao.module').then( m => m.EstilizacaoPageModule)
  },
  {
    path: 'exercicioest',
    loadChildren: () => import('./exercicioest/exercicioest.module').then( m => m.ExercicioestPageModule)
  },
  {
    path: 'detalhefilme',
    loadChildren: () => import('./detalhefilme/detalhefilme.module').then( m => m.DetalhefilmePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
