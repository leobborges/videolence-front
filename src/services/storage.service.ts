import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private readonly errorMessage = 'Can\'t set undefined/null value to storage';

  setItem(key: string, value: any): void {
    this.checkValue(value);
    window.sessionStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return window.sessionStorage.getItem(key);
  }

  setObject(key: string, value: any): void {
    this.checkValue(value);
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  getObject(key: string): any {
    return JSON.parse(this.getItem(key));
  }

  getTypedObject<T>(key: string): T {
    return <T> this.getObject(key);
  }

  hasItem(key: string): boolean {
    return window.sessionStorage.getItem(key) != null;
  }

  removeItem(key: string): void {
    window.sessionStorage.removeItem(key);
  }

  private checkValue(value: object | string) {
    if (value === undefined || value === null) {
      throw new Error(this.errorMessage);
    }
  }
}