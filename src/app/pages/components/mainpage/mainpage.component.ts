import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

  constructor() {
    console.log("Jeeva");

  }

  showmenu(){

    let modal : any  = document.getElementById("smenu-modal");
    // if (modal != null){
      modal.style.display = "block"  
    // }

  }

  close(){
    const modal = document.getElementById("smenu-modal");
    if (modal != null){
      modal.style.display = "none"  
    }
  }

  // menubutton = document.getElementById("smenu")
  // menubutton.addEventListener("click", menushow);

  // options = document.getElementById("navbar")

  // function menushow() {
  //   options.style.display = "block"
  // }

  // options.addEventListener("mouseleave", menuhide);

  // function menuhide() {
  //   options.style.display = "none"
  // }
}
