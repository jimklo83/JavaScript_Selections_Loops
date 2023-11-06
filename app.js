console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) 
{
    if (i % 2 != 0) 
    {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) 
{
    if (i % 3 == 0 && i % 5 == 0) 
    {
        console.log(`FizzBuzz[${i}]`)
    }
    else if (i % 3 == 0) 
    {
        console.log(`Fizz[${i}]`)
    }
    else if (i % 5 == 0) 
    {
        console.log(`Buzz[${i}]`)
    }
    else 
    {
        console.log(i)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3.1:\n==========\n");
let whileEnd = 0

while (whileEnd <= 99) 
{
    whileEnd++
    if (whileEnd % 2 != 0) 
    {
        console.log(whileEnd)
    }
}

console.log("EXERCISE 3.2:\n==========\n");
let doWhileEnd = 0

do 
{
    doWhileEnd++
    if (doWhileEnd % 3 == 0 && doWhileEnd % 5 == 0)
    {
        console.log(`FizzBuzz[${doWhileEnd}]`)
    }
    else if (doWhileEnd % 3 == 0) 
    {
        console.log(`Fizz[${doWhileEnd}]`)
    }
    else if (doWhileEnd % 5 == 0) 
    {
        console.log(`Buzz[${doWhileEnd}]`)
    }
    else 
    {
        console.log(doWhileEnd)
    }
}
while (doWhileEnd <= 99) 

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500))
let n = Math.round(Math.random() * (500 - 100) + 100)

for (let i = 0; i <= n; i++) 
{
    if (i == value) 
    {
        console.log(`Found value[${value}]!`)
        break
    }
    else if (i == n)
    {
        console.log(`Did not find value[${value}]`)
    }
}

//Exercise 5 Section
console.log("BONUS EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1)
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1)
let x = Math.round(Math.random() * (1000 - 1) + 1)
let start = Math.round(Math.random() * (10 - 1) + 1)

for (let i = start; i <= x; i++) 
{
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) 
    {
        console.log(`FizzBuzz[${i}]`)
    }
    else if (i % fizzDivisor == 0) 
    {
        console.log(`Fizz[${i}]`)
    }
    else if (i % buzzDivisor == 0) 
    {
        console.log(`Buzz[${i}]`)
    }
    else 
    {
        console.log(i)
    }
}
