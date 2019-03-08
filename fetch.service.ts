import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  data: object = [
    {
        id : 1 ,
        firstname : ' somya  ',
        lastname : 'golchha',
        email : 'golchhasomya@gmail.com',
        phone_number : 8449104551,
        date_of_birth : ' 25/10/1996',
        designation : 'Software engineer'
    },
    {
      id : 2 ,
      firstname : ' sadiya',
      lastname : 'khan',
      email : 'sadiya@gmail.com',
      phone_number : 8171951825,
      date_of_birth : ' 03/08/1997',
      designation : 'Senior Assistant'
    },
    {
      id : 3 ,
      firstname : ' shivli',
      lastname : 'singh',
      email : 'Ssingh@gmail.com',
      phone_number : 7351808070,
      date_of_birth : ' 08/08/1996',
      designation : 'Artist'
    },
    {
      id : 4 ,
      firstname : ' tarisha',
      lastname : 'Bhimta',
      email : 'bhimtatarisha@gmail.com',
      phone_number : 86542461278,
      date_of_birth : '8/11/1999',
      designation : 'dancer'
    },
    
] ;
setData( content){
  content = this.data ;
}
getData(){
  return this.data;
}
getColumns() {
  return Object.keys(this.data[0]);
}
}
