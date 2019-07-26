import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'one', loadChildren: './page/one/one.module#OnePageModule' },
  { path: 'two', loadChildren: './page/two/two.module#TwoPageModule' },
  { path: 'three', loadChildren: './page/three/three.module#ThreePageModule' },
  { path: 'four', loadChildren: './page/four/four.module#FourPageModule' },
  { path: 'five', loadChildren: './page/five/five.module#FivePageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule' },
  { path: 'score', loadChildren: './score/score.module#ScorePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
