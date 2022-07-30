import { v4 } from "uuid";

export class IdGenerator{

    generate=(): string=>v4();
}