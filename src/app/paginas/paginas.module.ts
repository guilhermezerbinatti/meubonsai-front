import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginaComponent } from './paginas.component';
import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        PaginasRoutingModule,
        TranslateModule
    ],
    exports: [
        PaginasRoutingModule
    ],
    declarations: [
        PaginaComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class PaginasModule { }
