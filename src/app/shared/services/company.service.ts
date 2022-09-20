import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Company} from '../models/administration/company';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../core/user/user.service';
import {User} from '../../core/user/user.types';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    user: User;
    companies: Company[] = [];
    private companyReplaySubject: BehaviorSubject<Company> = new BehaviorSubject<Company>(null);

    constructor(private httpClient: HttpClient, private userService: UserService) {
        this.userService.get().subscribe((user) => {
            this.user = user;
        });
    }

    getAll(): Observable<Company[]> {
        return this.httpClient.get<Company[]>(`${environment.backendUrl}/company-administration/companies?email=${this.user?.email}`).pipe(
            tap((companies) => {
                this.companies = companies;
            })
        );
    }

    get(): Observable<Company> {
        return this.companyReplaySubject.asObservable();
    }

    set(company: Company): void {
        return this.companyReplaySubject.next(company);
    }

    create(company: Company): Observable<Company> {
        return this.httpClient.post<Company>(`${environment.backendUrl}/company-administration/company`, company).pipe(
            tap((result: Company) => {
                this.companyReplaySubject.next(result);
            })
        );
    }
}
