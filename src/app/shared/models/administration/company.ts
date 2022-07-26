import {Member} from './member';
import {Address} from '../common/address';

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
