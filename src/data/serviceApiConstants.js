const BASE_API = 'https://proj.ruppin.ac.il/bgroup16/test2/api/';

//Suppliers API
export const GET_SUPPLIERS = BASE_API + 'suppliers/GetSuppliers';

//Users API
export const GET_USERS = BASE_API + 'users/GetUsers';
export const GET_USER_BY_ID=(id)=> BASE_API + 'users/GetUser/' + id;;

//Products API
export const GET_ALL_PRODUCTS = BASE_API + 'rawproducts/GetRawProducts';
export const GET_PRODUCTS_BY_SUPPLIER_ID=(id)=> BASE_API + 'rawproducts/GetRawProductsBySupplier/' + id;

//Orders API
export const GET_ORDERS = BASE_API + 'orders/GetOrders';
export const ADD_ORDER = BASE_API + 'orders/AddOrder';

//Dashboard API