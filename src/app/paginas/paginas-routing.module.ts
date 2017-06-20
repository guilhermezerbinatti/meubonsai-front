import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './paginas.component';

const routes: Routes = [
    {
        path: '', component: PaginaComponent,
        children: [
            { path: 'dashboard', loadChildren: '../layout/dashboard/dashboard.module#DashboardModule' },
            { path: 'planta', loadChildren: '../paginas/cadastro/planta/planta-cadastro.module#PlantaCadastroModule' },
            { path: 'usuario', loadChildren: '../paginas/cadastro/usuario/usuario-cadastro.module#UsuarioCadastroModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule { }
