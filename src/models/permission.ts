

export class Permission  {
    page: string;
    add: boolean;
    edit: boolean;
    search: boolean;
    view: boolean;
    del: boolean;

    constructor( page = '', add = false , edit = false , del = false , view = false , search = false ) {
      
        this.page = page;
        this.add = add;
        this.edit = edit;
        this.del = del;
        this.view = view;
        this.search = search;
    }
   
}
