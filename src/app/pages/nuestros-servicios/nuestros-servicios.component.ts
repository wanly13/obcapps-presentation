import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-servicios',
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.scss']
})
export class NuestrosServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isScrollTopVisible = false;

  toggleScrollTopButton() {
    this.isScrollTopVisible = (window.scrollY > 700);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  handleScrollTopClick() {

    const scrollTopButton = document.querySelector('.scroll-to-top');
    scrollTopButton?.classList.add('clicked');
    setTimeout(() => {
      scrollTopButton?.classList.remove('clicked');
      this.scrollToTop()
    }, 500);

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleScrollTopButton();
  }
}
