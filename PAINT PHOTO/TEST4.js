var Comparison2 = {}
Comparison2["LessThan"] = -1
Comparison2[Comparison2["LessThan"]] = "LessThan"
var Comparison3 = Comparison2[Comparison2["LessThan"]]
console.log("Comparison2:", Comparison2)
console.log("Comparison3:", Comparison3)

var ar1 = ""
var st1 = undefined
switch
(
	ar1
)
{
  case 
  undefined
  :
  {
    st1 = "undefined"
    break
  }
  case
  null
  :
  {
   	st1 = "null"
    break
  }
  case
  ""
  :
  {
    st1 = ""
    break
  }
  default
  :
  {
   	st1 = "false"
    break
  }
}
console.log(st1)

console.log(
  FLATSOBJECT
  (
    {
      fruit: {
        banana: true,
      },
      count: {
        of: {
          banana: 89,
        },
      },
    },
  )
)
console.log("CONFIRMSTYPE(undefined)", CONFIRMSTYPE(undefined))
console.log("CONFIRMSTYPE(null)", CONFIRMSTYPE(null))
console.log("CONFIRMSTYPE({})", CONFIRMSTYPE({}))
console.log("CONFIRMSTYPE([])", CONFIRMSTYPE([]))
console.log("CONFIRMSTYPE(true)", CONFIRMSTYPE(true))
console.log("CONFIRMSTYPE(false)", CONFIRMSTYPE(false))
console.log("CONFIRMSTYPE(1)", CONFIRMSTYPE(1))
console.log("CONFIRMSTYPE('')", CONFIRMSTYPE(''))
function CONFIRMSTYPE(TARGET) {
  var A
  switch
  (
    TARGET
  )
  {
    case
    null
    :
    {
      A = "NULL"
      break
    }
    case
    undefined
    :
    {
      A = "UNDEFINED"
      break
    }
    default
    :
    {
      var 
      B 
      = 
      Array.isArray
      (
        TARGET
      )
      switch
      (
        B
      )
      {
        case
        true
        :
        {
          A 
          = 
          "ARRAY"
          break
        }
        case
        false
        :
        {
          var 
          C 
          = 
          typeof TARGET
          switch
          (
            C
          )
          {
            case
            "boolean"
            :
            {
              A = "BOOLEAN"
              break
            }
            case
            "number"
            :
            {
              A = "NUMBER"
              break
            }
            case
            "function"
            :
            {
              A = "FUNCTION"
              break
            }
            case
            "string"
            :
            {
              A = "String"
              break
            }
            case
            "object"
            :
            {
              if (typeof TARGET.getFullYear === "function") {
                A = "DATE"
              } else {
                A = "OBJECT"
              }
              break
            }
            default
            :
            {
              A = C
              break
            }
          }
          break
        }
      }
    }
  }
  return A
}
function FLATSOBJECT(TARGET) {
  var A, B, C, D, E, F, G
  C = CONFIRMSTYPE(TARGET)
  switch
  (
    C
  )
  {
    case
    "ARRAY"
    :
    {
      A = TARGET
      break
    }
    case
    "OBJECT"
    :
    {
      A = {}
      for 
      (
        B 
        in 
        TARGET
      ) 
      {
        D 
        = 
        TARGET
        [
          B
        ]
        E 
        = 
        CONFIRMSTYPE
        (
          D
        )
        switch
        (
          E
        )
        {
          case
          "ARRAY"
          :
          {
            A[B] = D
            break
          }
          case
          "OBJECT"
          :
          {
            F = FLATSOBJECT(D)
            for 
            (
              G 
              in 
              F
            ) 
            {
              A
              [
                B 
                + 
                " "
                + 
                G
              ]
              = 
              F
              [
                G
              ]
            }
            break
          }
          default
          :
          {
            A[B] = D
            break
          }
        }
      }
      break
    }
    default
    :
    {
      A = C
    }
  }
  return A
}

function COMPARESTYPEANDTYPE(V, W) {
  var A
  var B = V
  var C = W
  var D = typeof B
  var F = typeof C 
  var G = D + " " + F
  switch
  (
    G
  )
  {
    case
    "string string"
    :
    {
      var H = B
      A = H.localeCompare(C)
      break
    }
    case
    "number number"
    :
    {
      var I = B - C
      var J = I == 0
      switch
      (
        J
      )
      {
        case 
        true
        :
        {
          A = 0
          break
        }
        case
        false
        :
        {
          var K = I > 0
          switch
          (
            K
          )
          {
            case
            true
            :
            {
              A = 1
              break
            }
            case
            false
            :
            {
              A = -1
              break
            }
          }
          break
        }
      }
      break
    }
    default
    :
    {
      A = 0
      break
    }
  }
  return A
}
function SORTSARRAY
(
  AR1
)
{
  var A
  var B = AR1
  if (Array.isArray(B)) {
    A = B.sort((X, Y) => COMPARESTYPEANDTYPE(X, Y))
  } else {
    A = null
  }
  return A
}
var AR1 
= 
[
  3,
  2,
  "",
  true,
  {},
  [],
  1
]
console.log(SORTSARRAY(AR1))
console.log(new Date(Date.parse(new Date().toISOString())).toLocaleString("KR", { hour12: false }))
console.log(new Date().toLocaleString("en", { hour12: false }))
console.log(new Intl.DateTimeFormat("ko", { year: "2-digit", month: "numeric", day: "numeric", hour: "numeric", hour12: false, minute: "numeric", }).format(new Date()))
// store iso
// show format