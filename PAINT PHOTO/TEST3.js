// 적정 인구 구하기
/*
initial year: 2000
initial population: 8
initial age: 0
initial birth age: 40
initial depth age: 120
population extinction period: 280
year    population    population birth    distribution
2000    8             0                   (age 0: 8)
2040    12            4                   (age 0: 4, age 40: 8)
2080    14            2                   (age 0: 2, age 40: 4, age 80: 8)
2120    15            1                   (age 0: 1, age 40: 2, age 80: 4, age 120: 8)
2160    7             0                   (age 0: 0, age 40: 1, age 80: 2, age 120: 4)
2200    3             0                   (age 0: 0, age 40: 0, age 80: 1, age 120: 2)
2240    1             0                   (age 0: 0, age 40: 0, age 80: 0, age 120: 1)
2280    0             0                   (age 0: 0, age 40: 0, age 80: 0, age 120: 0)
*/
/**
 * @param {*} num1 initial year
 * @param {*} num2 initial population
 * @param {*} num3 initial age
 * @param {*} num4 initial child birth age(man, girl)
 * @param {*} num5 count
 * @param {*} num6 initial depth age
 * @return string
 */
function 
fun1
(
  num1,
  num2,
  num3,
  num4,
  num5,
  num6
)
{
  let 
  num7 
  =
  num1
  num8 
  = 
  num2
  str1 
  = 
  ""
  num8
  =
  num3
  str1 = str1 + "year\t\tpopulation\t\tadditional population\t\tdistribution population\n"
  while
  (
    true
  )
  {
    str1 
    = 
    str1
    +
    num7
    +
    "\t\t"
    +
    num8
    +
    "\t\t"
    
    num7 
    = 
    num7 
    + 
    num4
  }
}
fun1
(
  2000,
  8,
  0,
  40,
  1,
  120,
)
/*
initial year: 2000
initial population: 16
initial age: 0
initial birth age: 40
initial depth age: 120
initial population extinction period: 320
year    population    population birth    distribution
2000    16            0                   (0age: 16)
2040    24            8                   (0age: 8, 40age: 16)    
2080    28            4                   (0age: 4, 40age: 8, 80age: 16)
2120    30            2                   (0age: 2, 40age: 4, 80age: 8, 120age: 16)
2160    15            1                   (0age: 1, 40age: 2, 80age: 4, 120age: 8)
2200    7             0                   (0age: 0, 40age: 1, 80age: 2, 120age: 4)
2240    3             0                   (0age: 0, 40age: 0, 80age: 1, 120age: 2)
2280    1             0                   (0age: 0, 40age: 0, 80age: 0, 120age: 1)
2320    0             0                   (0age: 0, 40age: 0, 80age: 0, 120age: 0)
*/
