export interface EmailType {
  uid:string;
  from:string;
  to:string;
  subject:string;
  date:string;
  body:{
    plain:string;
    html:string;
  };
  flags:string;
}

export interface AccountType {
  userId:string;
  account:string;
  identifyColor:string;
}