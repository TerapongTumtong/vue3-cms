import { Permission } from "./permission";


export class User  {
    first_name: string;
    last_name: string;
    email: string;
    permissions: Permission[];

    constructor(first_name = '', last_name = '', email = '',  permissions: Permission[] = []) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.permissions = permissions;
        
    }


   
}
