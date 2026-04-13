import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.html',
  styleUrls: ['./client.scss'],
})
export class Client {
  readonly slides: Slide[] = [
    { src: '/img/claude.jpg', alt: 'Claude AI', title: 'Claude AI' },
    { src: '/img/Cursor.jpg', alt: 'Cursor AI', title: 'Cursor AI' },
    { src: '/img/copilot.jpg', alt: 'Copilot AI', title: 'Copilot AI' },
    { src: '/img/chatgpt.jpg', alt: 'ChatGPT', title: 'ChatGPT AI' },
  ];

  currentIndex = signal(0);

  get currentSlide(): Slide {
    return this.slides[this.currentIndex()];
  }

  get slideCount(): number {
    return this.slides.length;
  }

  goNext(): void {
    this.currentIndex.update((value) => (value + 1) % this.slides.length);
  }

  goPrev(): void {
    this.currentIndex.update((value) => (value - 1 + this.slides.length) % this.slides.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
