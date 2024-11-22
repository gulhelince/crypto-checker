import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration,ChartType } from 'chart.js';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  coinData : any;
  coinId !: string;
  days : number = 1;
  currency : string = "INR";
  constructor(private api: ApiService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.coinId = val['id'];
    });
    this.getCoinData();
  }

  getCoinData(){
    this.api.getCurrencyById(this.coinId)
    .subscribe(res=>{
      this.coinData = res;
      console.log(this.coinData)
    })
  }



}
