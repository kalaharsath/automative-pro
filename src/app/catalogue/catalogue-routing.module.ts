import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';

const routes: Routes = [    {
        path: '', component: CatalogueComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' }
            
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogueRoutingModule { }
