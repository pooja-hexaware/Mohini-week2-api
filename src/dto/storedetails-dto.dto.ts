export class storeDetailsDto {
    
    storeId: Number; 
    menuId:Number;

    name: string; 
    orderId:string;
    description:string;
   location: {Latitude:string,Longitude:string,Address:string,City:string,Zipcode:string}; 
    
}