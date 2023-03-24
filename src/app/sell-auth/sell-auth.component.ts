import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-sell-auth',
  templateUrl: './sell-auth.component.html',
  styleUrls: ['./sell-auth.component.css']
})
export class SellAuthComponent implements OnInit {

  constructor(private seller:SellerService,private router:Router){}
 
  showLogin=false;

  // signUp=new FormGroup({
  //   'Name':new FormControl(''),
  //   'Password':new FormControl(''),
  //   'Email':new FormControl('')
  // })
   
  // signIn=new FormGroup({
  //   'Email':new FormControl(''),
  //   'Password':new FormControl('')
  // })
  ngOnInit(): void {
    
  }
 openLogin(){
  this.showLogin=true;
 }
 openSignUp(){
  this.showLogin=false;
 }
  
}
