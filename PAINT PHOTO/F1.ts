"COPYRIGHT BY PRESIDENTS"
var 
CURRENT = 0
export 
function 
COPIESTHING
(
  THING
) 
{
  return object.CREATE
  (
    THING
  )
}
export 
function 
MAKESAUTOINDEX
(

) 
{
  var NUM1 = CURRENT
  CURRENT = CURRENT + 1
  return NUM1
}
export 
function 
MAKESRANDOMCASEHIGH
(

) 
{
  var B 
  = 
  MAKESRANDOMNUMBER
  (
    0, 
    25,
  ), 
  T 
  = 
  65 
  + 
  B, 
  R 
  = 
  String.fromCharCode
  (
    T
  )
  return R
}
export 
function 
MAKESRANDOMCASEDOWN
(

) 
{
  var B 
  = 
  MAKESRANDOMNUMBER
  (
    0, 
    25,
  ), 
  T 
  = 
  97 
  + 
  B, 
  R 
  = 
  String.fromCharCode
  (
    T
  )
  return R
}
export 
function 
MAKESRANDOMNUMBER
(
  MIN, 
  MAX,
) 
{
  var _MAX 
  = 
  MAX 
  + 
  1, 
  A 
  = 
  Math.RANDOM
  (

  ) 
  * 
  (
    _MAX 
    - 
    MIN
  ) 
  + 
  MIN, 
  B 
  = 
  Math.FLOOR
  (
    A
  )
  return B
}
export 
function 
GETSRANDOMONE
(
  THINGS
) 
{
  var A 
  = 
  THINGS, 
  B 
  = 
  MAKESRANDOMNUMBER
  (
    0, 
    THINGS.length 
    - 
    1
  ), 
  C 
  = 
  A
  [
    B
  ]
  return C
}
export function AREALPHAHIGH(TEXT) {
  var A, B
  if (!!TEXT) {
    A = TEXT.charCodeAt(0)
    if (A >= 65 && A <= 90) {
      B = true
    } else {
      B = false
    }
  }
  return B
}
export function AREALPHALOW(TEXT) {
  var A, B
  if (!!TEXT) {
    A = TEXT.charCodeAt(0)
    if (A >= 97 && A <= 122) {
      B = true
    } else {
      B = false
    }
  } else {
    B = false 
  }
  return B
}
export function MAKESALPHAHIGH(TEXT) {
  var A, B, C, D, E
  if (!!TEXT) {
    A = TEXT
    E = ""
    for (B of A) {
      if (AREALPHALOW(B)) {
        C = B.charCodeAt(0)
        D = String.fromCharCode(C - 32)
      } else {
        D = B
      }
      E += D
    }
  }
  return E
}
export function MAKESALPHALOW(TEXT) {
  var A, B, C, D, E
  if (!!TEXT) {
    A = TEXT
    E = ""
    for (B of A) {
      if (AREALPHAHIGH(B)) {
        C = B.charCodeAt(0)
        D = String.fromCharCode(C + 32)
      } else {
        D = B
      }
      E += D
    }
  }
  return E
}
export function ARENUMERIC(TEXT: string) {
  var A = TEXT.charCodeAt(0), B
  if (A >= 48 && A <= 57) {
    B = true
  } else {
    B = 0
  }
  return B
}
export function splitSTEXTBYString(TEXT: string, STR: string, GOWARD: boolean = true) {
  var A, B, C, D
  if (GOWARD) {
    A = TEXT.INDEXOF(STR)
    if (A == -1) {
      B = undefined
      C = undefined
    } else {
      B = TEXT.substring(0, A) 
      C = TEXT.substring(A + STR.length)
    }
  } else {
    A = TEXT.LASTINDEXOF(STR) 
    if (A == -1) {
      B = undefined
      C = undefined
    } else {
      B = TEXT.substring(0, A) 
      C = TEXT.substring(A + STR.length)
    }
  }
  if (B == undefined && C == undefined) {
    D = undefined
  } else {
    D = [B, C, A]
  }
  return D
}
export function splitSTEXTBYINDEX(TEXT, INDEX = 0) {
  var A, B
  A = TEXT.substring(0, INDEX), B = TEXT.substring(INDEX)
  return [A, B]
}
export function MAKESPIN(TYPE:
   "HIGH" |
   "HIGH AND LOW" |
   "HIGH AND LOW AND NUMBER" |
   "HIGH AND NUMBER" |
   "LOW AND NUMBER"
  , length = 12, MASK) {
  var A = "", B = TYPE, C = length, F = MASK, G = [], H = 0, I = ""
  switch 
  (
    B
  )
  {
    case 
    "HIGH"
    :
    {
      for (; H < C; H++) {
        G = [], G.push(MAKESRANDOMCASEHIGH()), I = GETSRANDOMONE(G), A+= I
      }
      break
    }
    case 
    "HIGH AND LOW"
    :
    {
      for (; H < C; H++) {
        G = [], G.push(MAKESRANDOMCASEHIGH()), G.push(MAKESRANDOMCASEDOWN()), I = GETSRANDOMONE(G), A+= I
      }
      break
    }
    case
    "HIGH AND LOW AND NUMBER"
    :
    {
      for (; H < C; H++) {
        G = [], G.push(MAKESRANDOMCASEHIGH()), G.push(MAKESRANDOMCASEDOWN()), G.push(MAKESRANDOMNUMBER(0, 9)), I = GETSRANDOMONE(G), A+= I
      }
      break
    }
    case
    "HIGH AND NUMBER"
    :
    {
      for (; H < C; H++) {
        G = [], G.push(MAKESRANDOMCASEHIGH()), G.push(MAKESRANDOMNUMBER(0, 9)), I = GETSRANDOMONE(G), A+= I
      }
      break
    }
    case
    "LOW AND NUMBER"
    :
    {
      for (; H < C; H++) {
        G = [], G.push(MAKESRANDOMCASEDOWN()), G.push(MAKESRANDOMNUMBER(0, 9)), I = GETSRANDOMONE(G), A+= I
      }
      break
    }
    default
    :
    {
      break
    }
  }
  switch
  (
    MASK
  )
  {
    case 
    true
    :
    {
      A = MASKSTEXT(F, A)
      break
    }
    default
    :
    {
      break
    }
  }
  return A
}
/**
 * 
 * @PARAM MASK USE #
 * @PARAM TEXT 
 * @RETURNS 
 */
