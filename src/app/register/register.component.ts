import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userGroup=new FormGroup({

    fullname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])






  })

  constructor(private router:Router,
    private authService:AuthService) { }


  register(){
    const user=this.userForm.getRawValue();
    this.authService.register(user).subscribe(s=>this.router.navigate(['/login']))
  }

  ngOnInit(): void {
  }

}
