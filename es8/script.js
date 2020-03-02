.padStart()// string methods to add padding
.padEnd()



const fun = (a, b, c, d, ) {
  console.log(a)
}

fun(1, 2, 3, 4, )


Object.values
Object.entries


let obj = {
  username0 : 'Santa',
  username1: 'Rudolph',
  username2: 'Mr. Grinch'
}

Object.keys(obj).forEach(value=> {
  console.log(value);
})

Object.entries(obj).forEach(value=> {
  console.log(value);
})

Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '')
});

// Async await