// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
function wrapAdjective(wrap = "*") {
  const inner = function (me = "special") {
    return `You are ${wrap}${me}${wrap}!`;
  };
  return inner;
}
let mess = wrapAdjective("%")("a dedicated programmer");
console.log(mess);
