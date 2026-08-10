import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

  @ViewChild('menuContainer') menuRef!: ElementRef;

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.menuVisible) {
      this.close();
    }
  }

  close() {
    this.menuVisible = false;
  }

  // Smooth scroll method for floating contact button
  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
