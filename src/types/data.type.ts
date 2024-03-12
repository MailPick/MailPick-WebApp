export interface EmailType {
  uid:string;
  from:string;
  to:string;
  subject:string;
  date:Date;
  body:{
    plain:string;
    html:string;
  };
  flags:string;
  id:string;
}

export interface AccountType {
  userId:string;
  account:string;
  identifyColor:string;
}