import { TestComponent } from './test/test.component';
import { Component, OnInit } from '@angular/core';
import { ColumnConfig, sortDirections, filedType } from 'projects/allegro-table/src/lib/models/col';
import { MatTableDataSource } from '@angular/material/table';



export interface DataType {
  product: string;
  description: string;
}

export const data = [
  {
    product: 'Mouse',
    description: 'Fast and wireless',
    experiment: '',
    status: 'pending'
  },
  {
    product: 'Keyboard',
    description: 'Loud and Mechanical',
    experiment: '',
    status: 'pending'
  },
  {
    product: 'Laser',
    description: 'It\'s bright',
    experiment: 'bla bla',
    status: 'pending'
  },
  {
    product: 'Baby food',
    description: 'It\'s good for you',
    experiment: 'bla bla',
    stauts: 'published'
  },
  {
    product: 'Coffee',
    description: 'Prepared from roasted coffee beans',
    experiment: 'bla bla',
    stauts: 'published'
  },
  {
    product: 'Cheese',
    description: 'A dairy product',
    experiment: { data: { itay: 'zain katan' } },
    stauts: 'published'
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  columns: ColumnConfig[] = [
    {
      name: 'product',
      displayName: 'Product',
      type: filedType.string,
      isSort: true,
      sortActive: sortDirections.asc
    },
    {
      name: 'description',
      displayName: 'Description',
      type: filedType.string,
    },
    {
      name: 'experiment',
      displayName: 'Experiment',
      type: filedType.component,
      component: { component: TestComponent, data: { itay: 'Zain' } }
    },
    {
      name: 'status',
      displayName: 'Status',
      type: filedType.enum,
      options: [
        { name: 'draft', displayName: 'Draft', selected: false },
        { name: 'pending', displayName: 'Pending', selected: true }
      ]
    }
  ];

  data: MatTableDataSource<DataType> = new MatTableDataSource(data);

  ngOnInit(): void {
    console.log(this.columns);
  }

  loadMore() {
    console.log(1);
  }

  selected(selected) {
    console.log(selected);
  }

  onFilter(event) {

  }

  onSort(event) {
    console.log(event);
  }

  rowClicked(event) {
    console.log(event);
  }

  onColumnFiltered(event) {
    console.log(this.columns);
    console.log(event);
  }

  rowRightClicked(event) {
    console.log(event);
  }

}
