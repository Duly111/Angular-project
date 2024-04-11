import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/users';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    showEditMode:boolean = false;
    porfileDetails: ProfileDetails = {
      username:'',
      tel:'',
      email:'',
    }
   

    form = this.fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,emailValidator(EMAIL_DOMAINS)]],
      tel:[''],
    })

    constructor(private fb:FormBuilder,private userService:UserService){}

    ngOnInit(): void {
      const {username,email,tel} = this.userService.user!;

      this.porfileDetails = {
        username,
        tel,
        email,
      }

      this.form.setValue({username,email,tel})
    }

    onToggle():void{
      this.showEditMode = !this.showEditMode;
    }


    saveProfileHandler():void{
      if(this.form.invalid){
        return
      }

      this.porfileDetails = this.form.value as ProfileDetails;
      const {username,email,tel} = this.porfileDetails
      
      this.userService.updateProfile(username,email,tel).subscribe(() =>{
        this.onToggle();
      })
     
    }

    onCancel(e:Event){
      e.preventDefault();
      this.onToggle();
    }

}
