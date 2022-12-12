import {Address} from '../common/address';

export interface Customer {
    id?: string;
    corporateName?: string;
    firstname?: string;
    lastname?: string;
    address?: Address;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
    legalStatus?: string;
    business?: string;
    commercialRegisterNumber?: string;
    statisticalIdentificationNumber?: string;
    creationDate?: Date;
    updateDate?: Date;
}
