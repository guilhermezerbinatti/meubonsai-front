import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() img: string;
    @Input() descricao: string;
    @Input() nome: string;
    @Input() tipo: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {}
}
