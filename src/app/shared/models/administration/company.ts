import {Address} from './address';
import {Member} from './member';

export interface Company {
    id?: string;
    corporateName?: string;
    business?: string;

    address?: Address;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;

    legalStatus?: string;
    capitalStock?: string;
    commercialRegisterNumber?: string;
    statisticalIdentificationNumber?: string;
    taxArticleNumber?: string;
    taxIdentificationNumber?: string;

    members?: Member[];
}
