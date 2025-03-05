import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,

})
export class CardComponent implements OnInit {
  constructor(
    private carritoSvc: CarritoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() rating: number = 0;
  @Input() price: string = '';
  @Input() description?: string = '';
  @Input() param?: number = 0;
  @Input() id?: string = '';
  cantidad: number = 1;

  getStars(rating: number): string[] {
    let stars: string[] = new Array(5).fill('far fa-star');
    let i = 0;

    while (rating >= 1 && i < 5) {
      stars[i] = 'fas fa-star';
      rating--;
      i++;
    }

    if (rating >= 0.5 && i < 5) {
      stars[i] = 'fas fa-star-half-alt';
    }

    return stars;
  }

  addCart() {

    const productoAAgregar = {
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image,
      rating: this.rating,
      cantidad: this.cantidad,
    };

    this.carritoSvc.addToCart(productoAAgregar);
    this.presentToast('top');
    setTimeout(() => {
      window.location.reload();
    }, 1501);
  }

  productC: any[] = [];

  mostarLocal() {
    this.productC = this.carritoSvc.getCartProducts();
    console.log(this.productC);

  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
