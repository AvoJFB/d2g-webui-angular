import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RedComponentComponent } from '../red-component/red-component.component';
import { PriceComponent } from '../price/price.component';

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
      headerName: 'Category',
      field: 'category',
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
      cellRendererFramework: PriceComponent,
      editable: true,
    },
  ];

  constructor() {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: [
        {name: 'iPhone 5S', category: 'Smartphones', store: 'Comfy', price: 299},
        {name: 'Google Pixel', category: 'Smartphones', store: 'Foxtrot', price: 599},
        {name: 'Playstation 4 Pro', category: 'Gaming Console', store: 'Eldorado', price: 349}
      ],
      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
      }
    };
  }

  ngOnInit() {
  }

}
