import {Position} from "../../position/position.entity";


export class CreatePermissionDto {
    id: number;

    viewOrder: boolean;

    sendOrder: boolean;

    viewDrawing: boolean;

    sendDrawing: boolean;

    takeResource: boolean;

    repairing: boolean;

    position: Position[];
}