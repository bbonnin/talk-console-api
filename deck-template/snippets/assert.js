// Chrome
console.assert(expression, object)

// Firefox
console.assert(expression, 
	object1 [, object2, ...])
console.assert(expression, 
	message [, stringSubst1, ...])

// Example
let a = 42, b = 84
console.assert(a === b, 
	{ msg: "a and b not equal", a, b })
console.assert(a === b, 
	"a and b not equal: %d != %d", a, b)