import {User} from "../interfaces";

var id:number = 1;

export class UserModel implements User{
  public LoginName:string;
  public id:number;
  constructor(
    public FirstName:string,
    public LastName:string,
    public Address:string,
    public Nickname:string,
    public AvatarURL?:string,
    public Department?:number,
    public Office?:string,
    public Position?:number,
    public Suffix?:number,
    public ManagerId?:string,
    public AssistantId?:string,
    public Spouse?:string,
    public Groups?:JSON,
    public Skills?:JSON
  ){
    this.id=id++;
    this.LoginName = FirstName+"."+LastName+this.id;
  }
}
