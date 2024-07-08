export interface Crud {
    name: String;
    email: String;
    Review:String;
    Ratings:number;

  }
  export interface Signup {
    username: String;
    email: String;
    password:String;
    confirm:String;
    gender:String;
    phone:number;

  }
  export interface FormDetails {
    Section: String;
    Domain: String;
    About: String;
    Reference: String;
  }
  export interface Inspiration {
    name: String;
    your_ins: String;  
    
    }
    export interface complaint {
      name:string;
      emailid:string;
      phonenumber:Number;
      address:string;
      age:number;
      complaintdetails:string;
  }
  
  export interface login{
    email : String;
    password: String;
  }
  export interface share1{
    title:String;
    name:String;
    email:String;
    story:String;

  
  }
  export interface contact{
    
    name:String;
    email:String;
    message:String;

  
  }
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
 