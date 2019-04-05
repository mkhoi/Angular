import { Observable } from "rxjs/Rx";
import { User } from "./user";
export interface IUserService {
    getUsers(): Observable<User[]>;
    addUser(user: User): Observable<User>;
    updateUser(userId: number, user: User): Observable<User>;
    deleteUser(userId: number): Observable<User>;
} 