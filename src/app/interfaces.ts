export interface MenuOption {
  href:String;
  label:String;
}

export interface User{
  id:number;
  LoginName:string;
  FirstName:string;
  LastName:string;
  Address:string;
  Nickname:string;
  Department?:number;
  Office?:string;
  Position?:number;
  AvatarURL?:string;
  Suffix?:number;
  ManagerId?:string;
  AssistantId?:string;
  Spouse?:string;
  Password?:number;
  Groups?:JSON;
  Skills?:JSON;
}

export interface Phone{
  ID:number;
  LoginName?:string;
  Number:number;
  Type:string;
}

export interface Email{
  ID:number;
  LoginName?:string;
  Email:string;
  Type:string;
}

export interface Event{
  ID:number;
  LoginName?:string;
  Date:Date;
  Label:string;
}

export interface Position{
  ID:number;
  Label:string;
  Industry?:string;
}

export interface Department{
  ID:number;
  Label:string;
}
