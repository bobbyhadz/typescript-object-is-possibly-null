export { };

// Object is possibly 'null' error in TypeScript

// EXAMPLE 1 - Use the optional chaining (?.) operator to solve the error

type Employee = {
  address: {
    country: string;
    city: string;
  } | null;
};

const emp: Employee = {
  address: null,
};

// ✅ No errors
console.log(emp?.address?.country); // 👈️ using optional chaining

// ---------------------------------------------------

// // EXAMPLE 2 - Use a type guard to solve the error

// type Employee = {
//   address: {
//     country: string;
//     city: string;
//   } | null;
// };

// const emp: Employee = {
//   address: null,
// };

// // 👇️ check if not null or undefined
// if (emp.address != null) {
//   console.log(emp.address.country);
//   console.log(emp.address.city);
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Use a non-null (!) assertion to solve the error

// type Employee = {
//   address: {
//     country: string;
//     city: string;
//   } | null;
// };

// const emp: Employee = {
//   address: {
//     country: 'Germany',
//     city: 'Hamburg',
//   },
// };

// console.log(emp.address!.country); // 👉️ "Germany"

// ---------------------------------------------------

// // EXAMPLE 4 - Use the logical AND (&&) operator to solve the error

// type Employee = {
//   address: {
//     country: string;
//     city: string;
//     num?: number;
//   } | null;
// };

// const emp: Employee = {
//   address: null,
// };

// if (
//   emp.address &&
//   typeof emp.address.num === 'number' &&
//   emp.address.num > 50
// ) {
//   console.log('success');
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Using the `typeof` operator to solve the error

// type Employee = {
//   address: {
//     country: string;
//     city: string;
//   } | null;
// };

// const emp: Employee = {
//   address: null,
// };

// if (emp.address && typeof emp.address.country === 'string') {
//   // 👉️ emp.address.country is type string here
//   console.log(emp.address.country.toUpperCase());
// }