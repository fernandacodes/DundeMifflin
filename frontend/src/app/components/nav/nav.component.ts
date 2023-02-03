import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  constructor(private route:ActivatedRoute, private router:Router){
  }
  id = this.route.snapshot.paramMap.get("userId");
  goToProducts():void{
    const url = "products"
    const baseurl = `/${this.id}/${url}`;
    this.router.navigate([baseurl])
  }
  goToProfile():void{
    const url = "profile"
    const baseurl = `/${this.id}/${url}`;
    this.router.navigate([baseurl])
  }
  goToOut():void{
    this.router.navigate([""])
  }
  goToMeusPedidos():void{
    const url = "meuspedidos"
    const baseurl = `/${url}/${this.id}`
    this.router.navigate([baseurl])
  }
}
