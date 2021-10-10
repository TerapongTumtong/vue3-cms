import { Permission } from "@/models/permission";
import {useStore} from "vuex";




export function canUsePermission(page: string,mode: string ) {
    const store = useStore();
    if(store.state.User.user.permissions!){
        return;
    }
    const add='add';
    const edit='edit';
    const del='delete';
    const search='search';
    let  permissions: Permission[] = [];
   
        permissions=JSON.parse(store.state.User.user.permissions|| '{}');
       
        permissions.forEach((element) => {
            if(element.page===page){
                switch (mode) {
                    case add:
                        return element.add;
                    case edit:
                         return element.edit;
                    case del:
                        return element.del;   
                    case search:
                         return element.search;   
                    default:
                        return false; 
                }
              
            }
        });
}



   


export async function mockLogin( user: string ) {
    // const router = useRouter();
    const model={
        first_name: 'mockName',
        last_name: 'mockLastName',
        email: user,
        permissions:[
            {page:'dashboard',view:true,add:true,edit:true,del:true,search:true},
            {page:'profile',view:true,add:true,edit:true,del:true,search:true}
        ]
       }
       localStorage.setItem('MockUser',JSON.stringify(model));

      // router.push('/');
}
  



