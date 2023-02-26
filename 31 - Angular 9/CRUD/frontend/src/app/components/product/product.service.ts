import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { 

  }

  showMessage(msg: string, type?: 'success' | 'warn' | 'error' | 'info'):void{
    type = typeof type == 'undefined' ? 'success' : type
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass:[`msg-${type}`]
    })
  }
  
  errorHandler<T>(e: T):Observable<T>{
    this.showMessage("Ocorreu um erro!", "error")
    return EMPTY
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
      .pipe(
        map(obj=> obj),
        catchError(e => this.errorHandler(e))
      )
  }

  read(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl)
    .pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
    .pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product)
    .pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number):Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`)
    .pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    )
  }
}
