import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
}) 
export class AppService { 

getUsers() { 
return this.http.get('http://localhost:3000/users'); 
} 

constructor( 
private http: HttpClient 
) {} 
}