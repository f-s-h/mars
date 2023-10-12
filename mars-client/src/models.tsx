import { StringMappingType } from "typescript";

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
}

export interface PhoneNumber {
    id: string,
    userId: string,
    number: string,
}

export interface User {
    id: string,
    username: string, 
    email: string,
    title: string,
    firstName: string,
    lastName: string,
    birthday: Date,
}

export interface UserFormState {
    username?: string, 
    email?: string,
    title?: string,
    firstName: string,
    lastName: string,
    birthday?: Date,
}