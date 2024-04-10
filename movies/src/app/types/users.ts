export interface User {
  email: string;
  password: string;
  _createdOn: number;
  _id: string;
  accessToken: string ;
}

export interface UserForAuth{
    username:string;
    email:string;
    tel:string;
    password:string;
    id:string;
}

export interface ProfileDetails{
  username:string;
  email:string;
  tel:string;
}
