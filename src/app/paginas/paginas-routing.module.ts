import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './paginas.component';

const routes: Routes = [
    {
        path: '', component: PaginaComponent,
        children: [
            { path: 'cadastro/planta', loadChildren: '../paginas/cadastro/planta/planta-cadastro.module#PlantaCadastroModule' },
            { path: 'cadastro/usuario', loadChildren: '../paginas/cadastro/usuario/usuario-cadastro.module#UsuarioCadastroModule' },
            { path: 'cadastro/sensor', loadChildren: '../paginas/cadastro/sensor/sensor-cadastro.module#SensorCadastroModule' },
            { path: 'cadastro/dispositivo', loadChildren: '../paginas/cadastro/dispositivo/dispositivo-cadastro.module#DispositivoCadastroModule' },
            { path: 'lista/planta', loadChildren: '../paginas/lista/planta/planta-lista.module#PlantaListaModule' },
            { path: 'lista/usuario', loadChildren: '../paginas/lista/usuario/usuario-lista.module#UsuarioListaModule' },
            { path: 'lista/sensor', loadChildren: '../paginas/lista/sensor/sensor-lista.module#SensorListaModule' },
            { path: 'lista/dispositivo', loadChildren: '../paginas/lista/dispositivo/dispositivo-lista.module#DispositivoListaModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule { }
