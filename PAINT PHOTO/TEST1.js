var fs1 
= 
require
(
  "fs"
)
var 
str11 
= 
"./fng3.png"
str12 
= 
"file: " + "\"" + str11 + "\""
buf1 
= 
fs1.readFileSync
(
  str11
)
console.log
(
  str12
)
let 
ar1 
= 
[

]
ar2 
= 
[

]
num1 
= 
0
num2 
= 
buf1.byteLength - 4 - 4 - 0 - 4
num3 
= 
num2 + 1         // IEND
num4 
= 
num2 + 4         // IEND:length
num5 
= 
num2 + 4 + 1     // IEND:chunk
num6 
= 
num2 + 4 + 4     // IEND:chunk:type(4byte)
num7 
= 
num2 + 4 + 4 + 1 // IEND:chunk:data(0byte)
num8 
= 
num2 + 4 + 4 + 4 // IEND:cyclic redundancy check(4byte)
num9 
= 
num8 + 1
num10 
= 
num9 + 1
str1 
= 
""
for 
(
  var 
  num11 
  of 
  buf1
)
{
  num1 
  = 
  num1 
  + 
  1
  ar1.push
  (
    num11
  )
  ar2.push
  (
    num11
  )
  if 
  (
    (
      (
        num1 
        == 
        8
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "signature: " 
    + 
    str2
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if 
  (
    (
      (
        num1 
        == 
        9
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "image header:" 
    + 
    "\n"
  }
  else if
  (
    (
      (
        num1 
        == 
        12
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "  length: " 
    + 
    str2
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        13
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "  chunk:" 
    + 
    "\n"
  }
  else if
  (
    (
      (
        num1 
        == 
        16
      )
    )
  )
  {
    let 
    str2
    =
    ""
    for 
    (
      var 
      num4 
      of 
      ar2
    )
    {
      str2 
      = 
      str2 
      + 
      String.fromCodePoint
      (
        num4
      )
      + 
      " "
    }
    str1 
    = 
    str1 
    + 
    "    type: " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        17
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "    data(13byte): \n"
  }
  else if
  (
    (
      (
        num1 
        == 
        20
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      width(4byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        ==
        24
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      height(4byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        25
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      bit depth(1byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        26
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      color type(1byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 == 27
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      compression method(1byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        28
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      filter method(1byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        29
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      interlace method(1byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        33
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "      cyclic redundancy check(4byte): " 
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        34
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "image data: \n"
  }
  else if
  (
    (
      (
        num1 
        == 
        num2
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "  data"
    +
    "(" 
    + 
    ar2.length 
    + 
    "byte): "
    + 
    str2 
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        num3
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "image end:\n"
  }
  else if
  (
    (
      (
        num1 
        == 
        num4
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    +
    "  length: " 
    +
    str2
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        num5
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "  chunk:\n" 
  }
  else if
  (
    (
      (
        num1 
        == 
        num6
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "    type(4byte): " 
    + 
    str2
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 
        == 
        num7
      )
    )
  )
  {
    str1 
    = 
    str1 
    + 
    "    data(0byte):\n"
  }
  else if
  (
    (
      (
        num1 
        == 
        num8
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "    "
    +
    "CRC"
    +
    "("
    +
    "4"
    +
    "byte"
    +
    ")"
    +
    ":"
    +
    " "
    + 
    str2
    + 
    "\n"
    str1
    =
    str1
    + 
    "bytes"
    +
    ": "
    +
    ar1.length
    +
    "\n"
    var 
    bo1 
    = 
    ar1.length 
    == 
    buf1.byteLength 
    str1
    =
    str1
    + 
    "end"
    +
    ":"
    +
    " "
    +
    bo1
    +
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 == num9
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    = 
    str1 
    + 
    "etc"
    +
    ":"
    +
    " " 
    + 
    str2
    + 
    "\n"
    ar2 
    = 
    [

    ]
  }
  else if
  (
    (
      (
        num1 >= num10
      )
    )
  )
  {
    var 
    str2 
    = 
    fun2
    (
      ar2
    )
    str1 
    =
    str1 
    +
    " "
    + 
    str2
    ar2 
    = 
    [

    ]
  }
  // {
  //   length : 00 00 00 00 (0 byte),
  //   Chunk Type : IEND,
  //   Chunk Data (0 byte),
  //   CRC
  // }
  // total: 4 + 4 + 0 + 4
}
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// 12 - 12 == 0
console.log
(
  str1
)
function fun2
(
  arr1
)
{
  var ar2 
  = 
  arr1
  .
  map
  (
    num1 =>
    {
      var str1
      =
      num1
      .
      toString
      (
        10
      )
      .
      padStart
      (
        0, 
        "0"
      )
      return str1
    }
  )
  var str1
  =
  ar2
  .
  join
  (
    " "
  )
  .
  toUpperCase
  (

  )
  return str1
}
/*
format: PNG
signature: 89 50 4e 47 0d 0a 1a 0a
*/