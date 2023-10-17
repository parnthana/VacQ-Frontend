export interface HospitalsResponse {
  count: number;
  data: Array<Hospital>;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
}
