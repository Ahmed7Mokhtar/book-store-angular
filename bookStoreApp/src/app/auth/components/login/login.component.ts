import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  name:string = '';

  constructor(private route:ActivatedRoute, private router:Router) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(qParam => {
      this.name = qParam['name'];
    })
  }

  goToSignup(): void {
    this.router.navigate(['auth/signup'])
  }

  goToBookDetails(id:number, autherId:number): void {
    this.router.navigate(['public/book-details', id, 'auther', autherId,], 
                          {queryParams: {name: 'Ahmed', email: 'sample'}})
  }
}
