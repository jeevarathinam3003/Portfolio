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

  // Toggle the visibility of the menu
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  // Detect click or touch outside the menu
  // @HostListener('document:click', ['$event'])
  // @HostListener('document:touchstart', ['$event'])
  // handleOutsideClick(event: Event) {
  //   if (this.menuVisible && this.menuRef && !this.menuRef.nativeElement.contains(event.target)) {
  //     this.close();
  //   }
  // }

  // Detect scroll
  @HostListener('window:scroll', [])
  onScroll() {
    if (this.menuVisible) {
      this.close();
    }
  }

  close() {
    this.menuVisible = false;
  }
}
