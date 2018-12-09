import { CellHostDirective } from './../cell-host.directive';
import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { ColumnConfig } from '../models/col';

@Component({
  selector: 'al-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {

  @ViewChild(CellHostDirective) cellHost: CellHostDirective;

  @Input() row: object;
  @Input() column: ColumnConfig;
  @Input() data: any;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.initCell();
  }

  initCell() {
    const cellComponent = this.column.component.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cellComponent);
    const viewContainerRef = this.cellHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    const cell = componentRef.instance as any;
    cell.row = this.row;
    cell.column = this.column;
    cell.data = this.data;
  }

}
