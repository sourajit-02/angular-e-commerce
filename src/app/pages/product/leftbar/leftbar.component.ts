import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss'],
})
export class LeftbarComponent implements OnInit {
  @Input() productList: Product[];
  public searchForm: FormGroup;
  public colorsForm: FormGroup;
  public pricesForm: FormGroup;
  public sizesForm: FormGroup;
  public colors: any[] = [];
  public prices: any[] = [];
  public sizes: any[] = [];
  public categories: any[] = [];
  public filteredList: Product[] = [];
  public filterFlag: boolean = false;
  public duplicateItems: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.getAllOptions();
    this.createForm();
    this.checkFlag();
  }
  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]],
    });
    this.colorsForm = this.formBuilder.group({
      colors: new FormControl(false),
    });
    this.pricesForm = this.formBuilder.group({
      prices: new FormControl(false),
    });
    this.sizesForm = this.formBuilder.group({
      sizes: new FormControl(false),
    });
  }
  getError(error: string) {
    switch (error) {
      case 'search':
        return 'Enter something to search';
      default:
        return '';
    }
  }
  filterByColors(event: MatCheckboxChange, color: string) {
    console.log(this.colorsForm.value.colors);
    console.log(event.checked);
    this.getFilteredProducts(event.checked, 'color', color);

    console.log(this.filteredList);
  }
  filterByPrices(event: MatCheckboxChange, min: number, max: number) {
    console.log(this.pricesForm.value.prices);
    console.log(event.checked);
    if (event.checked === true) {
      this.getFilteredProducts(event.checked, 'price', min, max);
    }
  }
  filterBySizes(event: MatCheckboxChange, size: string) {
    console.log(this.sizesForm.value.sizes);
    console.log(event.checked);
    if (event.checked === true) {
      this.getFilteredProducts(event.checked, 'size', size);
    }
  }
  checkFlag() {
    if (this.filteredList.length === 0) {
      this.filterFlag = false;
    }
  }
  onSearch() {
    console.log(this.searchForm.value);
  }
  getFilteredProducts(
    check: boolean,
    key: string,
    value: string | number,
    value2?: number
  ) {
    const source = from(this.productList);
    switch (key) {
      case 'color':
        {
          source
            .pipe(
              filter((product) => product.productColor === value),
              toArray()
            )
            .subscribe((products) => {
              if (check === true) {
                for (const product in products) {
                  from(this.filteredList)
                    .pipe(
                      filter(
                        (item) => item.productId === products[product].productId
                      ),
                      toArray()
                    )
                    .subscribe((items) => {
                      //     if (this.duplicateItems.length === 0) {
                      //     this.duplicateItems = items;
                      //   } else {
                      //     for (const item in items) {
                      //       from(this.duplicateItems)
                      //         .pipe(
                      //           filter(
                      //             (data) =>
                      //               data.productId === items[item].productId
                      //           ),
                      //           toArray()
                      //         )
                      //         .subscribe((list) => {
                      //           if (list.length === 0) {
                      //             this.duplicateItems.push(items[item]);
                      //           }
                      //         });
                      //     }
                      // }
                      this.duplicateItems = items;
                      if (items.length === 0) {
                        this.filteredList.push(products[product]);
                      }
                    });
                }
                this.filterFlag = true;
                console.log(key);
                console.log(value);
              } else if (this.filteredList.length !== 0) {
                if (this.duplicateItems.length !== 0) {
                  for (const data in this.filteredList) {
                    from(this.duplicateItems)
                      .pipe(
                        filter(
                          (item) =>
                            item.productId === this.filteredList[data].productId
                        ),
                        toArray()
                      )
                      .subscribe((items) => {
                        // this.filteredList = items;
                      });
                  }
                }
              }
              this.checkFlag();
              console.log(this.filteredList);
              console.log(this.duplicateItems);
            });
        }
        break;
      case 'price':
        {
          source
            .pipe(
              filter(
                (product) =>
                  product.productPrice > value && product.productPrice < value2
              ),
              toArray()
            )
            .subscribe((products) => {
              for (const product in products) {
                this.filteredList.push(products[product]);
              }
              this.filterFlag = true;
              console.log(key);
              console.log(value);
              console.log(this.filteredList);
            });
        }
        break;
      case 'size':
        {
          source
            .pipe(
              filter((product) => product.productSize === value),
              toArray()
            )
            .subscribe((products) => {
              if (check === true) {
                for (const product in products) {
                  from(this.filteredList)
                    .pipe(
                      filter(
                        (item) => item.productId === products[product].productId
                      ),
                      toArray()
                    )
                    .subscribe((items) => {
                      if (items.length === 0) {
                        this.filteredList.push(products[product]);
                      }
                    });
                }
                this.filterFlag = true;
                console.log(key);
                console.log(value);
              } else if (this.filteredList.length !== 0) {
                from(this.filteredList)
                  .pipe(
                    filter((item) => item.productSize !== value),
                    toArray()
                  )
                  .subscribe((items) => {
                    if (items.length !== 0) {
                      if (this.duplicateItems.length === 0) {
                        this.duplicateItems = items;
                      } else {
                        for (const item in items) {
                          from(this.duplicateItems)
                            .pipe(
                              filter(
                                (data) =>
                                  data.productId === items[item].productId
                              ),
                              toArray()
                            )
                            .subscribe((list) => {
                              if (list.length === 0) {
                                this.duplicateItems.push(items[item]);
                              }
                            });
                        }
                        // this.filteredList = items;
                      }
                    }
                  });
              }
              this.checkFlag();
              console.log(this.duplicateItems);
              console.log(this.filteredList);
            });
        }
        break;
      default:
        console.log(key);
    }
  }
  getAllOptions() {
    this.colors = this.getLeftbarOptions('color');
    this.prices = this.getLeftbarOptions('price');
    this.sizes = this.getLeftbarOptions('size');
    this.categories = this.getLeftbarOptions('category');
  }
  getLeftbarOptions(key: string): any[] {
    let options: any[] = [];
    options = this.productService.getFilterOptions(key);
    return options;
  }
}
