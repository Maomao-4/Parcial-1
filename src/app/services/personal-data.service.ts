import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  private personalData: any = null;

  constructor() {
    this.loadFromStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem('personalData', JSON.stringify(this.personalData));
  }

  private loadFromStorage(): void {
    const storedData = localStorage.getItem('personalData');
    this.personalData = storedData ? JSON.parse(storedData) : null;
  }

  addToPersonalData(datos: any): void {
    this.personalData = datos;
    this.saveToStorage();

  }

  getPersonalData(): any {
    this.loadFromStorage(); 
    return this.personalData;
  }

  clearPersonalData(): void {
    this.personalData = null;
    localStorage.removeItem('personalData');
  }
}
