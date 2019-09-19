import { Role } from "./role"; 

export class User { 
    id: number;
    email: string; 
    password: string; 
    role: Role; 
    token?: string; 
}