import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
  standalone: false
  
})
export class ShoppingCartPage implements OnInit {

  products: any[] = [];
  total: number = 0;
  subTotal: number = 0;

  presentingElement!: HTMLElement | null;

  nombre: string = '';
  apellido: string = '';
  pais: string = '';
  direccion: string = '';
  creditCard: number | undefined;
  cvc: number | undefined;
  fechaDeVencimiento: Date | null = null;
  email: string = '';

  constructor(
    private carritoSvc: CarritoService,
    private actionSheetCtrl: ActionSheetController,
    private toastController: ToastController,
    private personalDataSvc: PersonalDataService,
    private router: Router

  ) { }

  ngOnInit() {
    this.products = this.carritoSvc.getCartProducts();
    console.log(this.products);
    this.subTotal = this.getSubTotal();
    this.total = this.getTotal();
    this.presentingElement = document.querySelector('.ion-page');
    
  }

  getSubTotal(): number {
    return this.products.reduce((acc, product) => acc + product.price * product.cantidad, 0);
  }
  
  getTotal(): number {
    return this.subTotal * 0.19;
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿Estas seguro?',
      buttons: [
        {
          text: 'Sí',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  onSubmit(){
    const personalData = {
      nombre: this.nombre,
      apellido: this.apellido,
      pais: this.pais,
      direccion: this.direccion,
      creditCard: this.creditCard,
      cvc: this.cvc,
      fechaDeVencimiento: this.fechaDeVencimiento,
      email: this.email,
      total: this.total
    };


    this.presentToast("top");
    this.personalDataSvc.addToPersonalData(personalData);

    setTimeout(() => {
      this.router.navigate(['/load']);
    }, 1500);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Transaccion en proceso',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
