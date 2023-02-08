const str = `Turn off lights when you don't need them
Turn off water/sink when you don't need them
Walk or bike when you can instead of using a car`
console.debug(str.split("\n").map(e => `<li><a>${e}</a></li>`).join("\n"))
