import {Permission} from "../../permission/permission.entity";
import {MinLength} from "class-validator";


export class CreatePositionDto {
    @MinLength(5)
    name: string;

    permission: Permission;
}