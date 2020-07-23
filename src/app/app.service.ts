import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
}) 
export class AppService { 

getUsers() { 
return this.http.get('https://v-edcaroexpressapi.azurewebsites.net:3000/users'); 
} 

constructor( 
private http: HttpClient 
) {} 
}
