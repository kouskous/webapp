import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Navigation} from 'app/core/navigation/navigation.types';
import {TranslocoService} from '@ngneat/transloco';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private _navigation: BehaviorSubject<Navigation> = new BehaviorSubject<Navigation>(this.getTranslatedNavigation());

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private translocoService: TranslocoService) {

        this.translocoService.langChanges$.subscribe(() => {
            this._navigation.next(this.getTranslatedNavigation());
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        return of(this.getTranslatedNavigation());
    }

    private getTranslatedNavigation(): Navigation {
        return {
            compact: [
                {
                    id: 'dashboard',
                    title: this.translocoService.translate('navigation.dashboard'),
                    type: 'basic',
                    icon: 'heroicons_outline:chart-pie',
                    link: '/dashboard'
                },
                {
                    id: 'estimates',
                    title: this.translocoService.translate('navigation.estimates'),
                    type: 'basic',
                    icon: 'heroicons_outline:calculator',
                    link: '/estimates'
                },
                {
                    id: 'invoices',
                    title: this.translocoService.translate('navigation.invoices'),
                    type: 'basic',
                    icon: 'heroicons_outline:document-duplicate',
                    link: '/invoices'
                },
                {
                    id: 'customers',
                    title: this.translocoService.translate('navigation.customers'),
                    type: 'basic',
                    icon: 'heroicons_outline:users',
                    link: '/customers'
                },
                {
                    id: 'products',
                    title: this.translocoService.translate('navigation.products'),
                    type: 'basic',
                    icon: 'heroicons_outline:users',
                    link: '/products'
                }],
            default: [],
            futuristic: [],
            horizontal: []
        };
    }
}
