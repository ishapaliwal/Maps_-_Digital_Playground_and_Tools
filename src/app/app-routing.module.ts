import { Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'zoning', pathMatch: 'full' },
    // { path: 'zoning', loadChildren: () => import('./features/zoning/zoning.module').then(m => m.ZoningModule) },
];

export class AppRoutingModule { }