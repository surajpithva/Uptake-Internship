function toCamelCase(str) {
  return str.replace(/([_]\w)/g, function (g) {
    return g[1].toUpperCase();
  });
}

console.log(toCamelCase("hello_world")); // "helloWorld"
console.log(toCamelCase("my_name_is_john_doe")); // "myNameIsJohnDoe"

// const toCamelCase = function (name) {
//   console.log(name.replace("_",name){return name[1].toUpperCase();});
// };
// toCamelCase(suraj_pithva);
