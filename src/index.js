module.exports = function check(str, bracketsConfig) {

  let config = {};
  let stack = [];
  bracketsConfig.forEach(element => { config[element[1]] = element[0] });
  console.log(config);
  for (let i = 0; i < str.length; i++) {
    if (Object.values(config).indexOf(str[i]) > -1) {
      if (Object.keys(config).indexOf(str[i]) > -1 && str[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else
      if (config[str[i]] !== stack.pop()) {
        return false;
      }
  }
  return stack.length === 0;
}
