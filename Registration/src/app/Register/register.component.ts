import { Component, OnInit } from '@angular/core';
import { Register } from '../shared/register';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date?:any;
  public register=new Register('','',this.date,'','','')


  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._service.userRegister(this.register).subscribe(
      value=>{
        console.log(value);
      },
      error=>{
        console.log(error);
      }
    )
  }
  
}
