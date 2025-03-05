import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: any[] = [];
  private cartItemCount$ = new BehaviorSubject<number>(0);

  constructor() {
    this.cargarProductosDesdeStorage();
  }

  private cargarProductosDesdeStorage(): void {
    const productosGuardados = localStorage.getItem('productos');
    this.productos = productosGuardados ? JSON.parse(productosGuardados) : [];
    this.actualizarContador();
  }

  private actualizarContador(): void {
    this.cartItemCount$.next(this.productos.length);
  }

  getCartItemCount() {
    return this.cartItemCount$.asObservable();
  }

  addToCart(producto: any): void {
    this.productos = [...this.productos, producto];
    this.guardarProductosEnStorage();
  }

  removeFromCart(productoId: number): void {
    this.productos = this.productos.filter(p => p.id !== productoId);
    this.guardarProductosEnStorage();
  }

  clearCart(): void {
    this.productos = [];
    localStorage.removeItem('productos');
    this.actualizarContador();
  }

  getCartProducts(): any[] {
    return [...this.productos];
  }

  private guardarProductosEnStorage(): void {
    localStorage.setItem('productos', JSON.stringify(this.productos));
    this.actualizarContador();
  }
}