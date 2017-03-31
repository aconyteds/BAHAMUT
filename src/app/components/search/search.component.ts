import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserSearchService } from '../../services/userSearch.service';
import { User } from '../../interfaces';

@Component({
  selector: 'search',
  styleUrls:["./search.css"],
  templateUrl: `./search.component.html`,
  providers:[UserSearchService]
})

export class SearchComponent implements OnInit{
  users: Observable<User[]>;
  private defaultUser:User;
  private legit:boolean;
  private searchTerms = new Subject<string>();

  constructor(
    private userSearchService: UserSearchService,
    private router: Router) {

    }
  inputHandler(keyCode:Number, value:string): void{
      if(keyCode === 13 && !!this.defaultUser) {
        this.gotoDetail(this.defaultUser);
      }
      else{
        this.searchTerms.next(value);
      }
    }
  // Push a search term into the observable stream.
  ngOnInit(): void {
    this.users = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.userSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<User[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<User[]>([]);
      });
    //When the value changes we need to modify the search button
    //Set a default user to go to if none is selected
    let subscription = this.users.subscribe(value => (
      this.legit=!!(value[0]&&value[0].Nickname),
       this.defaultUser=value[0]
     ));
  }
  gotoDetail(user: User): void {
    let link = ['/user', user.id];
    //this.searchBox.value=null;
    this.router.navigate(link);
  }
  search(){
    if(this.defaultUser){
      this.gotoDetail(this.defaultUser);
    }
  }
}
