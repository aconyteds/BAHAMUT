import { InMemoryDbService } from 'angular-in-memory-web-api';
import {UserModel} from "../../models/user";
export class UserData implements InMemoryDbService {
  createDb() {
    let users = [
      new UserModel("Bruce", "Wayne", "1 Gotham", "Batman", "http://findicons.com/files/icons/1293/the_batman_vol_1/128/batman.png"),
      new UserModel("Clark", "Kent", "Daily Planet", "Superman", "http://wfarm1.dataknet.com/static/resources/icons/set105/7ce3e2c.png"),
      new UserModel("Hal", "Jordan", "Oa",  "Green Lantern", "http://www.fancyicons.com/free-icons/101/hallowen-social/png/128/technorati_greenlantern_128.png"),
      new UserModel("Dwayne", "Johnson", "Florida",  "The Rock", "http://pm1.narvii.com/5787/4063bb92084dba660aa2feaf2de6271bdf516a49_128.jpg"),
      new UserModel("Diana", "Prince", "Amazon Island",  "Wonder Woman", "https://68.media.tumblr.com/avatar_d95dc245c2ca_128.png"),
      new UserModel("Arthas", "Menethil", "Icecrown Citadel",  "The Lich King", "https://a.wattpad.com/useravatar/ForTheLichKing01.128.992595.jpg"),
      new UserModel("Silvanis", "Windrunner", "Undercity", "The Banshee Queen", "http://a.ppy.sh/8220216_1460162409.png")
    ];
    return {users};
  }
}
