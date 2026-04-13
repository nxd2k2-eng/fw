import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.html',
  styleUrl: './client.scss',
})
export class Client {
  selectedCategory = 'all';

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop Pro 15"',
      price: 25990000,
      image: 'https://via.placeholder.com/300x300?text=Laptop+Pro',
      category: 'electronics',
      rating: 4.8,
      reviews: 245,
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 2990000,
      image: 'https://via.placeholder.com/300x300?text=Headphones',
      category: 'electronics',
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 8990000,
      image: 'https://via.placeholder.com/300x300?text=Smartwatch',
      category: 'electronics',
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 4,
      name: 'Designer T-Shirt',
      price: 599000,
      image: 'https://via.placeholder.com/300x300?text=T-Shirt',
      category: 'fashion',
      rating: 4.3,
      reviews: 156,
    },
    {
      id: 5,
      name: 'Premium Sneakers',
      price: 1890000,
      image: 'https://via.placeholder.com/300x300?text=Sneakers',
      category: 'fashion',
      rating: 4.7,
      reviews: 234,
    },
    {
      id: 6,
      name: 'Stylish Backpack',
      price: 1290000,
      image: 'https://via.placeholder.com/300x300?text=Backpack',
      category: 'fashion',
      rating: 4.4,
      reviews: 98,
    },
    {
      id: 7,
      name: 'Coffee Maker Deluxe',
      price: 3490000,
      image: 'https://via.placeholder.com/300x300?text=Coffee+Maker',
      category: 'home',
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 8,
      name: 'LED Desk Lamp',
      price: 890000,
      image: 'https://via.placeholder.com/300x300?text=Desk+Lamp',
      category: 'home',
      rating: 4.6,
      reviews: 167,
    },
  ];

  categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'electronics', name: 'Điện Tử' },
    { id: 'fashion', name: 'Thời Trang' },
    { id: 'home', name: 'Gia Dụng' },
  ];

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(
      (p) => p.category === this.selectedCategory
    );
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(price);
  }
}
