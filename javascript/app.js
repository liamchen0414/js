let days = ['Monday','Tuesday','Wednesday'];
console.log(days.push("Thursday"));
console.log(days.length);
console.log(days);
days[days.length] = "Friday";
console.log(days);
console.log(days.pop());
console.log(days.every((value) => typeof String));
console.log(days.filter((value) => value.includes("Mon")));
console.log(days.filter((value) => value.indexOf("Mon") >= 0));

const found = days.find(value => value.includes("why"));
console.log(found === undefined);
console.log(found);