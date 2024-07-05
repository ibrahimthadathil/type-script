// infer types   :- it will auto matically detect the type of the varibale

//  let user = 'jas'
//  user = 34

// define type :- give the type of the varibale

// let user : String = 'Arun'
// let age : Number = 23
// let over18 : Boolean = true
// let skill : String[] = ['typing','design']
// let fruits : [] = ['apple','orange']        :- here can'not give empty array into the type it wont  read  the values

// let userName : {name:String ; age:Number}  = { name : 'ram' ,age :78 }    :- here we can see that we can give both type in to an object , and also in bteween ' ; ' to give multiple values

// interface 

// interface Details {
//     name:string;
//     age:Number;
//     valid:Boolean
// }


// // pre setting type

// let person : Details = {
// name:'kkk',
// age:12,
// valid : true

// }


//

 //   union  
 
//  let age : string | Number 
//  age = 'hgh'
// let temp : (String | Number )[] =[1,2,3,'kjh']


// function 

// interface card {
//     player : string ;
//     age : number;
//     fitness : boolean;
//     getTeam ?: () => void   
// }
// let player ={
//     player : 'junaid',
//     age:23,
//     fitness : true,

// }


// function details(player : card):String{
//  return player.player
// }
// function details(player : card):void{    // if ther is no return in the function we can give void 
// console.log(player.player);
 
// }

// details(player)


// named type  // we can give watever we want as a type 

// type status = 'pending' | 'faild' | 'completed'

// let  transaction : status = "completed"    // so here it only take the predifined type which we given


//function over load

// function sum(num1:number,num2:number):number {   // this normal case
//     return num1 + num2
// }

// sum(2,3)

// also we can use 'any' as any type , but it wont recommend beause it gives js behaviour loss the ts behaviuor

// function add (num1:any,num2:any):any{
//     return num1+num2
// }



// function add (num1:string ,num2:string):string;

// function add (num1:number ,num2:number):number;

// function add (num1:any , num2 :any):any{   
//     return num1+num2
// }
// add('2','2')
// add(2,2)
// after declaring like this it will check in the any function that the given type of the value is already declare or not 


///  generics 

// its more simplare than the function overloading 
// eg  1
// function add<T>(nm1:T):T{
//     return nm1
// }

// add<number>(2)

//eg 2
// type admin={
//     firstName : string;
//     age : number
// }
// type user={
//     Name : string;
//     age : number
// }

// function person<T>(user:T){
//     return user
// }

// const pers1 = {
//     Name:'ajil',
//     age:23
// }
// const adm1 ={
//     firstName : 'ajay',
//     age:22
// }


// person<user>(pers1)
// person<admin>(adm1)


// and also we can merge the two types and also remove the duplication of types:
// for example suppose you have name and age in both user and admin u can use like this:

// type user = {
//     name: String ;
//     age : number
// }

// type admin = user & {
//     roll : string
// }

//asper thid code it will take the user code to the admin too , not only adding two type we can add muliple

// also we can use this method in interface 

// interface admin {
//     name: string;
//     age : number
// }

// interface user extends admin {
//     role : string
// }

// enum : -


// enum is mainly using for define multiple values

// enum status{
//   PENDING,
//   COMPLETED,
//   FAILD
// }  // asper this code it will give numerics start from zero , if we want to string values we can assign the string 

// enum statusType {
//     PENDING='pending',
//     COMPLETED='completed',
//     FAILD='faild'
// }

// function he(message:string,status:statusType){
//     console.log(message,'==',status);
    
// }
// he('delivery',statusType.FAILD)


//  as const (type casting)  : -

// let userName = 'junaid' as const


//  

//  keyof and type of...........

// const statusTypees = {
//     PENDING : "pending",
//     COMPLETED : "completed" ,
//     FAILD : "faild"
// }

// function getstatus (order:string , status :keyof typeof statusTypees){
//     console.log(order,'=',statusTypees[status])
// }
// getstatus('12345','COMPLETED') 

// as per this declaration we can re-assign the values so that is not acceptable so we can give as const to protect them,
// when we put as const there it will be 

// const satustype = {
//     pending:'pending',
//     completed : 'completed',
//     faild : 'faild'
// } as const


//     utility type 

// type person = {
//     name :String;
//    readonly age :number;  // to seal the property from editing we can put readonly key
// }
// const userDetails : person = {
//     name:'ajil',
//     age:23
// }

//  userDetails.age=30  // if we dont put readonly key there then it will reset with the new value  
// console.log(userDetails.age);

// instead og giving every where readonly we can use like this

// const userDetails : readonly<person> ={
//     name : 'junaud',
//     age : 45
// }

// instead of giving every where ' ? ' we can use  'partial'

// type card ={
//     name: string;
//     age: number ;
//     role:string
// }

// const player1:Partial<card> = {
// name:'rahul'
// } //  here we can define only if needed


///             required
// oppdosite partial method all fields are required

// const user: Required<card> = {
//     name:'shan',
//     age:20,
//     role:'back'
// }


//      pick 

// to pick only specified field from the given type we can use pick

// type detail = {
//     name : string ;
//     age : number ;
//     underAged : boolean
// }

// const student : Pick<detail,'name'|'underAged'> ={
//     name:'sophi',
//     underAged:true
// }

///// omit 
// this one is using for to avoid a particular type from the given type 

// type id ={
//     name:string ;
//     gender : string ;
//     age : number ;
//     phone : number ;
//     verifiedUser : boolean
// }

// const employee : Omit<id , 'phone'> = {
//     // so here except the mentiond one (here is phone) every field is required
// }

                          // excluded
// this method is using for to avoid a option from a union type 
// type statustype = 'pending' | 'completed' | 'faild';
// const  message : Exclude<statustype,'pending'> = "completed"  // here only show the other values not shoow the excluded value


//      record 

// tis method is using for to set multiple key and values (like bunj of )
// so if there is large data it will take too may declaration so to avoid that we can use this

// type food = Record<string,any> ;

// const menu : food = {

//     burger:'veg',
//     pizza:90, // in every value field it also accept any type beause we declared any theere
// }


         // unknown and any 

// this two methods are using the case of not known value 
// but we can not use any all the case because it loss the ts  behaviour 
// unknown we can consider as unkow untill get the vlaue after that we can type cast that with the type
// eg :-\

    // let statuss : unknown = 'hello'

    // statuss as string  //  now it will be in strung


    // null  

    // it will set either null or the given value 

    // const word : string | null = null

    // function getword (){

    //     if(word){
    //         return 'working'
    //     }else if (word==null){
    //         return 'null'
    //     }
    // }
