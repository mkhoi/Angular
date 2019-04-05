import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { User } from "./user";
import { UserService} from "./userService";
import { Router } from "@angular/router";

@Component({
    selector: "users",
    templateUrl: "src/users.html"
})
export class Users implements OnInit{
    private users: Observable<User[]>;
    constructor(private userService: UserService, private router: Router){ }

    private getUsers(): void{
        this.users = this.userService.getUsers();
    }

    public ngOnInit(): void {
        this.getUsers();
    }

    public onEditClicked(userId: number){
        this.router.navigate(["editUser", userId]);
    }

    public onDeleteClicked(userId: number) {
        this.userService.deleteUser(userId).subscribe();
        console.log("Delete Successfully!", userId);
    }
}