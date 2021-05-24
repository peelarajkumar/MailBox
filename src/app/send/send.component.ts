import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup , FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
 details:any
 myDate:any
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
       console.log(params);
       this.details=JSON.parse((params.details));
       this.myDate = Date.now();
    })
  }

}
