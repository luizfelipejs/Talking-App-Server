export interface Iresponse {
  json: (body?: any) => any;
  status: (code?: any) => any;
}