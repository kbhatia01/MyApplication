import { studentGuardian } from "./guardian";

export class User {  [x: string]: any;
   

   public pk_student_id:number;
   public name:string;
   public title:string;
   public summary:string;
   public picture:string;
   public login_email:string;
   public login_password:string;
   public cellphone:string; 
   public homephone:string;
   public aadhar_number:number;
   public pan:number;
   public facebook_url:string;
   public linkedin_url:string;
   public skype_username:string;
   public twitter_handle:string;
   public is_active:boolean;
   public is_deleted:boolean;
   public fk_institute_id:number;
   public fk_branch_id:number;
   public roll_number:string;
   public gender:string;
   public date_of_birth:string;
   public current_address:string;
   public permanent_address:string;
   public student_state:string;
   public status:string;
   public student_guardian:studentGuardian;
   
   
   
   

    
    constructor() {
    }

}