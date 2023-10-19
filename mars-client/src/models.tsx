export interface Country {
    id: string,
    name: string,
}

export interface Address {
    id: string,
    userId: string,
    street: string,
    houseNumber: string,
    city: string,
    postalCode: string,
    countryId: string,   
    country: Country,
}

export interface AddressFormState {
    userId: string,
    street: string,
    houseNumber: string,
    city: string,
    postalCode: string,
    countryId: string,
}

export interface PhoneNumber {
    id: string,
    userId: string,
    number: string,
}

export interface PhoneNumberFormState {
    userId: string,
    number: string,
}

export interface Email {
    id: string,
    userId: string,
    email: string,
}

export interface User {
    id: string,
    salutation: string,
    prefix: string,
    firstName: string,
    lastName: string,
    suffix: string,
    birthday: Date,
    emails: Email[],
    addresses: Address[],
    phoneNumbers: PhoneNumber[],
}

export interface UserFormState {
    title?: string,
    firstName: string,
    lastName: string,
    birthday?: Date,
    emails?: Email[],
    phoneNumbers?: PhoneNumberFormState[],
    addresses?: AddressFormState[], 
}