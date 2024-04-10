import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    showEditMode:boolean = false;

    porfileDetails: ProfileDetails = {
      username:'Jone Doe',
      tel:'123-123-123-123',
      email:'ivcho@abv.bg',
    }

    form = this.fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,emailValidator(EMAIL_DOMAINS)]],
      tel:[''],
    })

    constructor(private fb:FormBuilder){}

    onToggle():void{
      this.showEditMode = !this.showEditMode;
    }


    saveProfileHandler():void{

      
      if(this.form.invalid){
        return
      }

      this.porfileDetails = this.form.value as ProfileDetails;
      this.onToggle();
    }

    onCancel(e:Event){
      e.preventDefault();
      this.onToggle();
    }

}
