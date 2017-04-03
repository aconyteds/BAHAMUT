import {MenuOption} from "./interfaces";

export class  Config{
  static readonly title:string = "BAHAMUT";
  static readonly menuOptions: MenuOption [] = [
    {
      href: "user/new",
      label: "New User"
    },{
      href:"/",
      label:"Directory"
    }
  ];
  static readonly suffixes: string[] = ["Sr.", "Jr.", "I", "II", "III"];
}
