export const required = (msg: any) => (x: any) => !x && msg;
export const min = (min: number) => (msg: any) => (x: string | any[]) => x.length >= min || msg;
export const max = (max: number) => (msg: any) => (x: string | any[]) => x.length <= max || msg;
export const minMax = (min: number, max: number) => (msg: any) => (x: string | any[]) =>(min <= x.length && x.length <= max) || msg;
export const email = (msg: any) => (x: string) => /\S+@\S+\.\S+/.test(x) || msg;

export const equal = (msg: any) => (...xs: any[]) => xs.every(x => x === xs[0]) || msg;

  





// Copy and Paste example rules with type definition --->
//
// export const required = (msg: string) => (x: any) => !x && msg
// export const min = (min: number) => (msg: string) => (x: any) =>
//   x.length >= min || msg
// export const max = (max: number) => (msg: string) => (x: any) =>
//   x.length <= max || msg
// export const minMax = (min: number, max: number) => (msg: string) => (x: any) =>
//   (min <= x.length && x.length <= max) || msg
// export const email = (msg: string) => (x: any) => /\S+@\S+\.\S+/.test(x) || msg
// export const equal =
//   (msg: string) =>
//   (...xs: any[]) =>
//     xs.every(x => x === xs[0]) || msg
