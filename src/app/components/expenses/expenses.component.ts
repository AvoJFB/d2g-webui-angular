import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RedComponentComponent } from '../red-component/red-component.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  private gridOptions: GridOptions;
  columnDefs= [
    {
      headerName: 'Name',
      field: 'name',
      editable: true,
    },
    {
      headerName: 'Store',
      field: 'store',
      cellRendererFramework: RedComponentComponent,
      editable: true,
    },
    {
      headerName: 'Price',
      field: 'price',
      cellRendererFramework: RedComponentComponent,
      editable: true,
    },
  ];

  constructor() {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: [
        {name: 'iPhone 5S', store: 'Comfy', price: 299},
        {name: 'Google Pixel', store: 'Foxtrot', price: 599},
        {name: 'Playstation 4 Pro', store: 'Eldorado', price: 349}
      ],
      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
      }
    };
  }

  ngOnInit() {
  }

}
