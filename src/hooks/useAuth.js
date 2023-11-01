import { useJwt } from "react-jwt";


function useAuth(){

    let user = {token:""}
    
    if(JSON.parse(localStorage.getItem("user")) != null){
        user = JSON.parse(localStorage.getItem("user"))
    }
    const { isExpired } = useJwt(user?.token);

    if(!isExpired){
        if(user === undefined){
            return({status:false, role:"", id:"", name:"", token:"", photo:""});
        }else{
     
            
            if(user?.login === true){
    
                return({status:true, id:user.id, name:user.name, token:user.token, role:user.role, photo:user.photo})
            }else{
                return({status:false, role:"", id:"", name:"", token:"", photo:""});
            }
        }
    }else{
        
        localStorage.removeItem("user");
        return({status:false, role:"", id:"", name:"", token:"", photo:""});
    }


}

export default useAuth;