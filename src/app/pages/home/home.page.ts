import { Component, OnInit } from '@angular/core';
import { MaomaoStoreService } from 'src/app/services/maomao-store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false

})
export class HomePage implements OnInit {

  products: any[] = [];
  
  constructor(
    
    private maomaoStoreSvc: MaomaoStoreService,
    private router: Router
    
  ) { }

  ngOnInit() {

    this.getProducts()
  }

  getProducts(cat?: string){

    this.maomaoStoreSvc.getProducts().subscribe({

      next: (res: any) => { 

        this.products = [];

        for (let product of res) {
          if (!cat || product.category === cat) { 
            this.products.push(product);
          }
        }

        console.log(this.products);
      },
      error: (error: any) => {
        console.error("Error al obtener productos", error);
      }
    })
  }

  viewProducts(id: number){
    this.router.navigate(['/detail', id])
  }

}
