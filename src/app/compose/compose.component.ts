import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../List';




@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})

export class ComposeComponent implements OnInit {
  mailbox:any=[

  ]
  form:any;

  
    constructor(
      private router:Router,
      private route:ActivatedRoute
    ) {
  
      this.form=new FormGroup(
        {
          tname:new FormControl("",Validators.required),
          mailcon: new FormControl("",Validators.required)
        }
      )
}

       sendMail()
    {
       let obj:any={
         info:this.form.value
       }
       List.mailbox.push(obj);
       console.log(List.mailbox);
     // let details:any=this.form.value;
      this.router.navigate(['./send'],{
     queryParams:{details:JSON.stringify(List.mailbox)}
      })
    }


    ngOnInit(): void {
      
      
    }
    
   
  }
