import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pickup-call',
    loadChildren: () => import('./pages/pickup-call/pickup-call.module').then( m => m.PickupCallPageModule)
  },
  {
    path: 'my-pickup-calls',
    loadChildren: () => import('./pages/my-pickup-calls/my-pickup-calls.module').then( m => m.MyPickupCallsPageModule)
  },
  {
    path: 'pickup-call-card',
    loadChildren: () => import('./components/pickup-call-card/pickup-call-card.module').then( m => m.PickupCallCardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
