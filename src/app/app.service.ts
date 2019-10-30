import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
}) 
export class AppService { 

getUsers() { 
return this.http.get('https://v-edcaronodejsbootcamp-api.azurewebsites.net/users'); 
} 

constructor( 
private http: HttpClient 
) {} 
}