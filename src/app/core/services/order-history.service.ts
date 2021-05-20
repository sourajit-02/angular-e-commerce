import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  displayedColumns: string[] = ['number', 'date', 'status', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
}

export interface PeriodicElement {
  number: string;
  total: string;
  status: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'pending',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'completed',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'pending',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'completed',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'pending',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'completed',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'pending',
    total: '$1,596.00 for 6 items',
  },
];
