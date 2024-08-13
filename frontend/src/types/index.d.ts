export interface SidebarLink {
    route: string;
    label: string;
}

export interface Pricing {
    id:number;
    title:string;
    amountInMonth:string;
    amountInYear:string;
    description:string;
    features:string[]
}