import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-paginas',
    templateUrl: './paginas.component.html',
    styleUrls: ['./paginas.component.scss']
})
export class PaginaComponent implements OnInit {
    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    }

}
