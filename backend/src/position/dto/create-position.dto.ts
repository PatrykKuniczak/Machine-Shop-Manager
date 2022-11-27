import {Permission} from "../../permission/permission.entity";
import {MinLength} from "class-validator";
import {User} from "../../user/user.entity";


export class CreatePositionDto {
    @MinLength(5)
    name: string;

    permission: Permission;

    user: User[]
}