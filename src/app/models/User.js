"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id = 1;
var UserModel = (function () {
    function UserModel(FirstName, LastName, Address, Nickname, AvatarURL, Department, Office, Position, Suffix, ManagerId, AssistantId, Spouse, Groups, Skills) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.Nickname = Nickname;
        this.AvatarURL = AvatarURL;
        this.Department = Department;
        this.Office = Office;
        this.Position = Position;
        this.Suffix = Suffix;
        this.ManagerId = ManagerId;
        this.AssistantId = AssistantId;
        this.Spouse = Spouse;
        this.Groups = Groups;
        this.Skills = Skills;
        this.id = id++;
        this.LoginName = FirstName + "." + LastName + this.id;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=User.js.map