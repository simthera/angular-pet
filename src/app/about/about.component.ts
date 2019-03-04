import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    data: any = {};

    constructor(private http: Http) {
        console.log('Hello user');
        this.getUsers();
        this.getData();
    }
    getData() {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json());
    }
    getUsers() {
        this.getData().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }

}