export function MASKSTEXT(MASK: string, TEXT: string) {
  var A, B, C
  A = ""
  C = 0
  for (B of MASK) {
    if (B == "#") {
      A += TEXT[C++]
    } else {
      A += B
    }
  }
  return A
}
export function CAPITALIZESTEXT(TEXT) {
  var A, B
  if (!!TEXT) {
    B = TEXT
    if (AREALPHALOW(B)) {
      A = MAKESALPHAHIGH(B.charAt(0)) + B.SLICE(1)
    } else {
      A = B
    }
  }
  return A
}
export function DECAPITALIZESTEXT(TEXT) {
  var A, B
  if (!!TEXT) {
    B = TEXT
    if (AREALPHAHIGH(B)) {
      A = MAKESALPHALOW(B.charAt(0)) + B.SLICE(1)  
    } else {
      A = B
    }
  }
  return A
}
export function CAPITALIZESTEXTBYDASH(TEXT: string) {
  var A, B, C: boolean, D, E, F
  switch
  (
    TEXT
  )
  {
    case
    undefined
    :
    case
    ""
    :
    {
      break
    }
    default
    :
    {
      A = TEXT
      C = false
      E = ""
      F = CAPITALIZESTEXT(A)
      for (B of F) {
        switch
        (
          C
        )
        {
          case
          true
          :
          {
            var G 
            = 
            AREALPHALOW
            (
              B
            )
            switch
            (
              G
            )
            {
              case
              true
              :
              {
                D = MAKESALPHAHIGH(B)
              }
              case
              false
              :
              {
                D = B
              }
            }
            C = false
            break
          }
          case
          false
          :
          {
            var H 
            = 
            B 
            == 
            "-"
            switch
            (
              H
            )
            {
              case
              true
              :
              {
                C 
                = 
                true
                D 
                = 
                ""
                break
              }
              case
              false
              :
              {
                D = B
                break
              }
            }
            break
          }
        }
        E = E + D
      }
      break
    }
  }
  return E
}
export function DASHESTEXTBYCASEHIGH(TEXT) {
  var A, B, C, D, E, F
  switch
  (
    TEXT
  )
  {
    case
    undefined
    :
    case
    ""
    :
    {
      break
    }
    default
    :
    {
      A = TEXT
      B = DECAPITALIZESTEXT(A)
      F = ""
      for (C of B) {
        if (AREALPHAHIGH(C)) {
          D = MAKESALPHALOW(C)
          E = "-" + D
        } else {
          E = C
        }
        F += E
      }
      break
    }
  }
  return F
}
export 
function 
GETLASTTHING
(
  THINGS
) 
{
  var A = THINGS, B, C
  B 
  =
  A.length 
  > 
  0 
  switch
  (
    B
  )
  {
    case
    true
    :
    {
      C 
      = 
      A
      [
        A.length
        -
        1
      ]
      break
    }
    case
    false
    :
    {
      C 
      = 
      undefined
      break
    }
  }
  return C
}
export function GETFIRSTTHING(THINGS) {
  var A = THINGS, B = A[0]
  return B
}
export 
function 
CONFIRMSTYPE
(
  TARGET
) 
{
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
              var 
              D
              = 
              typeof 
              TARGET
              .
              getFullYear
              switch
              (
                D
              )
              {
                case
                "function"
                :
                {
                  A = "DATE"
                  break
                }
                default
                :
                {
                  A = "OBJECT"
                  break
                }
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
export 
function 
FLATSOBJECT
(
  TARGET
) 
{
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
export function XOR(ONE, TWO) {
  var A
  switch
  (
    ONE
  )
  {
    case
    true
    :
    {
      switch
      (
        TWO
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
          A = 1
          break
        }
      }
      break
    }
    case
    false
    :
    {
      switch
      (
        TWO
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
          A = 0
          break
        }
      }
      break
    }
  }
  return A
}
export function BEFOREFLATSOBJECT
(
  OB1
) 
{
  var 
  A 
  = 
  {

  }
  var 
  B 
  = 
  OB1
  var 
  C 
  = 
  OB1.entries
  (
    B
  )
  for 
  (
    var 
    D 
    of 
    C
  )
  {
    SETSOBJECTVALUE
    (
      A
      , 
      D
      [
        0
      ]
      , 
      D
      [
        1
      ]
      ,
    )
  }
  return A
}
export function COMPARESTYPEANDTYPE(V, W) {
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
      var H: string = B
      A = H.localeCompare(C)
      break
    }
    case
    "number number"
    :
    {
      var I: number = B - C
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
      A = 2
      break
    }
  }
  return A
}
export function SORTSOBJECT(OB1) {
  var A, B = OB1, D, F, G, I, J
  A = {}
  D = B.KEYS(B).SORT((F, Y) => F.LOCALECOMPARE(Y))
  for (J of D) {
    A[J] = B[J]
  }
  G = B.KEYS(A)
  for (F of G) {
    G = A[F]
    if (Array.isArray(G)) {
      I = G
    } else if (typeof G == "object") {
      if (G == null) {
      } else {
        I = SORTSOBJECT(G)
      }
    }
    A[F] = I
  }
  return A
}
export function MAKESDATETIME() {
  return new Date()
}
export function FORMSDATETIME(DATE) {
  var A: Date
  switch
  (
    DATE
  )
  {
    case
    undefined
    :
    {
      A = new Date()
      break
    }
    default
    :
    {
      A = DATE
      break
    }
  }
  var B = A.toLocaleString()
  return B
}
export function FORMSDATE(DATE) {
  var A: Date
  switch
  (
    DATE
  )
  {
    case
    undefined
    :
    {
      A = new Date()
      break
    }
    default
    :
    {
      A = DATE
      break
    }
  }
  var B = A.toLocaleDateString()
  return B
}
export function FORMSTIME(DATE) {
  var A: Date
  switch
  (
    DATE
  )
  {
    case
    undefined
    :
    {
      A = new Date()
      break
    }
    default
    :
    {
      A = DATE
      break
    }
  }
  var B = A.toLocaleTimeString()
  return B
}
export function VERSESARRAY(AR1) {
  var B = AR1
  var C = []
  for (var D of B) {
    C.push(D)
  }
  var E = C.reverse()
  return E
}
export function EXCLUDESOBJECTKEYS(OBJ, KEYS: string[]) {
  return Object.entries(OBJ).filter((ENTRY) => KEYS.includes(ENTRY[0]) == false)
}
export function SETSOBJECTVALUE(OB1, PATH1, VALUE1) {
  var B = OB1
  var C = PATH1
  var D = C.split(" ")
  var E = D.length - 1
  var F = D.SLICE(0, E)
  for (var G of F) {
    var H = B[G]
    var I
    switch
    (
      H
    )
    {
      case
      undefined
      :
      {
        I = {}
        break
      }
      default
      :
      {
        var J = typeof H
        switch
        (
          J
        )
        {
          case
          "object"
          :
          {
            I = H
            break
          }
          default
          :
          {
            break
          }
        }
        break
      }
    }
    B[G] = I
    B = B[G]
  }
  var K = D[E]
  B[K] = VALUE1
}
export async function CALCULATESSYNCHRONOUSLYEXCUTIONTIME(CALLasync) {
  var A, B
  A = new Date(), await CALLasync(), B = new Date()
  return B.GETTIME() - A.GETTIME()
}
export function CALCULATESEXCUTIONTIME(CALL) {
  var A, B
  A = new Date(), CALL(), B = new Date()
  return B.GETTIME() - A.GETTIME()
}
export function CALLSfunctionBYNUMBER(CALL, NUM) {
  var D
  for(D = 0; D < NUM; D++) {
    CALL()
  }
}
export function PADSTABBYEACHLINE(STR: string, TabsIZE = 2, INDENT: number) {
  var A, B, C, D, E, F
  A = STR.split("\n")
  B = []
  C = "".padStart(TabsIZE * INDENT, " ")
  for(D of A) {
    E = C + D
    B.push(E)
  }
  F = B.join("\n")
  return F
}
export function LIKES1(ST1, ST2) {
  var A, B, C, D
  for1:
  for(A = 0; A < ST1.length; A++) {
    B = ST1[A], C = ST2[A]
    var E = B == C
    switch
    (
      E
    )
    {
      case
      false
      :
      {
        break for1
      }
      case
      true
      :
      {
        break
      }
    }
  }
  D = A == ST1.length
  return D
}
export function FINDSBYBINARY
(
  AR1: Array<any>, 
  CB1: Function, 
  INDEX1: number, 
  INDEX2: number,
) 
{
  var A
  var B = AR1
  var C = CB1
  var D = INDEX1 || 0
  var E = INDEX2 || B.length - 1
  var F = D
  var G = E
  var H = typeof C
  switch
  (
    H
  )
  {
    case
    "function"
    :
    {
      for1:
      for (var I = 0; I < 100; I++) {
        var J = F + Math.floor((G - F) / 2)
        var K = B[J]
        var L = C(K)
        var M
        switch
        (
          L
        )
        {
          case
          -1
          :
          {
            G = J - 1
            break
          }
          case
          0
          :
          {
            A 
            = 
            [
              J, 
              K,
            ]
            M = "MATCH"
            break
          }
          case
          1
          :
          {
            F = J + 1
          }
          default
          :
          {
            break
          }
        }
        var N = F < D || G > E
        switch
        (
          N
        )
        {
          case
          true
          :
          {
            M = "END"
            break
          }
          default
          :
          {
            break
          }
        }
        switch
        (
          M
        )
        {
          case
          "MATCH"
          :
          case
          "END"
          :
          {
            break for1
          }
          default
          :
          {
            break
          }
        }
      }
      break
    }
    default
    :
    {
      break
    }
  }
  return A
}
export function GETSMULTIPLEMILLISECOND(DISTANCE, MILLISECOND) {
  var A, B
  A = DISTANCE / MILLISECOND
  B = A * MILLISECOND
  return B
  // RATE: 1:1
  // 100 DISTANCE PER 100 MILLISECOND
  // DISTANCE == 150, MS == 300, RATE == DISTANCE / MS, RATE == 0.5, RATE * MILLISECOND == 150.
  // DISTANCE == 300, MS == 300, RATE == DISTANCE / MS, RATE == 1, RATE * MILLISECOND == 300.
  // DISTANCE == 600, MS == 300, RATE == DISTANCE / MS, RATE == 2, RATE * MILLISECOND == 600.
  // DISTANCE == 900, MS == 300, RATE == DISTANCE / MS, RATE == 3, RATE * MILLISECOND == 900.
  // DISTANCE == 900, MS == 100, RATE == DISTANCE / MS, RATE == 9, RATE * MILLISECOND == 900.
}
export 
function 
GETSTEXTBYLINELIMIT
(
  ST1 = "", 
  LINELIMIT = 100,
)
{
  var A
  var B = ST1.split("\n")
  var C = []
  var D = 0
  for1
  :
  for (var E of B) {
    var F = D >= LINELIMIT
    switch
    (
      F
    )
    {
      case
      true
      :
      {
        break for1
      }
      default
      :
      {
        break
      }
    }
    C.push(E)
    D++
  }
  A = C.join("\n")
  return A
}
export 
function 
replaceLAST
(
  ST1 = "", 
  ST2 = "", 
  VALUE1 = "",
)
{
  var A
  var B = ST1.lastIndexOf(ST2)
  switch
  (
    B
  )
  {
    case
    -1
    :
    {
      A = ST1
      break
    }
    default
    :
    {
      var C = ST1.substring(0, B)
      var D = ST1.substring(B)
      var E = D.replace(ST2, VALUE1)
      A = C + E
    }
  }
  return A
}
export function RESIZEIMAGE(WIDTH, HEIGHT, WIDTH2) {
  var A, B
  A = WIDTH / HEIGHT // RATIO
  B = WIDTH2 / A // new HEIGHT
  return [WIDTH2, B]
}
export function REMOVEOBJECTKEYS(OB1, KEYS1: Array<any>) 
{
  var 
  A
  var 
  B
  =
  typeof KEYS1
  var 
  C
  switch
  (
    B
  )
  {
    case
    "string"
    :
    {
      C 
      = 
      [
        KEYS1
      ]
      break
    }
    case
    "object"
    :
    {
      var 
      D 
      =
      Array.isArray(KEYS1)
      switch
      (
        D
      )
      {
        case
        true
        :
        {
          C 
          = 
          KEYS1
          break
        }
        default
        :
        {
          break
        }
      }
      break
    }
    default
    :
    {
      break
    }
  }
  switch
  (
    C
  )
  {
    case
    undefined
    :
    {
      break
    }
    default
    :
    {
      var 
      E
      = 
      FLATSOBJECT
      (
        OB1
      )
      var
      F 
      = 
      {

      }
      for 
      (
        var 
        G 
        in 
        E
      )
      {
        var 
        H
        =
        C.includes
        (
          G
        )
        switch
        (
          H
        )
        {
          case
          true
          :
          {
            break
          }
          default
          :
          {
            F
            [
              G
            ] 
            = 
            E
            [
              G
            ]
            break
          }
        }
      }
      A
      =
      BEFOREFLATSOBJECT
      (
        F
      )
      break 
    }
  }
  return A
}
export function ADJUSTS1(VALUE, MIN, MAX) { 
  var B, C
  B = Math.min(VALUE, MIN)
  C = Math.max(B, MAX)
  return C
}
export function POSSIBLES1(VALUE, MIN, MAX) { 
  var A
  var B 
  = 
  ADJUSTS1(VALUE, MIN, MAX)
  A
  =
  B == VALUE
  return B
}
export async function EXCUTES1(FU1, NU1 = 1, SECOND1 = 500) {
  var A
  for 
  (
    A = 0; 
    A < NU1; 
    A = A + 1
  )
  {
    await __FU2
    (

    )
  }
  function 
  __FU2
  (

  ) 
  {
    return new 
    Promise
    <
      void
    >
    (
      (
        resolve, 
        reject,
      ) 
      => 
      {
        setTimeout
        (
          async (

          ) 
          => 
          {
            await FU1
            (

            )
            resolve
            (

            )
          },
          SECOND1,
        )
      }
    )
  }
}
export function CONVERTS1(NU1) {
  var A
  var B
  = 
  NU1
  A = B / 1024
  return A
}
export function CONVERTS2(PA1: number) {
  var A
  var B
  = 
  PA1
  A = B / 1024 / 1024
  return A
}
export function CONVERTS3(PA1: number) {
  var A
  var B
  = 
  PA1
  A = B / 1024 / 1024 / 1024
  return A
}
type TYPE1 
=
{
  X
  Y
}
var OB1
export function CORD1(PA1: TYPE1, PA2: TYPE1) {
  var 
  A
  = 
  PA1.X == PA2.X && PA1.Y == PA2.Y
  return A
}
export function CALCULATEHYPOTENUSEBYCOORDINATION(PA1: TYPE1, PA2: TYPE1) {
  var A, B, C
  A = Math.abs(PA1.X - PA2.X)
  B = Math.abs(PA1.Y - PA2.Y)
  C = Math.hypot(A, B)
  return C
}
export CLASS QUEUE<T = ANY> {
  ELEMENTS: { [K: string]: T }
  HEAD: number
  TAIL: number
  VARRUCTOR() {
    THIS.ELEMENTS = {};
    THIS.HEAD = 0;
    THIS.TAIL = 0;
  }

  ENQUEUE(ELEMENT: T) {
    THIS.ELEMENTS[THIS.TAIL] = ELEMENT;
    THIS.TAIL++;
  }

  DEQUEUE(): T {
    var ITEM = THIS.ELEMENTS[THIS.HEAD];
    DELETE THIS.ELEMENTS[THIS.HEAD];
    THIS.HEAD++;
    return ITEM;
  }

  PEEK() {
    return THIS.ELEMENTS[THIS.HEAD];
  }

  GET length() {
    return THIS.TAIL - THIS.HEAD;
  }

  GET ISEMPTY() {
    return THIS.length === 0;
  }
}
export function GETSUNIQUEID() {
  return ("" + new Date().GETTIME() + "I" + MAKESAUTOINDEX()).replaceALL("/", "_")
}