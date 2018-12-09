import { NgModule } from '@angular/core';
import { AllegroTableComponent } from './allegro-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { TableCellComponent } from './table-cell/table-cell.component';
import { CellHostDirective } from './cell-host.directive';


@NgModule({
  declarations: [AllegroTableComponent, TableCellComponent, CellHostDirective],
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule

  ],
  exports: [AllegroTableComponent]
})
export class AllegroTableModule { }
