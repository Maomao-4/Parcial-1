import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  num: number = 0;

  constructor(private router: Router, private carritoSvc: CarritoService) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {

    this.carritoSvc.getCartItemCount().subscribe(count => {
      this.num = count;
    });
  }

  goToCart(){
    this.router.navigate(['/shopping-cart'])
  }
}
