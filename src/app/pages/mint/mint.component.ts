import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss'],
})
export class MintComponent implements OnInit {
  constructor() {
    $('#coin').click();
  }
  pkg1: number = 1050;
  pkg2: number = 4500;
  coinData = 'busd';
  coin = false;

  coinActive() {
    this.coin = !this.coin;
  }
  ngOnInit(): void {
    $(document).ready(() => {
        $("#coin1").click(()=>{
          this.coinData = 'busd';
        })
        $("#coin2").click(()=>{
          this.coinData = 'usdt';
        })
        $("#coin3").click(()=>{
          this.coinData = 'bnb';
        })

        if(this.coin == false){
          $(".coin").fadeIn();
        }
        else{
          $(".coin").fadeOut();
        }
      });
  }

}
