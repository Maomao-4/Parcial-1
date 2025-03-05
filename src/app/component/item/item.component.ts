import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: false
})
export class ItemComponent implements OnInit {
  constructor(
    private carritoSvc: CarritoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
  }


  @Input() image: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() rating: number = 0;
  @Input() price: string = '';
  @Input() description?: string = '';
  @Input() param?: number = 0;
  @Input() id: number = 0;
  @Input() cantidad: number = 0;

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

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto borrado!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  delateFromCart( id: number){
    this.carritoSvc.removeFromCart(id); 
    this.presentToast("top");
    setTimeout(() => {
      window.location.reload();
    }, 1501);
  }
}
