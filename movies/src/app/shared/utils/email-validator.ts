import { ValidatorFn } from "@angular/forms";

export function emailValidator(domain: string[]): ValidatorFn{
    //[A-Za-z0-9]+@(gmail.com|abv.bg)
    //[A-Za-z0-9]+@(gmail|abv).(com|bg)
    const domainStrings = domain.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@(gmail|abv).(${domainStrings})`);

    return (control)=>{

        const isEmailInvalid = control.value ==='' || regExp.test(control.value);
        // console.log("test regex " , isEmailInvalid , 'Control value: ',control.value);
        return isEmailInvalid ? null : {emailValidator : true};
    };
  }