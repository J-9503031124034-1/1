import 
{
  FAARROWSUPDOWN,
  FACARETDOWN,
  FACARETUP,
  FACLOUD,
  FAELLIPSISSTROKEVERTICAL,
  FAEYE,
  FAGEAR,
  FALAYERGROUP,
  FALAYERGROUPPLUS,
  FALAYERPLUS,
  FAMINUS,
  FAPAINTBRUSHPENCIL,
  FAPALETTE,
  FASQUAREDASHED,
  FASQUAREDASHEDCIRCLEPLUS,
  ICONDEFINITION,
}
from "@FORTAWESOME/PRO-THIN-SVG-ICONS"
import 
{ 
  FONTAWESOMEICON 
} 
from "@FORTAWESOME/REACT-NATIVE-FONTAWESOME"
import 
CHECKBOX 
from "EXPO-CHECKBOX"
import 
{ 
  USELOCALSEARCHPARAMS 
} 
from "EXPO-ROUTER"
import 
{
  REACTELEMENT,
  useEffect,
  USEREF,
  useState
} 
from "REACT"
import 
{
  ANIMATED,
  APPSTATE,
  BACKHANDLER,
  PIXELRATIO,
  PRESSABLE,
  IMAGE as RNIMAGE,
  SCROLLVIEW,
  STATUSBAR,
  STYLESHEET,
  TEXT,
  VIEW,
} 
from "REACT-NATIVE"
import 
{
  WEBVIEW 
} 
from "REACT-NATIVE-WEBVIEW"
import 
* as COMMON 
from "../F1"
import 
* as COMMON1 
from "../F2"
import 
{ 
  UNESCAPE 
} 
from "QUERYString"
type TYPE1<
  T
> 
= 
T [ 
  KEYOF T
]
type TYPE2 
= 
(

) 
=> 
void
INTERFACE INTER 
{
  1
  :
  PARTIAL<
  {
    BOTTOM
    : 
    PARTIAL<
    {
      1
      : 
      NUMBER
    }
    >
    LEFT
    : 
    PARTIAL<
    {
      1
      : 
      NUMBER
    }
    >
    RIGHT
    : 
    PARTIAL<
    {
      1
      : 
      NUMBER
    }
    >
    TOP
    : 
    PARTIAL<
    {
      1
      : 
      NUMBER
    }
    >
  }
  >
}
type TYPE3 
= 
{
  BOTTOM1?: number
  LEFT1?: number
  RIGHT1?: number
  TOP1?: number
}
type TYPE4 
= 
{
  HEIGHT1?: number
  WIDTH1?: number
  X1?: number
  Y1?: number
}
type TYPE5 
= 
{
  DATE1: string 
  DATE2: string 
  ID1: string
  TIME1: string
}
type TYPE6 
= 
{
  DUMMY1?: TYPE88
  GROUPS1?: Array<
    TYPE12
  >
  OPTION1?: TYPE7
  OPTION2?: TYPE8
  OPTION3?: TYPE9
}
type TYPE7 
= 
{
  NUM1?: number
}
type TYPE8 
= 
{
  INDEX1?: number
  INDEX2?: number
}
type TYPE88 
= 
{
  INDEX1?: number
  INDEX2?: number
  INDEX3?: number
  INDEX4?: number
  INDEX5?: number
  INDEX6?: number
  INDEX7?: number
  INDEX8?: number
  INDEX9?: number
  INDEX10?: number
  INDEX11?: number
  INDEX12?: number
  INDEX13?: number
  INDEX14?: number
  INDEX15?: number
}
type TYPE9 
= 
{
  OBJ1?: TYPE10
}
type TYPE10 
= 
{
  [
    K1 in KEYOF typeof ENUM1
  ]?: TYPE11
}
type TYPE11 
= 
{
  PRESS1?: boolean
}
// var OBJ12
// =
// {
//   DUMMY1?: TYPE14
//   ID1?: string
//   LAYERS1?: Array<
//     TYPE15
//   >
//   NAME1?: string
//   OPTION1?: TYPE13
// }
type TYPE12 
=
{
  DUMMY1?: TYPE14
  ID1?: string
  LAYERS1?: Array<
    TYPE15
  >
  NAME1?: string
  OPTION1?: TYPE13
}
type TYPE13 
= 
{
  CHECK1?: boolean
  NUM1?: number
}
type TYPE14 
= 
{
  ELEMENT1?: REACTELEMENT
  ELEMENT2?: REACTELEMENT
  ELEMENT3?: REACTELEMENT
  LAYOUT1?: TYPE4
  REF1?
  REND1?: TYPE2
  REND2?: TYPE2
  REND3?: TYPE2
}
type TYPE15 
= 
{
  DUMMY1?: TYPE16
  HISTORIES1?: Array<
    TYPE18 
    |
    TYPE188
  >
  ID1?: string
  NAME1?: string
  OPTION1?: TYPE17
}
type TYPE16 
= 
{
  ELEMENT1?: REACTELEMENT
  ELEMENT21?: REACTELEMENT
  ELEMENT22?: REACTELEMENT
  ELEMENT20?: REACTELEMENT
  HISTORY1?: TYPE22
  LAYOUT1?: TYPE4
  LAYOUT21?: TYPE4
  LAYOUT22?: TYPE4
  REF22?
  REND1?: TYPE2
  REND20?: TYPE2
  REND21?: TYPE2
  REND22?: TYPE2
}
type TYPE17 
= 
{
  INDEX1?: number
}
type TYPE18 
= 
{
  IMAGE1?: TYPE19
}
type TYPE188 
= 
{

}
type TYPE19 
= 
{
  FILE1?: TYPE20
  OPTION1?: TYPE21
}
type TYPE20 
= 
{
  NAME1?: string
}
type TYPE21 
= 
{
  LAYOUT1?: TYPE4
}
type TYPE22 
= 
{
  IMAGE1?: TYPE23 
}
type TYPE23 
= 
{
  FILE1?: TYPE25
  OPTION1?: TYPE24
}
type TYPE24 
= 
{
  LAYOUT1?: TYPE4
}
type TYPE25 
= 
{
  CONTENT1?: string
}
type TYPE26 
= 
{
  ELEMENT1?: REACTELEMENT
  ICON1?: ICONDEFINITION
  LAYOUT1?: TYPE4
  NAME1?: KEYOF typeof ENUM1
  REF1?
  REND1?: TYPE2
}
type TYPE277 
= 
"NONE" 
| 
"DRAW PATH"
type TYPE27 
= 
{ 
  ACTION1?: TYPE277
  ENUM1?: ENUM2 
}
type TYPE28 
= 
{
  CCOLOR1?: `RGBA (${String})`
  WIDTH1?: number
}
ENUM ENUM1 
{
  "CLOUD",
  "GEAR",
  "LAYER GROUP",
  "NONE",
  "PAINTBRUSH PENCIL",
  "PALETTE",
  "SQUARE DASH",
}
ENUM ENUM2 
{
  "TO DATA URL",
}
// ELEMENT: HTMLCANVASELEMENT
// CONTEXT2D: CANVASRENDERINGCONTEXT2D
var OBJ
:
PARTIAL<
{
  BOOL1: boolean
}
>
=
{

}
{
  if 
  (
    (
      (
        undefined 
        == 
        OBJ.BOOL1
      )
    )
  )
  {
    OBJ.BOOL1 
    = 
    false
  }
}
class CLASS1 
{
  static BOOL1: boolean
  static BOOL2: boolean = false
  static BUTTONS1: Array<TYPE26>
  static ELEMENT1: REACTELEMENT
  static ELEMENT10: REACTELEMENT
  static ELEMENT11: REACTELEMENT
  static ELEMENT12: REACTELEMENT
  static ELEMENT13: REACTELEMENT
  static ELEMENT14: REACTELEMENT
  static ELEMENT15: REACTELEMENT
  static ELEMENT16: REACTELEMENT
  static ELEMENT17: REACTELEMENT
  static ELEMENT20: REACTELEMENT
  static ELEMENT2: REACTELEMENT
  static ELEMENT21: REACTELEMENT
  static ELEMENT22: REACTELEMENT
  static ELEMENT23: REACTELEMENT
  static ELEMENT24: REACTELEMENT
  static ELEMENT025: REACTELEMENT
  static ELEMENT3: REACTELEMENT
  static ELEMENT333: REACTELEMENT
  static ELEMENT3333: REACTELEMENT
  static ELEMENT4: REACTELEMENT
  static ELEMENT5: REACTELEMENT
  static ELEMENT6: REACTELEMENT
  static ELEMENT7: REACTELEMENT
  static ELEMENT8: REACTELEMENT
  static ELEMENT9: REACTELEMENT
  static HEIGHT1: number
  static HEIGHT2: number
  static HEIGHT3: number
  static ID1: NODEJS.TIMEOUT
  static INST1: ANIMATED.VALUE
  static INST2: ANIMATED.VALUE
  static INST3: ANIMATED.VALUE
  static LAYOUT1: TYPE4
  static LAYOUT10: TYPE4
  static LAYOUT11: TYPE4
  static LAYOUT12: TYPE4
  static LAYOUT13: TYPE4
  static LAYOUT14: TYPE4
  static LAYOUT15: TYPE4
  static LAYOUT16: TYPE4
  static LAYOUT17: TYPE4
  static LAYOUT20: TYPE4
  static LAYOUT2: TYPE4
  static LAYOUT21: TYPE4
  static LAYOUT22: TYPE4
  static LAYOUT23: TYPE4
  static LAYOUT24: TYPE4
  static LAYOUT025: TYPE4
  static LAYOUT3: TYPE4
  static LAYOUT333: TYPE4
  static LAYOUT3333: TYPE4
  static LAYOUT4: TYPE4
  static LAYOUT5: TYPE4
  static LAYOUT6: TYPE4
  static LAYOUT7: TYPE4
  static LAYOUT8: TYPE4
  static LAYOUT9: TYPE4
  static NAME1: KEYOF typeof ENUM1
  static NUM1: number
  static OBJ1: TYPE27
  static OPTION1: TYPE28
  static OPTION2: TYPE3
  static PADDING1: number
  static PARAM1: TYPE5
  static RATIO1: number = PIXELRATIO.GET ()
  static REF001: ANY
  static REF002: ANY
  static REF003: ANY
  static REF004: ANY
  static REF005: ANY
  static REF006: ANY
  static REF007: ANY
  static REF008: ANY
  static REF009: ANY
  static REF010: ANY
  static REF011: ANY
  static REF012: ANY
  static REF013: ANY
  static REF014: ANY
  static REF015: ANY
  static REF016: ANY
  static REF017: ANY
  static REF018: ANY
  static REF019: ANY
  static REF021: ANY
  static REF022: ANY
  static REF023: ANY
  static REF024: ANY
  static REF025: ANY
  static REF333: ANY
  static REF3333: ANY
  static STR001: string
  static VALUE001: number
  static VALUE002: number
  static WIDTH001: number
  static WIDTH002: number
  // static REND
  static REND1: TYPE2
  static REND2: TYPE2
  static REND333: TYPE2
  static REND3333: TYPE2
  static REND3: TYPE2
  static REND4: TYPE2
  static REND5: TYPE2
  static REND6: TYPE2
  static REND7: TYPE2
  static REND8: TYPE2
  static REND9: TYPE2
  static REND10: TYPE2
  static REND11: TYPE2
  static REND12: TYPE2
  static REND13: TYPE2
  static REND14: TYPE2
  static REND15: TYPE2
  static REND16: TYPE2
  static REND17: TYPE2
  static REND18: TYPE2
  static REND21: TYPE2
  static REND22: TYPE2
  static REND23: TYPE2
  static REND24: TYPE2
  static REND025: TYPE2
  static USE001: () => TYPE2
  static CLOSE1: () => void
  static GETCURRENTBUTTON1: () => TYPE26
  static INIT1: () => void
  static MOVE1: () => void
  static OPEN1: () => void
  static SAVE1: (DATA1: TYPE6) => Promise<void>
  static SCROLL1: (INDEX1: number) => void
  static SCROLL2: (INDEX1: number, INDEX2: number) => void
  static SET1: (ARG1: TYPE4, ARG2: ANY) => void
  static SET2: (ARG1: TYPE4, ARG2: TYPE4) => void
  static 
  {
    {
      if 
      (
        (
          (
            undefined == CLASS1.BOOL1
          )
        )
      ) 
      {
        CLASS1.BOOL1 = false
      }
      if 
      (
        (
          (
            undefined == CLASS1.BOOL2
          )
        )
      ) 
      {
        CLASS1.BOOL2 = false
      }
      if 
      (
        (
          (
            CLASS1.BUTTONS1
          )
        ) ||
        (
          (
            true
          )
        )
      ) 
      {
        if 
        (
          (
            (
              undefined == CLASS1.BUTTONS1
            )
          )
        ) 
        {
          CLASS1.BUTTONS1 = 
          [

          ]
        }
        CLASS1.BUTTONS1.push 
        (
          {
            ELEMENT1: undefined,
            ICON1: FALAYERGROUP,
            LAYOUT1: {
              HEIGHT1: 0,
              WIDTH1: 0,
              X1: 0,
              Y1: 0,
            },
            NAME1: "LAYER-GROUP",
            REF1: undefined,
            REND1: undefined
          }
        )
        CLASS1.BUTTONS1.push 
        (
          {
            ELEMENT1: undefined,
            ICON1: FASQUAREDASHED,
            LAYOUT1: {
              HEIGHT1: 0,
              WIDTH1: 0,
              X1: 0,
              Y1: 0,
            },
            NAME1: "SQUARE DASH",
            REF1: undefined,
            REND1: undefined,
          }
        )
        CLASS1.BUTTONS1.push 
        (
          {
            ELEMENT1: undefined,
            ICON1: FAPALETTE,
            LAYOUT1: {
              HEIGHT1: 0,
              WIDTH1: 0,
              X1: 0,
              Y1: 0,
            },
            NAME1: "PALETTE",
            REF1: undefined,
            REND1: undefined
          }
        )
        CLASS1.BUTTONS1.push 
        (
          {
            ELEMENT1: undefined,
            ICON1: FAPAINTBRUSHPENCIL,
            LAYOUT1: {
              HEIGHT1: 0,
              WIDTH1: 0,
              X1: 0,
              Y1: 0,
            },
            NAME1: "PAINTBRUSH-PENCIL",
            REF1: undefined,
            REND1: undefined
          }
        )
        CLASS1.BUTTONS1.push 
        (
          {
            ELEMENT1: undefined,
            ICON1: FAGEAR,
            NAME1: "GEAR",
            REND1: undefined,
            REF1: undefined,
            LAYOUT1: {
              HEIGHT1: 0,
              WIDTH1: 0,
              X1: 0,
              Y1: 0,
            }
          }
        )
        CLASS1.BUTTONS1.push 
        (
          {
            ELEMENT1: undefined,
            ICON1: FACLOUD,
            NAME1: "CLOUD",
            REND1: undefined,
            REF1: undefined,
            LAYOUT1: {
              HEIGHT1: 0,
              WIDTH1: 0,
              X1: 0,
              Y1: 0,
            }
          }
        )
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT1
          )
        )
      ) 
      {
        CLASS1.ELEMENT1 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT2
          )
        )
      ) 
      {
        CLASS1.ELEMENT2 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT333
          )
        )
      ) 
      {
        CLASS1.ELEMENT333 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT3333
          )
        )
      ) 
      {
        CLASS1.ELEMENT3333 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT3
          )
        )
      ) 
      {
        CLASS1.ELEMENT3 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT4
          )
        )
      ) 
      {
        CLASS1.ELEMENT4 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT5
          )
        )
      ) 
      {
        CLASS1.ELEMENT5 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT6
          )
        )
      ) 
      {
        CLASS1.ELEMENT6 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT7
          )
        )
      ) 
      {
        CLASS1.ELEMENT7 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT8
          )
        )
      ) 
      {
        CLASS1.ELEMENT8 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT9
          )
        )
      ) 
      {
        CLASS1.ELEMENT9 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT10
          )
        )
      ) 
      {
        CLASS1.ELEMENT10 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT11
          )
        )
      ) 
      {
        CLASS1.ELEMENT11 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT12
          )
        )
      ) 
      {
        CLASS1.ELEMENT12 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT13
          )
        )
      ) 
      {
        CLASS1.ELEMENT13 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT14
          )
        )
      ) 
      {
        CLASS1.ELEMENT14 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT15
          )
        )
      ) 
      {
        CLASS1.ELEMENT15 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT16
          )
        )
      ) 
      {
        CLASS1.ELEMENT16 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT17
          )
        )
      ) 
      {
        CLASS1.ELEMENT17 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT20
          )
        )
      ) 
      {
        CLASS1.ELEMENT20 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT21
          )
        )
      ) 
      {
        CLASS1.ELEMENT21 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT22
          )
        )
      ) 
      {
        CLASS1.ELEMENT22 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT23
          )
        )
      ) 
      {
        CLASS1.ELEMENT23 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT24
          )
        )
      ) 
      {
        CLASS1.ELEMENT24 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.ELEMENT025
          )
        )
      ) 
      {
        CLASS1.ELEMENT025 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.HEIGHT1 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.HEIGHT2
          )
        )
      ) 
      {
        CLASS1.HEIGHT2 = 50
      }
      if 
      (
        (
          (
            undefined == CLASS1.HEIGHT3
          )
        )
      ) 
      {
        CLASS1.HEIGHT3 = 66 * 2
      }
      if 
      (
        (
          (
            undefined == CLASS1.ID1
          )
        )
      ) 
      {
        CLASS1.ID1 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.INST1
          )
        )
      ) 
      {
        CLASS1.INST1 = new ANIMATED.VALUE (0)
      }
      if 
      (
        (
          (
            undefined == CLASS1.INST2
          )
        ) ||
        (
          (
            true
          )
        )
      ) 
      {
        if 
        (
          (
            (
              undefined == CLASS1.INST2
            )
          )
        ) 
        {
          CLASS1.INST2 = new ANIMATED.VALUE (CLASS1.VALUE001)
        }
        CLASS1.INST2.ADDLISTENER ((STATE1) => {
          CLASS1.NUM1 = STATE1.VALUE
        })
      }
      if 
      (
        (
          (
            undefined == CLASS1.INST3
          )
        )
      ) 
      {
        CLASS1.INST3 = new ANIMATED.VALUE (0)
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT1 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT1.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT1.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT1.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT1.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT1.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT1.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT1.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT1.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT2
          )
        )
      ) 
      {
        CLASS1.LAYOUT2 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT2.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT2.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT2.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT2.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT2.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT2.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT2.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT2.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT333
          )
        )
      ) 
      {
        CLASS1.LAYOUT333 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT333.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT333.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT333.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT333.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT333.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT333.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT333.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT333.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3333
          )
        )
      ) 
      {
        CLASS1.LAYOUT3333 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3333.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3333.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3333.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3333.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3333.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3333.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3333.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3333.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3
          )
        )
      ) 
      {
        CLASS1.LAYOUT3 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT3.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT3.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT4
          )
        )
      ) 
      {
        CLASS1.LAYOUT4 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT4.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT4.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT4.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT4.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT4.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT4.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT4.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT4.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT5
          )
        )
      ) 
      {
        CLASS1.LAYOUT5 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT5.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT5.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT5.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT5.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT5.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT5.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT5.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT5.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT6
          )
        )
      ) 
      {
        CLASS1.LAYOUT6 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT7
          )
        )
      ) 
      {
        CLASS1.LAYOUT7 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT7.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT7.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT7.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT7.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT7.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT7.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT7.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT7.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT8
          )
        )
      ) 
      {
        CLASS1.LAYOUT8 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT8.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT8.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT8.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT8.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT8.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT8.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT8.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT8.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT9
          )
        )
      ) 
      {
        CLASS1.LAYOUT9 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT9.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT9.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT9.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT9.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT9.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT9.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT9.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT9.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT10
          )
        )
      ) 
      {
        CLASS1.LAYOUT10 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT10.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT10.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT10.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT10.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT10.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT10.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT10.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT10.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT11
          )
        )
      ) 
      {
        CLASS1.LAYOUT11 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT12
          )
        )
      ) 
      {
        CLASS1.LAYOUT12 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT12.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT12.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT12.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT12.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT12.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT12.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT12.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT12.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT13
          )
        )
      ) 
      {
        CLASS1.LAYOUT13 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT13.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT13.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT13.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT13.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT13.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT13.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT13.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT13.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT14
          )
        )
      ) 
      {
        CLASS1.LAYOUT14 = 
        {}
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT14.HEIGHT1
          )
        )
      ) 
      {
        CLASS1.LAYOUT14.HEIGHT1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT14.WIDTH1
          )
        )
      ) 
      {
        CLASS1.LAYOUT14.WIDTH1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT14.X1
          )
        )
      ) 
      {
        CLASS1.LAYOUT14.X1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT14.Y1
          )
        )
      ) 
      {
        CLASS1.LAYOUT14.Y1 = 0
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT15
          )
        )
      ) 
      {
        CLASS1.LAYOUT15 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT16
          )
        )
      ) 
      {
        CLASS1.LAYOUT16 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT17
          )
        )
      ) 
      {
        CLASS1.LAYOUT17 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT20
          )
        )
      ) 
      {
        CLASS1.LAYOUT20 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT21
          )
        )
      ) 
      {
        CLASS1.LAYOUT21 = undefined
      }
      if 
      (
        (
          (
            undefined == CLASS1.LAYOUT22
          )
        )
      ) 
      {
        CLASS1.LAYOUT22 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT23)
      ) 
      {
        CLASS1.LAYOUT23 = 
        {}
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT23.HEIGHT1)
      ) 
      {
        CLASS1.LAYOUT23.HEIGHT1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT23.WIDTH1)
      ) 
      {
        CLASS1.LAYOUT23.WIDTH1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT23.X1)
      ) 
      {
        CLASS1.LAYOUT23.X1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT23.Y1)
      ) 
      {
        CLASS1.LAYOUT23.Y1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT24)
      ) 
      {
        CLASS1.LAYOUT24 = 
        {}
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT24.HEIGHT1)
      ) 
      {
        CLASS1.LAYOUT24.HEIGHT1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT24.WIDTH1)
      ) 
      {
        CLASS1.LAYOUT24.WIDTH1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT24.X1)
      ) 
      {
        CLASS1.LAYOUT24.X1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT24.Y1)
      ) 
      {
        CLASS1.LAYOUT24.Y1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT025)
      ) 
      {
        CLASS1.LAYOUT025 = 
        {}
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT025.HEIGHT1)
      ) 
      {
        CLASS1.LAYOUT025.HEIGHT1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT025.WIDTH1)
      ) 
      {
        CLASS1.LAYOUT025.WIDTH1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT025.X1)
      ) 
      {
        CLASS1.LAYOUT025.X1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.LAYOUT025.Y1)
      ) 
      {
        CLASS1.LAYOUT025.Y1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.NAME1)
      ) 
      {
        CLASS1.NAME1 = "NONE"
      }
      if 
      (
        (
          undefined == CLASS1.NUM1)
      ) 
      {
        CLASS1.NUM1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.OBJ1.ACTION1)
      ) 
      {
        CLASS1.OBJ1.ACTION1 = "DRAW PATH"
      }
      if 
      (
        (
          undefined == CLASS1.OBJ1.ENUM1)
      ) 
      {
        CLASS1.OBJ1.ENUM1 = ENUM2.TO DATA URL
      }
      if 
      (
        (
          undefined == CLASS1.OPTION1)
      ) 
      {
        CLASS1.OPTION1 = 
        {}
      }
      if 
      (
        (
          undefined == CLASS1.OPTION1.CCOLOR1)
      ) 
      {
        CLASS1.OPTION1.CCOLOR1 = "RGBA (122, 122, 122, 1)"
      }
      if 
      (
        (
          undefined == CLASS1.OPTION1.WIDTH1)
      ) 
      {
        CLASS1.OPTION1.WIDTH1 = 3
      }
      if 
      (
        (
          undefined == CLASS1.OPTION2)
      ) 
      {
        CLASS1.OPTION2 = 
        {}
      }
      if 
      (
        (
          undefined == CLASS1.OPTION2.BOTTOM1)
      ) 
      {
        CLASS1.OPTION2.BOTTOM1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.OPTION2.LEFT1)
      ) 
      {
        CLASS1.OPTION2.LEFT1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.OPTION2.RIGHT1)
      ) 
      {
        CLASS1.OPTION2.RIGHT1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.OPTION2.TOP1)
      ) 
      {
        CLASS1.OPTION2.TOP1 = 0
      }
      if 
      (
        (
          undefined == CLASS1.PADDING1)
      ) 
      {
        CLASS1.PADDING1 = 4
      }
      if 
      (
        (
          undefined == CLASS1.PARAM1)
      ) 
      {
        CLASS1.PARAM1 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.RATIO1)
      ) 
      {
        CLASS1.RATIO1 = PIXELRATIO.GET ()
      }
      if 
      (
        (
          undefined == CLASS1.REF001)
      ) 
      {
        CLASS1.REF001 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF002)
      ) 
      {
        CLASS1.REF002 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF333)
      ) 
      {
        CLASS1.REF333 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF3333)
      ) 
      {
        CLASS1.REF3333 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF003)
      ) 
      {
        CLASS1.REF003 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF004)
      ) 
      {
        CLASS1.REF004 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF005)
      ) 
      {
        CLASS1.REF005 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF006)
      ) 
      {
        CLASS1.REF006 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF007)
      ) 
      {
        CLASS1.REF007 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF008)
      ) 
      {
        CLASS1.REF008 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF009)
      ) 
      {
        CLASS1.REF009 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF010)
      ) 
      {
        CLASS1.REF010 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF011)
      ) 
      {
        CLASS1.REF011 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF012)
      ) 
      {
        CLASS1.REF012 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF013)
      ) 
      {
        CLASS1.REF013 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF014)
      ) 
      {
        CLASS1.REF014 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF015)
      ) 
      {
        CLASS1.REF015 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF016)
      ) 
      {
        CLASS1.REF016 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF017)
      ) 
      {
        CLASS1.REF017 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF018)
      ) 
      {
        CLASS1.REF018 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF021)
      ) 
      {
        CLASS1.REF021 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF022)
      ) 
      {
        CLASS1.REF022 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF023)
      ) 
      {
        CLASS1.REF023 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF024)
      ) 
      {
        CLASS1.REF024 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REF025)
      ) 
      {
        CLASS1.REF025 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.STR001)
      ) 
      {
        CLASS1.STR001 = "----------"
      }
      if 
      (
        (
          undefined == CLASS1.VALUE001)
      ) 
      {
        CLASS1.VALUE001 = -CLASS1.HEIGHT1 + CLASS1.HEIGHT2
      }
      if 
      (
        (
          undefined == CLASS1.VALUE002)
      ) 
      {
        CLASS1.VALUE002 = CLASS1.VALUE001
      }
      if 
      (
        (
          undefined == CLASS1.WIDTH001)
      ) 
      {
        CLASS1.WIDTH001 = 58
      }
      if 
      (
        (
          undefined == CLASS1.WIDTH002)
      ) 
      {
        CLASS1.WIDTH002 = 35
      }
    }
    {
      if 
      (
        (
          undefined == CLASS1.REND1)
      ) 
      {
        CLASS1.REND1 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND2)
      ) 
      {
        CLASS1.REND2 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND333)
      ) 
      {
        CLASS1.REND333 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND3333)
      ) 
      {
        CLASS1.REND3333 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND3)
      ) 
      {
        CLASS1.REND3 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND4)
      ) 
      {
        CLASS1.REND4 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND5)
      ) 
      {
        CLASS1.REND5 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND6)
      ) 
      {
        CLASS1.REND6 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND7)
      ) 
      {
        CLASS1.REND7 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND8)
      ) 
      {
        CLASS1.REND8 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND9)
      ) 
      {
        CLASS1.REND9 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND10)
      ) 
      {
        CLASS1.REND10 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND11)
      ) 
      {
        CLASS1.REND11 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND12)
      ) 
      {
        CLASS1.REND12 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND13)
      ) 
      {
        CLASS1.REND13 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND14)
      ) 
      {
        CLASS1.REND14 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND15)
      ) 
      {
        CLASS1.REND15 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND16)
      ) 
      {
        CLASS1.REND16 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND17)
      ) 
      {
        CLASS1.REND17 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND18)
      ) 
      {
        CLASS1.REND18 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND21)
      ) 
      {
        CLASS1.REND21 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND22)
      ) 
      {
        CLASS1.REND22 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND23)
      ) 
      {
        CLASS1.REND23 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND24)
      ) 
      {
        CLASS1.REND24 = undefined
      }
      if 
      (
        (
          undefined == CLASS1.REND025)
      ) 
      {
        CLASS1.REND025 = undefined
      }
    }
    {
      if 
      (
        (
          (
            undefined == CLASS1.USE001
          )
        )
      ) 
      {
        CLASS1.USE001 = (
  
        ) => 
        {
          var [
            STATE01, 
            SETSTATE01,
          ] = 
          useState (
            0,
          )
          return (
        
          ) => 
          {
            SETSTATE01 (
              STATE01 + 1,
            )
          }
        }
      }
    }
    {
      CLASS1.CLOSE1 = 
      (

      ) => {
        if 
        (
          (
            (
              true == CLASS1.BOOL2
            )
          ) 
        ) 
        {
          CLASS1.VALUE002 = CLASS1.VALUE001
          ANIMATED.TIMING (
            CLASS1.INST2, 
            {
              TOVALUE: CLASS1.VALUE002,
              DURATION: 500,
              USENATIVEDRIVER: false,
            }
          ).START (

          )
          CLASS1.BOOL2 = false
        }
      }
      CLASS1.GETCURRENTBUTTON1 = 
      (

      ): TYPE26 => {
        return CLASS1.BUTTONS1.FIND (
          (
            BUTTON1,
          ) => BUTTON1.NAME1 == CLASS1.NAME1
        )
      }
      CLASS1.INIT1 = (

      ) => {
        var NUM1 = CLASS1.BUTTONS1.FINDINDEX (
          (
            BUTTON1,
          ) => BUTTON1.NAME1 == CLASS1.NAME1
        )
        var NUM2 = (
          NUM1 * CLASS1.WIDTH001
        ) + /*CLASS1.PADDINGLEFT1*/ CLASS1.PADDING1 + (
          (
            CLASS1.WIDTH001 - (
              /*- CLASS1.PADDINGLEFT1 - CLASS1.PADDINGRIGHT1*/CLASS1.PADDING1 * 2
            ) - CLASS1.WIDTH002
          ) / 2
        )
        CLASS1.INST3.SETVALUE (
          NUM2,
        )
      }
      CLASS1.MOVE1 = (

      ) => {
        var NUM1 = CLASS1.BUTTONS1.FINDINDEX (
          (
            BUTTON1,
          ) => BUTTON1.NAME1 == CLASS1.NAME1
        )
        if 
        (
          (
            (
              NUM1 == -1
            )
          )
        ) 
        {
          return
        }
        var NUM2 = (
          NUM1 * CLASS1.WIDTH001
        ) + CLASS1.PADDING1 + (
          (
            CLASS1.WIDTH001 - (
              CLASS1.PADDING1 * 2
            ) - CLASS1.WIDTH002
          ) / 2
        )
        ANIMATED.TIMING (
          CLASS1.INST3, {
            TOVALUE: NUM2,
            DURATION: 500,
            USENATIVEDRIVER: false,
          }
        ).START (

        )
      }
      CLASS1.OPEN1 = (

      ) => {
        if 
        (
          (
            (
              false == CLASS1.BOOL2
            )
          )
        ) 
        {
          CLASS1.VALUE002 = 0
          ANIMATED.TIMING (
            CLASS1.INST2, 
            {
              TOVALUE: CLASS1.VALUE002,
              DURATION: 500,
              USENATIVEDRIVER: false,
            }
          ).START (

          )
          CLASS1.BOOL2 = true
        }
      }
      CLASS1.SAVE1 = async (
        DATA1: TYPE6
      ): Promise<
        void
      > => {
        var DATA2: TYPE6 = object.CREATE
        (
          DATA1
        )
        CLASS2.FUNC1 (
          DATA2,
        )
        await COMMON1.CLASS3.WRITEFILEasync (
          CLASS1.PARAM1.ID1, 
          JSON.StringIFY (
            DATA2,
          ),
        )
      }
      CLASS1.SCROLL1 = (
        INDEX1: number,
      ) => {
        var GROUP1 = OBJ1.INST2.GET1 (
          INDEX1,
        )
        CLASS1.REF012.CURRENT.SCROLLTO (
          { 
            ANIMATED: true, 
            Y: GROUP1.DUMMY1.LAYOUT1.Y1, 
          },
        )
      }
      CLASS1.SCROLL2 = (
        INDEX1: number, 
        INDEX2: number,
      ) => {
        var LAYER1 = OBJ1.INST2.GET2 (
          INDEX1, 
          INDEX2,
        )
        CLASS1.REF012.CURRENT.SCROLLTO (
          { 
            ANIMATED: true, 
            Y: LAYER1.DUMMY1.LAYOUT1.Y1, 
          }
        )
      }
      CLASS1.SET1 = (
        ARG1: TYPE4, 
        ARG2: ANY,
      ) => {
        var OBJ1 = object.CREATE
        (
          ARG2
        )
        ARG1.X1 = OBJ1.X
        ARG1.Y1 = OBJ1.Y
        ARG1.WIDTH1 = OBJ1.WIDTH
        ARG1.HEIGHT1 = OBJ1.HEIGHT
      }
      CLASS1.SET2 = (
        ARG1: TYPE4, 
        ARG2: TYPE4,
      ) => {
        var OBJ1 = object.CREATE
        (
          ARG2
        )
        ARG1.X1 = OBJ1.X1
        ARG1.Y1 = OBJ1.Y1
        ARG1.WIDTH1 = OBJ1.WIDTH1
        ARG1.HEIGHT1 = OBJ1.HEIGHT1
      }
    }
  }
}
class CLASS2 {
  // DATA
  static LENGTH1: number = 100
  /** static METHOD IS NOT PASSED INSTANCE DATA */
  /**
   * DELETE ALL DUMMY AND CONTENT
   * @PARAM DATA1
   */
  static FUNC1 (
    DATA1: TYPE6,
  ): void {
    DATA1.GROUPS1.FOREACH ((GROUP1) => {
      DELETE GROUP1.DUMMY1
      GROUP1.LAYERS1.FOREACH ((LAYER1) => {
        DELETE LAYER1.DUMMY1
      })
    })
  }
  DATA1: TYPE6
  async LOAD1 (
    INDEX1: number, 
    INDEX2: number, 
    INDEX3: number,
  ) 
  {
    var GROUP1 = THIS.DATA1.GROUPS1.AT (
      INDEX1,
    )
    var LAYER1 = GROUP1.LAYERS1.AT (
      INDEX2,
    )
    var HISTORY1 = LAYER1.HISTORIES1.AT (
      INDEX3,
    )
    if 
    (
      (
        (
          undefined == HISTORY1
        )
      )
    ) 
    {
      return
    }
    LET HISTORY2: TYPE18 = object.CREATE
    (
      HISTORY1
    )
    {
      if 
      (
        (
          (
            undefined == HISTORY2
          )
        )
      ) 
      {
        HISTORY2 = 
        {

        }
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1 = 
        {

        }
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.FILE1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.FILE1 = 
        {

        }
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.FILE1.NAME1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.FILE1.NAME1 = undefined
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.OPTION1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.OPTION1 = 
        {

        }
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.OPTION1.LAYOUT1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.OPTION1.LAYOUT1 = 
        {

        }
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.OPTION1.LAYOUT1.HEIGHT1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.OPTION1.LAYOUT1.HEIGHT1 = -1
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.OPTION1.LAYOUT1.WIDTH1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.OPTION1.LAYOUT1.WIDTH1 = -1
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.OPTION1.LAYOUT1.X1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.OPTION1.LAYOUT1.X1 = -1
      }
      if 
      (
        (
          (
            undefined == HISTORY2.IMAGE1.OPTION1.LAYOUT1.Y1
          )
        )
      ) 
      {
        HISTORY2.IMAGE1.OPTION1.LAYOUT1.Y1 = -1
      }
    }
    LAYER1.DUMMY1.HISTORY1 = object.CREATE
    (
      HISTORY2
    )
    LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1 = await COMMON1.CLASS4.READFILEasync (
      HISTORY1.IMAGE1.FILE1.NAME1,
    )
  }
  GET1 (
    INDEX1: number,
  ) 
  {
    return THIS.DATA1.GROUPS1.AT (
      INDEX1,
    )
  }
  GET2 (
    INDEX1: number, 
    INDEX2: number,
  ) 
  {
    return THIS.DATA1.GROUPS1.AT (
      INDEX1,
    ).LAYERS1.AT (
      INDEX2,
    )
  }
  ADD1 (
    INDEX1: number,
  ): TYPE12 {
    var GROUP1: TYPE12 = 
    {

    }
    THIS.INIT4 (
      GROUP1,
    )
    THIS.DATA1.GROUPS1.SPLICE (
      INDEX1, 
      0, 
      GROUP1,
    )
    return GROUP1
  }
  ADD2 (
    INDEX1: number, 
    INDEX2: number,
  ) 
  {
    var GROUP1 = THIS.DATA1.GROUPS1.AT (
      INDEX1,
    )
    var LAYER1: TYPE15 = 
    {

    }
    THIS.INIT6 (
      GROUP1, 
      LAYER1,
    )
    GROUP1.LAYERS1.SPLICE (
      INDEX2, 
      0, 
      LAYER1,
    )
    var HISTORY1: TYPE18 = undefined
    THIS.ADD3 (
      INDEX1, 
      INDEX2, 
      HISTORY1,
    )
  }
  // #1
  // 8, 9, 10, -9, -8, +9, +10 == false
  // 8, 9, 10, -9, 11 -> 9, 11, 12, -11, -9 == TURE
  // 8, 9, 10, -9 -> 8, 9, 11, -9 == true
  // C, 사용자, EF296, DOCUMENTS, -EF296, +DOCUMENTS, -EF296, DEVELOP, -EF296, -사용자, +EF296, +DEVELOP
  // #2
  // 8, 9, 10
  // -9
  // +10
  // 11, 12, 13
  // -12, -11
  // -10, -9
  ///-10, -9, -8
  ADD3 (
    INDEX1: number, 
    INDEX2: number, 
    HISTORY1: TYPE18,
  ) 
  {
    var LAYER1 = THIS.GET2 (
      INDEX1, 
      INDEX2,
    )
    LAYER1.HISTORIES1.push 
    (
      HISTORY1,
    )
    LAYER1.OPTION1.INDEX1 += 1
    THIS.LIMIT1 (
      INDEX1, 
      INDEX2,
    )
  }
  LIMIT1 (
    INDEX1: number, 
    INDEX2: number,
  ) 
  {
    var LAYER1 = THIS.GET2 (
      INDEX1, 
      INDEX2,
    )
    var INDEX3 = Math.MAX (
      0, 
      LAYER1.HISTORIES1.length - CLASS2.LENGTH1,
    ) // 0, 5.
    LAYER1.HISTORIES1 = LAYER1.HISTORIES1.SLICE (
      INDEX3,
    ) // 5~. length == 100.
  }
  INIT1 (

  ) 
  {
    THIS.INIT2 (

    )
    THIS.INIT3 (

    )
    THIS.INIT5 (

    )
    {
      if 
      (
        (
          (
            undefined == THIS.DATA1.OPTION2.INDEX1
          )
        ) || 
        (
          (
            1 >= THIS.DATA1.OPTION2.INDEX1
          )
        )
      ) 
      {
        THIS.DATA1.OPTION2.INDEX1 = 0
      }
      if 
      (
        (
          (
            undefined == THIS.DATA1.OPTION2.INDEX2
          )
        ) || 
        (
          (
            1 >= THIS.DATA1.OPTION2.INDEX2
          )
        )
      ) 
      {
        THIS.DATA1.OPTION2.INDEX2 = 0
      }
    }
  }
  INIT2 (

  ) 
  {
    if 
    (
      (
        (
          undefined == THIS.DATA1
        )
      )
    ) 
    {
      THIS.DATA1 = 
      {

      }
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX1
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX1 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX2
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX2 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX3
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX3 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX4
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX4 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX5
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX5 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX6
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX6 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX7
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX7 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX8
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX8 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX9
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX9 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX10
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX10 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX11
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX11 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX12
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX12 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX13
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX13 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX14
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX14 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.DUMMY1.INDEX15
        )
      )
    ) 
    {
      THIS.DATA1.DUMMY1.INDEX15 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.GROUPS1
        )
      )
    ) 
    {
      THIS.DATA1.GROUPS1 = [

      ]
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION1
        )
      )
    ) 
    {
      THIS.DATA1.OPTION1 = 
      {

      }
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION1.NUM1
        )
      )
    ) 
    {
      THIS.DATA1.OPTION1.NUM1 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION2
        )
      )
    ) 
    {
      THIS.DATA1.OPTION2 = 
      {

      }
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION2.INDEX1
        )
      )
    ) 
    {
      THIS.DATA1.OPTION2.INDEX1 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION2.INDEX2
        )
      )
    ) 
    {
      THIS.DATA1.OPTION2.INDEX2 = -1
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION3
        )
      )
    ) 
    {
      THIS.DATA1.OPTION3 = 
      {

      }
    }
    if 
    (
      (
        (
          undefined == THIS.DATA1.OPTION3.OBJ1
        )
      ) || 
      (
        (
          1
        )
      )
    ) 
    {
      if 
      (
        (
          (
            undefined == THIS.DATA1.OPTION3.OBJ1
          )
        )
      ) 
      {
        THIS.DATA1.OPTION3.OBJ1 = 
        {

        }
      }
      var VALUES1 
      = 
      object.VALUES 
      (
        ENUM1
        ,
      )
      .filter 
      (
        (
          VALUE1
          ,
        ) 
        => 
        "String" 
        == 
        typeof VALUE1
        ,
      )
      .filter 
      (
        (
          VALUE1
          ,
        ) 
        =>
        {
          if 
          (
            (
              (
                "NONE" 
                == 
                VALUE1
              )
            )
          )
          {
            return false
          }
          else
          {
            return true
          }
        } 
        ,
      )
      VALUES1.FOREACH 
      (
        (
          VALUE1
          ,
        ) 
        => 
        {
          if 
          (
            (
              (
                undefined 
                == 
                THIS.DATA1.OPTION3.OBJ1
                [
                  VALUE1
                ]
              )
            )
          ) 
          {
            THIS.DATA1.OPTION3.OBJ1
            [
              VALUE1
            ] 
            = 
            {

            }
          }
          var OBJ1 
          = 
          THIS.DATA1.OPTION3.OBJ1
          [
            VALUE1
          ]
          if 
          (
            (
              (
                undefined 
                == 
                OBJ1.PRESSED1
              )
            )
          ) 
          {
            OBJ1.PRESSED1 
            = 
            false
          }
        },
      )
    }
  }
  INIT3 
  (
    
  ) 
  {
    if 
    (
      (
        (
          undefined 
          == 
          THIS.DATA1.GROUPS1
        )
      ) 
      ||
      (
        (
          true
        )
      )
    ) 
    {
      if 
      (
        (
          (
            undefined 
            == 
            THIS.DATA1.GROUPS1
          )
        )
      ) 
      {
        THIS.DATA1.GROUPS1 
        = 
        [

        ]
      }
      if 
      (
        (
          (
            0 
            ==
            THIS.DATA1.GROUPS1.length
          )
        )
      ) 
      {
        var INDEX1 
        = 
        0
        THIS.ADD1 
        (
          INDEX1,
        )
      }
      THIS.DATA1.GROUPS1.FOREACH 
      (
        (
          GROUP1, 
          INDEX1,
        ) 
        => 
        {
          THIS.INIT4 
          (
            GROUP1,
          )
        }
      )
    }
  }
  INIT4 
  (
    GROUP1: TYPE12,
  ) 
  {
    if 
    (
      (
        (
          undefined == GROUP1.DUMMY1
        )
      )
    ) 
    {
      GROUP1.DUMMY1 
      = 
      {

      }
    }
    if 
    (
      (
        (
          undefined 
          == 
          GROUP1.DUMMY1.ELEMENT1
        )
      )
    ) 
    {
      GROUP1.DUMMY1.ELEMENT1 
      = 
      undefined
    }
    if 
    (
      (
        (
          undefined 
          == 
          GROUP1.DUMMY1.ELEMENT2
        )
      )
    ) 
    {
      GROUP1.DUMMY1.ELEMENT2
      = 
      undefined
    }
    if 
    (
      (
        (
          undefined 
          == 
          GROUP1.DUMMY1.ELEMENT3
        )
      ) 
    ) 
    {
      GROUP1.DUMMY1.ELEMENT3 
      = 
      undefined
    }
    if 
    (
      (
        (
          undefined 
          == 
          GROUP1.DUMMY1.LAYOUT1
        )
      )
    ) 
    {
      GROUP1.DUMMY1.LAYOUT1 = 
      {

      }
    }
    if 
    (
      (
        (
          undefined 
          == 
          GROUP1.DUMMY1.LAYOUT1.HEIGHT1
        )
      )
    ) 
    {
      GROUP1.DUMMY1.LAYOUT1.HEIGHT1 = 0
    }
    if 
    (
      undefined 
      == 
      GROUP1.DUMMY1.LAYOUT1.WIDTH1)
    {
      GROUP1.DUMMY1.LAYOUT1.WIDTH1 = 0
    }
    if 
    (
      undefined
      == 
      GROUP1.DUMMY1.LAYOUT1.X1
    ) 
    {
      GROUP1.DUMMY1.LAYOUT1.X1 = 0
    }
    if 
    (
      undefined
      == 
      GROUP1.DUMMY1.LAYOUT1.Y1
    ) 
    {
      GROUP1.DUMMY1.LAYOUT1.Y1 = 0
    }
    if 
    (
      undefined
      == 
      GROUP1.DUMMY1.REF1
    ) 
    {
      GROUP1.DUMMY1.REF1 = undefined
    }
    if 
    (
      undefined
      == 
      GROUP1.DUMMY1.REND1
    ) 
    {
      GROUP1.DUMMY1.REND1 = undefined
    }
    if 
    (
      undefined
      == 
      GROUP1.DUMMY1.REND2
    ) 
    {
      GROUP1.DUMMY1.REND2 = undefined
    }
    if 
    (
      undefined
      == 
      GROUP1.DUMMY1.REND3
    ) 
    {
      GROUP1.DUMMY1.REND3 = undefined
    }
    if 
    (
      undefined
      == 
      GROUP1.ID1
    ) 
    {
      GROUP1.ID1 
      = 
      COMMON.GETSUNIQUEID 
      (

      )
    }
    if 
    (
      undefined
      == 
      GROUP1.LAYERS1
    ) 
    {
      GROUP1.LAYERS1 
      = 
      [

      ]
    }
    if 
    (
      undefined
      == 
      GROUP1.NAME1
    ) 
    {
      THIS.DATA1.OPTION1.NUM1 
      = 
      THIS.DATA1.OPTION1.NUM1
      +
      1
      GROUP1.NAME1 
      = 
      CLASS1.STR001 
      + 
      " " 
      + 
      THIS.DATA1.OPTION1.NUM1
    }
    if 
    (
      undefined
      == 
      GROUP1.OPTION1
    ) 
    {
      GROUP1.OPTION1 = 
      {

      }
    }
    if 
    (
      undefined
      == 
      GROUP1.OPTION1.CHECK1
    ) 
    {
      GROUP1.OPTION1.CHECK1 
      = 
      true
    }
    if 
    (
      undefined
      == 
      GROUP1.OPTION1.NUM1
    ) 
    {
      GROUP1.OPTION1.NUM1 
      = 
      -1
    }
  }
  INIT5 
  (

  )
  {
    if 
    (
      (
        (
          undefined
          == 
          THIS.DATA1.GROUPS1
        )
      )
      || 
      (
        (
          true
        )
      )
    )
    {
      THIS.DATA1.GROUPS1.FOREACH 
      (
        (
          GROUP1, 
          INDEX1,
        )
        => 
        {
          if 
          (
            GROUP1.LAYERS1.length 
            == 
            0
          ) 
          {
            var INDEX2 
            = 
            0
            THIS.ADD2 
            (
              INDEX1, 
              INDEX2,
            )
          }
          GROUP1.LAYERS1.FOREACH 
          (
            (
              LAYER1, 
              INDEX2,
            ) 
            => 
            {
              THIS.INIT6 
              (
                GROUP1, 
                LAYER1,
              )
            }
          )
        }
      )
    }
  }
  INIT6 
  (
    GROUP1: TYPE12, 
    LAYER1: TYPE15,
  )
  {
    function 푸100
    (
      오브즈1: object
    )
    {
      `
      ${오브즈1}(샘플)의 구조를 통해 키값을 조회 
      키가 없으면 미리 정의된 값을 지정
      `
      var 배1 
      = 
      COMMON.FLATSOBJECT
      (
        오브즈1
      )
      
      return
    }
    if
    (
      undefined
      ==
      LAYER1.DUMMY1
    )
    {
      LAYER1.DUMMY1 
      = 
      {

      }
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.LAYOUT1
    ) 
    {
      LAYER1.DUMMY1.LAYOUT1 
      = 
      {

      }
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.LAYOUT1.HEIGHT1
    ) 
    {
      LAYER1.DUMMY1.LAYOUT1.HEIGHT1 
      = 
      0
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.LAYOUT1.WIDTH1
    ) 
    {
      LAYER1.DUMMY1.LAYOUT1.WIDTH1 
      = 
      0
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.LAYOUT1.X1
    ) 
    {
      LAYER1.DUMMY1.LAYOUT1.X1 = 0
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.LAYOUT1.Y1
    ) 
    {
      LAYER1.DUMMY1.LAYOUT1.Y1 
      = 
      0
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.ELEMENT1
    ) 
    {
      LAYER1.DUMMY1.ELEMENT1 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.ELEMENT22
    ) 
    {
      LAYER1.DUMMY1.ELEMENT22 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.ELEMENT20
    ) 
    {
      LAYER1.DUMMY1.ELEMENT20 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.HISTORY1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1 
      = 
      {

      }
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.HISTORY1.IMAGE1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1 
      = 
      {

      }
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1 
      = 
      {

      }
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1 
      = 
      {

      }
    }
    if 
    (
      undefined == LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1 = 
      {}
    }
    if 
    (
      undefined == LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.HEIGHT1) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.HEIGHT1 = 0
    }
    if 
    (
      undefined == LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.WIDTH1) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.WIDTH1 = 0
    }
    if 
    (
      undefined == LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.X1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.X1 
      = 
      0
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.Y1
    ) 
    {
      LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.Y1 
      = 
      0
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.REND1
    ) 
    {
      LAYER1.DUMMY1.REND1 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.REND20
    ) 
    {
      LAYER1.DUMMY1.REND20 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.REND21
    ) 
    {
      LAYER1.DUMMY1.REND21 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.DUMMY1.REND22
    ) 
    {
      LAYER1.DUMMY1.REND22 
      = 
      undefined
    }
    if 
    (
      undefined 
      == 
      LAYER1.HISTORIES1
    ) 
    {
      LAYER1.HISTORIES1 
      = 
      [

      ]
    }
    if 
    (
      undefined 
      ==
      LAYER1.ID1
    ) 
    {
      LAYER1.ID1 
      = 
      COMMON.GETSUNIQUEID 
      (

      )
    }
    if 
    (
      undefined 
      == 
      LAYER1.NAME1
    ) 
    {
      GROUP1.OPTION1.NUM1 
      = 
      GROUP1.OPTION1.NUM1
      +
      1
      LAYER1.NAME1 
      = 
      CLASS1.STR001 
      + 
      " " 
      + 
      GROUP1.OPTION1.NUM1
    }
    if 
    (
      (
        (
          undefined 
          == 
          LAYER1.OPTION1
        )
      )
    ) 
    {
      LAYER1.OPTION1 = 
      {
      }
    }
    if 
    (
      undefined == LAYER1.OPTION1.INDEX1) 
    {
      LAYER1.OPTION1.INDEX1 
      = 
      -1
    }
  }
}
CLASS OBJ1 
{
  INST1: CLASS1
  INST2: CLASS2
  CALL1: function 
  = 
  undefined
  CALL2: 
  (

  ) 
  => 
  boolean 
  = 
  undefined
}
var OBJ1 
= 
new OBJ1 
(

)
OBJ1.CALL1 
= 
(

) 
=> 
{
  CLEARINTERVAL 
  (
    CLASS1.ID1
  )
  CLASS1.ID1 
  =
  undefined
}
OBJ1.CALL2 = () => {
  // SOURCE CHANGE TO LOG CHANGE TO APPLY
  LET BOOL1: boolean = true
  TRY {
    // @TS-IGNORE
    if 
    (CLASS1.NUM1 == CLASS1.VALUE002) 
    {
      if 
      (CLASS1.BOOL2) 
      {
        console.log ("BACKHANDLER::CLOSING")
        var BUTTON1 = CLASS1.GETCURRENTBUTTON1 ()
        CLASS1.NAME1 = "NONE"
        BUTTON1.REND1 ()
        CLASS1.REND7 ()
        CLASS1.CLOSE1 ()
      } else {
        console.log ("BACKHANDLER::false")
        BOOL1 = false 
      }
    }
    if 
    (BOOL1) 
    {
    } else {
      if 
      (
        OBJ1.CALL1
      ) 
      {
        OBJ1.CALL1 
        (

        )
      }
      if 
      (
        (
          (
            undefined == OBJ1    
          )
        )
      ) 
      {

      }
      else
      {
        CLASS1.SAVE1 
        (
          OBJ1.INST2.DATA1
        )
      }
      BACKHANDLER.REMOVEEVENTLISTENER ("HARDWAREBACKPRESS", OBJ1.CALL2)
    }
  } CATCH (ERROR) 
  {
    CONSOLE.ERROR (ERROR)
  } FINALLY {
    // return AFTER EXCUTE
  }
  return BOOL1
}
var STYLES1 = STYLESHEET.CREATE ({
  OBJ1: {
    PADDING: CLASS1.PADDING1,
    WIDTH: CLASS1.WIDTH001
  },
  OBJ2: {
    MARGINHORIZONTAL: 6,
  },
  OBJ3: {
    ALIGNITEMS: "CENTER",
    DISPLAY: "FLEX",
    FLEXDIRECTION: "COLUMN",
    JUSTIFYCONTENT: "CENTER",
    MARGINHORIZONTAL: 4,
    PADDING: 4
  },
  OBJ4: {
    BACKGROUNDCOLOR: "RGBA (245, 245, 245, 1)",
    BORDERRADIUS: 8
  },
  OBJ7: {
  },
  OBJ23A1: {
    ALIGNITEMS: "FLEX-START",
    BORDERCOLOR: "RGBA (245, 245, 245, 1)",
    BORDERTOPWIDTH: 1,
    DISPLAY: "FLEX",
    FLEXDIRECTION: "ROW",
    HEIGHT: "100%",
    JUSTIFYCONTENT: "FLEX-START",
    WIDTH: "100%"
  },
  OBJ23A2: {
    PADDING: 8,
  },
  OBJ23A3: {
    COLOR: "RGBA (166, 166, 166, 1)",
  },
  OBJ024A01: {
    ALIGNITEMS: "FLEX-START",
    BORDERCOLOR: "RGBA (245, 245, 245, 1)",
    BORDERTOPWIDTH: 1,
    DISPLAY: "FLEX",
    FLEXDIRECTION: "ROW",
    HEIGHT: "100%",
    JUSTIFYCONTENT: "FLEX-START",
    WIDTH: "100%"
  },
  OBJ024A02: {
    PADDING: 8,
  },
  OBJ024A03: {
    COLOR: "RGBA (166, 166, 166, 1)",
  },
  OBJ9: {
    HEIGHT: "100%",
    BORDERRIGHTWIDTH: 1,
    BORDERCOLOR: "RGBA (245, 245, 245, 1)",
  },
  OBJ10: {
    FLEXGROW: 3,
    FLEXSHRINK: 1,
    HEIGHT: "100%",
  },
  OBJ11: {
    ALIGNITEMS: "FLEX-START",
    BORDERBOTTOMWIDTH: 1,
    BORDERCOLOR: "RGBA (245, 245, 245, 1)",
    DISPLAY: "FLEX",
    FLEXDIRECTION: "ROW",
    HEIGHT: CLASS1.HEIGHT3,
    JUSTIFYCONTENT: "FLEX-START",
    WIDTH: "100%"
  },
  OBJ20A1: {
    FLEXGROW: 3,
    FLEXSHRINK: 1,
    PADDING: 8,
  },
  OBJ13: {
    BORDERBOTTOMWIDTH: 1,
    BORDERCOLOR: "RGBA (245, 245, 245, 1)",
  },
})
// @TS-IGNORE
var COMP
:
{
  _1
  :
  (
    PROP1
    : 
    {
    }
  )
  =>
  REACTELEMENT
}
=
{
  _1
  (
    PROP1
  ) 
  {
      return <></>
  },
}
{
  COMP._1
}
export default COMP._1
function COMP1 (PROP1?: {
}) 
{
  CLASS1.PARAM1 = USELOCALSEARCHPARAMS ()
  CLASS1.REF001 = USEREF ()
  var REF1 = USEREF (APPSTATE.CURRENTSTATE)
  var [STATE1] = useState<{
    INST1: CLASS1
    INST2: CLASS2
  }>(() => {
    return {
      INST1: new CLASS1 (),
      INST2: new CLASS2 (),
    }
  })
  
  OBJ1.INST1 = STATE1.INST1
  OBJ1.INST2 = STATE1.INST2
  CLASS1.REND1 = CLASS1.USE001 ()

  useEffect (() => {
    ;(async () => {
      var STR1 = await COMMON1.CLASS3.READFILEasync (CLASS1.PARAM1.ID1)
      if 
      (
        (
          (
            undefined == STR1
          )
        )
      ) 
      {

      }
      else
      {
        OBJ1.INST2.DATA1 = JSON.PARSE (STR1)
      }
      OBJ1.INST2.INIT1 ()
      CLASS1.REND1 ()
    })()

    var INST1 = APPSTATE.ADDEVENTLISTENER ("CHANGE", ARG1 => {
      if 
      (
        REF1.CURRENT.MATCH (/ACTIVE/) &&
        ARG1 === "BACKGROUND"
      ) 
      {
        CLEARINTERVAL (CLASS1.ID1)
        CLASS1.ID1 = undefined
        ;(async () => {
          console.log ("BACKGROUND")
          await CLASS1.SAVE1 (OBJ1.INST2.DATA1)
        })()
      }
      if 
      (
        REF1.CURRENT.MATCH (/INACTIVE|BACKGROUND/) &&
        ARG1 === "ACTIVE"
      ) 
      {
        CLASS1.ID1 = SETINTERVAL (() => {
          console.log ("INTERVAL")
          ;(async () => {
            await CLASS1.SAVE1 (OBJ1.INST2.DATA1)
          })()
        }, 1000 * 60 * 5)
      }

      REF1.CURRENT = ARG1;
    })
    
    // CONTAINER1.CALL3 = (): boolean => {
    //   console.log ("BACK")
    //   BACKHANDLER.REMOVEEVENTLISTENER ("HARDWAREBACKPRESS", CONTAINER1.CALL3)
    //   return false
    // }

    // BACKHANDLER.ADDEVENTLISTENER ("HARDWAREBACKPRESS", CONTAINER1.CALL3)
    BACKHANDLER.ADDEVENTLISTENER ("HARDWAREBACKPRESS", OBJ1.CALL2)
    return () => {
      INST1.REMOVE ()
    }
  }, [])
  // LAYERS
  // PALLETS (ALL COLORS)
  // LOCATIONS
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          // LAYOUT CONTAIN STATUSBAR.CURRENTHEIGHT
          CLASS1.SET1 (CLASS1.LAYOUT1, EVENT1.NATIVEEVENT.LAYOUT)
          CLASS1.REND1 ()
        }
      }
      REF = 
      { CLASS1.REF001 }
      STYLE = 
      { 
        {
          DISPLAY: "FLEX",
          FLEXDIRECTION: "COLUMN",
          HEIGHT: "100%",
          JUSTIFYCONTENT: "FLEX-START",
          POSITION: "RELATIVE",
          WIDTH: "100%",
        }
      }
    >
      <COMP._1></COMP._1>
      {
        undefined 
        ==
        OBJ1.INST2.DATA1
        ?
        (
          <VIEW>

          </VIEW>
        )
        :
        (
          <COMP333>
          
          </COMP333>
        )
      }
    </VIEW>
  )
}
function COMP333 (PROP1?: {
}) 
{
  CLASS1.REF333 = USEREF ()
  CLASS1.REND333 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT333, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      {
        CLASS1.REF333
      }
      STYLE = 
      {
        {
          WIDTH: "100%",
          HEIGHT: "100%",
        }
      }
    >
      <COMP3333></COMP3333>      
      <COMP3>
      </COMP3>
    </VIEW>
  )
}
function COMP3333 (PROP1?: {
}) 
{
  CLASS1.REF3333 = USEREF ()
  CLASS1.REND3333 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT3333, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      {
        CLASS1.REF3333
      }
      STYLE = 
      {
        {
          POSITION: "RELATIVE",
          WIDTH: CLASS1.LAYOUT1.WIDTH1,
          HEIGHT: CLASS1.LAYOUT1.HEIGHT1 - CLASS1.LAYOUT4.HEIGHT1,
        }
      }
    >
      <COMP2>
      </COMP2>
    </VIEW>
  )
}
function COMP2 (PROP1?: {
}) 
{
  CLASS1.REF002 = USEREF ()
  CLASS1.REND2 = CLASS1.USE001 ()
  useEffect (() => {
    CLASS1.OPTION2.TOP1 = 0
    CLASS1.OPTION2.BOTTOM1 = 0
    CLASS1.OPTION2.LEFT1 = 0
    CLASS1.OPTION2.RIGHT1 = 0
  }, [])
  useEffect (() => {
    ;(async () => {
      TRY {
        var PromiseS = []
        for (LET NUM1 = 0; NUM1 < OBJ1.INST2.DATA1.GROUPS1.length; NUM1 += 1) 
          {
          var GROUP1 = OBJ1.INST2.DATA1.GROUPS1.AT (NUM1);
          for (LET NUM2 = 0; NUM2 < GROUP1.LAYERS1.length; NUM2 += 1) 
            {
            var LAYER1 = GROUP1.LAYERS1.AT (NUM2)
            if 
            (LAYER1.OPTION1.INDEX1 >= 0 && LAYER1.OPTION1.INDEX1 <= LAYER1.HISTORIES1.length - 1) 
            {
              PromiseS.push 
              (OBJ1.INST2.LOAD1 (NUM1, NUM2, LAYER1.OPTION1.INDEX1))
            }
          }
        }
        await Promise.ALL (PromiseS)
      } CATCH (ERROR) 
      {
        CONSOLE.ERROR (ERROR)
      } FINALLY {
      }
      CLASS1.REND2 ()
    })()
  }, [OBJ1.INST2.DATA1])
  // ${
  //   !!CONTAINER1.MANAGER1.DATA && 
  //   CONTAINER1.MANAGER1.DATA.GROUPS1.map ((GROUP, INDEX1) => {
  //     return GROUP.LAYERS.map ((LAYER, INDEX2) => {
  //       // MERGE TO new IMAGE
  //       var IMAGE = MANAGER1.GETGROUPS1INLAYEROFIMAGE (LAYER)
  //       if 
  (!!IMAGE) 
  {
  //         return `<IMG ID="IMAGE_${INDEX1}_${INDEX2}" STYLE="POSITION: absOLUTE; LEFT: 0; TOP: 0; POINTER-EVENT1S: NONE; WIDTH: ${IMAGE.LAYOUT.WIDTH}PX; HEIGHT: ${IMAGE.LAYOUT.HEIGHT}PX;" SRC="${IMAGE.FILE1.CONTENT}" />`
  //       } else {
  //         return ``
  //       }
  //     })
  //   }) 
  // }
  // ${
  //   !!CONTAINER1.MANAGER1.DATA &&
  //   (
  //     (() => {
  //       var GROUP1 = CONTAINER1.MANAGER1.GETCURRENTGROUP1 ()
  //       var INDEX1 = CONTAINER1.MANAGER1.DATA.OPTION.NUM1
  //       var INDEX2 = GROUP1.OPTION.NUM1
  //       console.log ("#112", INDEX1, INDEX2)
  //       var IMAGE1 = CONTAINER1.MANAGER1.GETCURRENTGROUPS1INLAYEROFIMAGE ()
  //       if 
  (!!IMAGE1) 
  {
  //         return (
  //           `<IMG ID="IMAGE_${INDEX1}_${INDEX2}" STYLE="POSITION: absOLUTE; LEFT: 0; TOP: 0; POINTER-EVENT1S: NONE; WIDTH: ${IMAGE1.LAYOUT.WIDTH}PX; HEIGHT: ${IMAGE1.LAYOUT.HEIGHT}PX;" SRC="${IMAGE1.FILE1.CONTENT}" />`
  //         )
  //       } else {
  //         return ``
  //       }
  //       // return (
  //       //   `<IMG ID="IMAGE_${INDEX1}_${INDEX2}" STYLE="POSITION: absOLUTE; LEFT: 0; TOP: 0; POINTER-EVENT1S: NONE; WIDTH: ${IMAGE1.LAYOUT.WIDTH}PX; HEIGHT: ${IMAGE1.LAYOUT.HEIGHT}PX;" SRC="${IMAGE1.FILE1.CONTENT}" />`
  //       // )
  //     })()
  //   )
  // }
  // ${
  //   !!CONTAINER1.INST2.DATA1 && 
  //   CONTAINER1.INST2.DATA1.GROUPS1.map ((GROUP1, INDEX1) => {
  //     return GROUP1.LAYERS1.map ((LAYER1, INDEX2) => {
  //       if 
  (!!LAYER1.IMAGE1) 
  {
  //         console.log (`IMAGE_${INDEX1}_${INDEX2}`, LAYER1.IMAGE1.FILE1.NAME1)
  //         return `<IMG ID="IMAGE_${INDEX1}_${INDEX2}" STYLE="OPACITY: 1; POSITION: absOLUTE; LEFT: ${LAYER1.IMAGE1.OPTION1.LAYOUT1.X1}; TOP: ${LAYER1.IMAGE1.OPTION1.LAYOUT1.Y1}; POINTER-EVENT1S: NONE; WIDTH: ${LAYER1.IMAGE1.OPTION1.LAYOUT1.WIDTH1}PX; HEIGHT: ${LAYER1.IMAGE1.OPTION1.LAYOUT1.HEIGHT1}PX; MARGIN: 0; PADDING: 0;" SRC="${LAYER1.IMAGE1.FILE1.CONTENT1}" />`
  //       } else {
  //         return ``
  //       }
  //     })
  //   })
  // }
  return (
    <VIEW
      ONLAYOUT = 
      { 
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT2, EVENT1.NATIVEEVENT.LAYOUT)
          CLASS1.REND2 ()
        } 
      }  
      REF = 
      { CLASS1.REF002 }
      STYLE = 
      { 
        {
          POSITION: "RELATIVE",
          WIDTH: "100%",
          HEIGHT: "100%",
        } 
      }
    >
      <WEBVIEW
        JAVASCRIPTENABLED
        STYLE = 
        { 
          {
            WIDTH: "100%",
            HEIGHT: "100%",
          } 
        }
        OVERSCROLLMODE="NEVER"
        SOURCE = 
        { 
          { 
            HTML: `
              <HTML STYLE="MARGIN: 0; PADDING: 0; WIDTH: 100%; HEIGHT: 100%; OVERFLOW-X: HIDDEN; OVERFLOW-Y: HIDDEN;">
                <HEAD>
                  <META NAME="VIEWPORT" CONTENT="WIDTH=DEVICE-WIDTH, MINIMUM-SCALE=1.0, INITIAL-SCALE=1.0, MAXIMUM-SCALE=1.0, USER-SCALABLE=NO">
                </HEAD>
                <BODY
                  STYLE="
                    MARGIN: 0; 
                    PADDING: 0; 
                    WIDTH: 100%; 
                    HEIGHT: 100%; 
                    OVERFLOW-X: HIDDEN; 
                    OVERFLOW-Y: HIDDEN;
                  "
                >
                  <DIV
                    STYLE="
                      POSITION: RELATIVE; 
                      MARGIN: 0;
                      PADDING-TOP: 0;
                      PADDING-BOTTOM: 0;
                      PADDING-LEFT: 0;
                      PADDING-RIGHT: 0;
                      WIDTH: 100%; 
                      HEIGHT: 100%;
                    "
                  >
                    <DIV
                      STYLE="
                        POSITION: absOLUTE;
                        TOP: ${CLASS1.OPTION2.TOP1}PX;
                        LEFT: ${CLASS1.OPTION2.LEFT1}PX;
                        WIDTH: 100%;
                        HEIGHT: 100%;
                        MARGIN: 0; 
                        PADDING: 0;
                        POINTER-EVENT1S: NONE;
                        // BORDER: 3PX SOLID #3D3;
                        // BOX-SIZING: BORDER-BOX;
                        // BACKGROUND-COLOR: RGBA (233, 22, 233, 1);
                      "
                    >
                      <DIV
                        STYLE="
                          POSITION: "RELATIVE",
                          WIDTH: 100%;
                          HEIGHT: 100%;
                          MARGIN: 0; 
                          PADDING: 0;
                        "
                      >
                        ${
                          (() => {
                            LET STR1 = ``
                            OBJ1.INST2.DATA1.GROUPS1.FOREACH ((GROUP1, INDEX1) => {
                              GROUP1.LAYERS1.FOREACH ((LAYER1, INDEX2) => {
                                if 
                                (!!LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1) 
                                {
                                  STR1 += `
                                    <IMG 
                                      ID="IMAGE_${INDEX1}_${INDEX2}"
                                      STYLE="
                                        OPACITY: 0.1;
                                        POSITION: absOLUTE;
                                        LEFT: ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.X1}PX; 
                                        TOP: ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.Y1}PX; 
                                        WIDTH: ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.WIDTH1}PX; 
                                        HEIGHT: ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.HEIGHT1}PX; 
                                        BOX-SIZING: BORDER-BOX;
                                        // BORDER: 3PX SOLID #DDD;
                                      " 
                                      SRC="${LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1}" 
                                    />
                                  `
                                }
                              })
                            })
                            return STR1
                          })()
                        }
                      </DIV>
                    </DIV>
                    <DIV
                      ID="DIV2"
                      STYLE="
                        POSITION: absOLUTE;
                        TOP: ${CLASS1.OPTION2.TOP1};
                        LEFT: ${CLASS1.OPTION2.LEFT1};
                        WIDTH: 100%;
                        HEIGHT: 100%;
                        MARGIN: 0; 
                        PADDING: 0;
                        OVERFLOW-X: HIDDEN; 
                        OVERFLOW-Y: HIDDEN;
                        // BORDER: 3PX SOLID #D33;
                        BOX-SIZING: BORDER-BOX;
                        // BACKGROUND-COLOR: RGBA (111, 233, 233, 0.5);
                      "
                    >
                      <CANVAS 
                        ID="CANVAS1"
                        STYLE="
                          MARGIN: 0;
                          PADDING: 0;
                          BACKGROUND-COLOR: RGBA (111, 233, 233, 1);
                        "
                      >
                      </CANVAS>
                    </DIV>
                  </DIV>
                  <SCRIPT LANGUAGE="JAVASCRIPT">
                    ${ 
                      (
                        [OBJ1.INST2.DATA1.OPTION2.INDEX1, OBJ1.INST2.DATA1.OPTION2.INDEX2, OBJ1.INST2.GET2 (OBJ1.INST2.DATA1.OPTION2.INDEX1, OBJ1.INST2.DATA1.OPTION2.INDEX2).OPTION1.INDEX1] // THIS WILL RUN HTML AND INJECTEDJAVASCRIPT
                      )
                    }
                  </SCRIPT>
                </BODY>
              </HTML>
            `,
          }
        }
        INJECTEDJAVASCRIPT = 
        {
          `
            TRY {
              WINDOW.REACTNATIVEWEBVIEW.POSTMESSAGE (JSON.StringIFY ({
                MESSAGE1: "INJECTEDJAVASCRIPT"
              }))
              var EL1 = DOCUMENT.GETELEMENTBYID ("DIV2")
              var EL2 = DOCUMENT.GETELEMENTBYID ("CANVAS1")
              var CTX1 = EL2.GETCONTEXT ("2D")

              EL2.HEIGHT = ${!!CLASS1.LAYOUT2.HEIGHT1 ? CLASS1.LAYOUT2.HEIGHT1 : 0}
              EL2.WIDTH = ${!!CLASS1.LAYOUT2.WIDTH1 ? CLASS1.LAYOUT2.WIDTH1 : 0}
              CTX1.LInewIDTH = ${CLASS1.OPTION1.WIDTH1}
              CTX1.STROKESTYLE = "${CLASS1.OPTION1.CCOLOR1}"

              ${ 
                (() => {
                  var GROUP1 = OBJ1.INST2.GET1 (OBJ1.INST2.DATA1.OPTION2.INDEX1)
                  var LAYER1 = OBJ1.INST2.GET2 (OBJ1.INST2.DATA1.OPTION2.INDEX1, OBJ1.INST2.DATA1.OPTION2.INDEX2)
                  if 
                  (!!LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1) 
                  {
                    return `
                      var IMAGE1 = DOCUMENT.GETELEMENTBYID ("IMAGE_${OBJ1.INST2.DATA1.OPTION2.INDEX1}_${OBJ1.INST2.DATA1.OPTION2.INDEX2}")
                      // CTX1.CLEARRECT (${CLASS1.LAYOUT2.X1}, ${CLASS1.LAYOUT2.Y1}, ${CLASS1.LAYOUT2.WIDTH1}, ${CLASS1.LAYOUT2.HEIGHT1})
                      CTX1.DRAWIMAGE (IMAGE1, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.X1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.Y1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.WIDTH1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.HEIGHT1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.X1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.Y1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.WIDTH1}, ${LAYER1.DUMMY1.HISTORY1.IMAGE1.OPTION1.LAYOUT1.HEIGHT1})
                    `
                  } 
                  else 
                  {
                    return ``
                  }
                })()
              }

              EL1.ADDEVENTLISTENER ("TOUCHSTART", (EVENT11) => {
                CTX1.BEGINPATH ()
                CTX1.MOVETO (EVENT11.TOUCHES[0].SCREENX - ${CLASS1.OPTION2.LEFT1}, EVENT11.TOUCHES[0].SCREENY - ${CLASS1.OPTION2.TOP1} - ${STATUSBAR.CURRENTHEIGHT})
              })
              EL1.ADDEVENTLISTENER ("TOUCHMOVE", (EVENT11) => {
                // CTX1.LInewIDTH = (${CLASS1.OPTION1.WIDTH1} * EVENT11.TOUCHES[0].FORCE)
                TRY {
                  CTX1.LINETO (EVENT11.TOUCHES[0].SCREENX - ${CLASS1.OPTION2.LEFT1}, EVENT11.TOUCHES[0].SCREENY - ${CLASS1.OPTION2.TOP1} - ${STATUSBAR.CURRENTHEIGHT})
                  CTX1.STROKE ()
                  WINDOW.REACTNATIVEWEBVIEW.POSTMESSAGE (JSON.StringIFY ({
                    MESSAGE1: "TOUCHMOVE"
                  }))
                } CATCH (ERROR) 
                 {
                  WINDOW.REACTNATIVEWEBVIEW.POSTMESSAGE (JSON.StringIFY ({
                    MESSAGE1: ERROR.MESSAGE
                  }))
                }
              })
              EL1.ADDEVENTLISTENER ("TOUCHEND", (EVENT11) => {
                CTX1.CLOSEPATH ()
                WINDOW.REACTNATIVEWEBVIEW.POSTMESSAGE (JSON.StringIFY ({
                  MESSAGE1: "${ENUM2.TO DATA URL}",
                  TEXT1: EL2.TODATAURL (),
                }))
              })
            } CATCH (ERROR) 
             {
              WINDOW.REACTNATIVEWEBVIEW.POSTMESSAGE (JSON.StringIFY ({
                MESSAGE1: ERROR.MESSAGE
              }))
            }
          `
        }
        ONMESSAGE = 
        { async (EVENT1) => {
          TRY {
            if 
            (EVENT1.NATIVEEVENT.DATA == "undefined") 
            {
              CONSOLE.WARN ("EVENT1.NATIVEEVENT.DATA IS undefined")
              return
            }
            var DATA: 
            {
              MESSAGE1?: string
              TEXT1?: string
            } 
            = JSON.PARSE (EVENT1.NATIVEEVENT.DATA)
  
            if 
            (!DATA.MESSAGE1) 
            {
              CONSOLE.WARN ("DATA.MESSAGE IS " + DATA.MESSAGE1)
              return
            }
  
            if 
            (ENUM2[DATA.MESSAGE1] == "TODATAURL") 
            {
              var NAME1 = COMMON.GETSUNIQUEID ()
              var CONTENT1 = DATA.TEXT1
              
              await COMMON1.CLASS4.WRITEFILEasync (NAME1, CONTENT1)
              
              LET HISTORY1: TYPE18 = undefined
              if 
              (!HISTORY1) 
              {
                HISTORY1 = 
                {}
              }
              if 
              (!HISTORY1.IMAGE1) 
              {
                HISTORY1.IMAGE1 = 
                {}
              }
              if 
              (!HISTORY1.IMAGE1.FILE1) 
              {
                HISTORY1.IMAGE1.FILE1 = 
                {}
              }
              if 
              (!HISTORY1.IMAGE1.FILE1.NAME1) 
              {
                HISTORY1.IMAGE1.FILE1.NAME1 = NAME1
              }
              if 
              (!HISTORY1.IMAGE1.OPTION1) 
              {
                HISTORY1.IMAGE1.OPTION1 = 
                {}
              }
              if 
              (!HISTORY1.IMAGE1.OPTION1.LAYOUT1) 
              {
                HISTORY1.IMAGE1.OPTION1.LAYOUT1 = 
                {}
                CLASS1.SET2 (HISTORY1.IMAGE1.OPTION1.LAYOUT1, CLASS1.LAYOUT2)
              }
              OBJ1.INST2.ADD3 (OBJ1.INST2.DATA1.OPTION2.INDEX1, OBJ1.INST2.DATA1.OPTION2.INDEX2, HISTORY1)

              var LAYER1 = OBJ1.INST2.GET2 (OBJ1.INST2.DATA1.OPTION2.INDEX1, OBJ1.INST2.DATA1.OPTION2.INDEX2)
              var POS1 = OBJ1.INST2.DATA1.OPTION2.INDEX1
              var POS2 = OBJ1.INST2.DATA1.OPTION2.INDEX2
              OBJ1.INST2.DATA1.DUMMY1.INDEX1 = POS1
              OBJ1.INST2.DATA1.DUMMY1.INDEX2 = POS2
              LAYER1.DUMMY1.REND22 ()
              
              return
            }
  
            console.log ("POST MESSAGE:", DATA.MESSAGE1)
          } CATCH (ERROR) 
          {
            CONSOLE.ERROR (ERROR)
          }
        } }
      />
    </VIEW>
  )
}
function COMP3 (PROP1?: { 
}) 
{
  // CHANGED: CURRENT -> TOP BUTTONS1. BOTTOM Tabs1.
  CLASS1.REF003 = USEREF ()
  CLASS1.REND3 = CLASS1.USE001 ()
  return (
    <ANIMATED.VIEW
      ONLAYOUT = 
      { 
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT3, EVENT1.NATIVEEVENT.LAYOUT)
          CLASS1.REND2 ()
        } 
      }
      REF = 
      { CLASS1.REF003 }
      STYLE = 
      { 
        {
          POSITION: "absOLUTE",
          WIDTH: "100%",
          HEIGHT: CLASS1.LAYOUT4.HEIGHT1,
          BOTTOM: CLASS1.INST2,
          POINTEREVENTS: "AUTO",
        } 
      }
    >
      <VIEW
        STYLE = 
        { 
          {
            DISPLAY: "FLEX",
            FLEXDIRECTION: "COLUMN",
            JUSTIFYCONTENT: "FLEX-START",
            ALIGNITEMS: "FLEX-START",
            WIDTH: "100%",
            HEIGHT: "100%",
            BACKGROUNDCOLOR: "RGBA (252, 252, 252, 1)",
          } 
        }
      >
        <COMP4></COMP4>
        <COMP8></COMP8>
      </VIEW>
    </ANIMATED.VIEW>
  )
}
function COMP4 (PROP1?: {
}) 
{
  CLASS1.REF004 = USEREF ()
  CLASS1.REND4 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      { 
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT4, EVENT1.NATIVEEVENT.LAYOUT)
          CLASS1.REND3 ()
        }
      }
      REF = 
      { CLASS1.REF004 }
      STYLE = 
      { 
        {
          WIDTH: "100%",
        }
      }
    >
      <SCROLLVIEW
        HORIZONTAL = 
        { true }
        SHOWSHORIZONTALSCROLLINDICATOR = 
        { false }
        STYLE = 
        { 
          {
            WIDTH: "100%",
          }
        }
        CONTENTCONTAINERSTYLE = 
        { 
          {
            ALIGNITEMS: "CENTER",
            DISPLAY: "FLEX",
            FLEXDIRECTION: "ROW",
            JUSTIFYCONTENT: "FLEX-START",
            HEIGHT: CLASS1.HEIGHT2,
          }
        }
        KEYBOARDSHOULDPERSISTTAPS="ALWAYS" 
      >
        <COMP5></COMP5>
        <COMP7></COMP7>
      </SCROLLVIEW>
    </VIEW>
  )
}
function COMP5 (PROP1?: {
}) 
{
  CLASS1.REF005 = USEREF ()
  CLASS1.REND5 = CLASS1.USE001 ()
  if 
  (
    (!CLASS1.ELEMENT1)
  ) 
  {
    CLASS1.ELEMENT1 = (
      <VIEW
        ONLAYOUT = 
        {
          (EVENT1) => {
            CLASS1.SET1 (CLASS1.LAYOUT5, EVENT1.NATIVEEVENT.LAYOUT)
          }
        }
        REF = 
        { 
          CLASS1.REF005 
        }
        STYLE = 
        {
          {
  
          }
        }
      >
        {
            CLASS1.BUTTONS1.map ((BUTTON1, NUM1) => {
              return (
                <COMP6
                  BUTTON1 = 
                  { 
                    BUTTON1 
                  }
                  KEY = 
                  { 
                    NUM1 
                  }
                >
                </COMP6>
              )
            })
          }
      </VIEW>
    ) 
  }
  return CLASS1.ELEMENT1
}
function COMP6 (PROP1?: {
  BUTTON1: TYPE26
}) 
{
  CLASS1.REF006 = undefined
  CLASS1.REND6 = undefined
  PROP1.BUTTON1.REF1 = USEREF ()
  PROP1.BUTTON1.REND1 = CLASS1.USE001 ()
  if 
  (
    (!PROP1.BUTTON1.ELEMENT1)
  ) 
  {
    PROP1.BUTTON1.REF1 = undefined
    PROP1.BUTTON1.REF1 = USEREF ()
    PROP1.BUTTON1.ELEMENT1 = (
      <VIEW
        ONLAYOUT = 
        {
          (EVENT1) => {
            CLASS1.LAYOUT6 = undefined
            CLASS1.SET1 (PROP1.BUTTON1.LAYOUT1, EVENT1.NATIVEEVENT.LAYOUT)
          }
        }
        REF = 
        { 
          PROP1.BUTTON1.REF1 
        }
        STYLE = 
        { 
          STYLES1.OBJ1 
        }
      >
        <PRESSABLE
          STYLE = 
          {
            CLASS1.NAME1 == PROP1.BUTTON1.NAME1 ? 
            STYLESHEET.COMPOSE (STYLES1.OBJ3, STYLES1.OBJ4)
            :
            STYLES1.OBJ3 
          }
          ONPRESS = 
          { 
            (
              EVENT1
            ) 
            => 
            {
              if 
              (
                CLASS1.NAME1 
                == 
                "NONE"
              ) 
              {
                CLASS1.NAME1 
                = 
                PROP1.BUTTON1.NAME1
                CLASS1.INIT1 
                (

                )
                var BUTTON1 
                = 
                CLASS1.GETCURRENTBUTTON1 
                (

                )
                CLASS1.REND7 
                (

                )
                BUTTON1.REND1 
                (

                )
                CLASS1.REND8 
                (

                )
              } 
              else 
              {
                if 
                (
                  (
                    (
                      CLASS1.NAME1 
                      == 
                      PROP1.BUTTON1.NAME1
                    )
                  )
                ) 
                {

                }
                else
                {
                  var BUTTON1 
                  = 
                  CLASS1.GETCURRENTBUTTON1 
                  (

                  )
                  CLASS1.NAME1 
                  = 
                  PROP1.BUTTON1.NAME1
                  var BUTTON2 
                  = 
                  CLASS1.GETCURRENTBUTTON1 
                  (

                  )
                  CLASS1.MOVE1 
                  (

                  )
                  BUTTON1.REND1 
                  (

                  )
                  BUTTON2.REND1 
                  (

                  )
                  CLASS1.REND8 
                  (

                  )
                }
              }
              if 
              (!CLASS1.BOOL2) 
              {
                setTimeout (() => {
                  CLASS1.OPEN1 ()
                }, 0)
              }
            } 
          }
        >
          <FONTAWESOMEICON SIZE = 
          { 34 } COLOR = 
          { STYLES1.OBJ23A3.COLOR } ICON = 
          { PROP1.BUTTON1.ICON1 }></FONTAWESOMEICON>
        </PRESSABLE>
      </VIEW>
    )
  }
  return PROP1.BUTTON1.ELEMENT1
}
function COMP7 (PROP2: { 
}) 
{
  CLASS1.REF007 = USEREF ()
  CLASS1.REND7 = CLASS1.USE001 ()
  return (
    <ANIMATED.VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT7, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      { 
        CLASS1.REF007 
      }
      STYLE = 
      {
        {
          POSITION: "absOLUTE",
          WIDTH: CLASS1.WIDTH002,
          LEFT: CLASS1.INST3,
          BOTTOM: 0,
          POINTEREVENTS: "AUTO",
        } 
      }
    >
      {
        CLASS1.NAME1 
        == 
        "NONE" 
        ?
        (
          <VIEW>
          </VIEW>
        )
        :
        (
          <VIEW
            STYLE = 
            { 
              {
                BORDERBOTTOMWIDTH: 3,
                BORDERBOTTOMCOLOR: "RGBA (255, 50, 50, 0.5)",
                BORDERRADIUS: 8,
              } 
            }
          >
          </VIEW>
        )
      }
    </ANIMATED.VIEW>
  )
}
function COMP8 
(
  PROP1
  ?
  : 
  {
  }
) 
{
  CLASS1.REF008 = USEREF ()
  CLASS1.REND8 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT8, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      { 
        CLASS1.REF008
      }
      STYLE = 
      { 
        {
          FLEXGROW: 3,
          FLEXSHRINK: 1,
          WIDTH: "100%",
        } 
      }
    >
      { 
        CLASS1.NAME1 == "LAYER-GROUP" && (
          <COMP9></COMP9>
        )
      }
      { 
        CLASS1.NAME1 == "SQUARE DASH" && (
          <COMP23></COMP23>
        )
      }
      { 
        CLASS1.NAME1 == "GEAR" && (
          <COMP025></COMP025>
        )
      }
      { 
        CLASS1.NAME1 == "PAINTBRUSH-PENCIL" && (
          <COMP24></COMP24>
        )
      }
    </VIEW>
  )
}
function COMP9 (PROP1?: {
}) 
{
  CLASS1.REF009 = USEREF ()
  CLASS1.REND9 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT9, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      { 
        CLASS1.REF009 
      }
      STYLE = 
      { 
        STYLES1.OBJ23A1 
      }
    >
      <VIEW
        STYLE = 
        { 
          STYLES1.OBJ9 
        }
      >
        <SCROLLVIEW
          SHOWSVERTICALSCROLLINDICATOR = 
          { 
            false 
          }
          STYLE = 
          {
            {
              HEIGHT: "100%",
            }
          }
          CONTENTCONTAINERSTYLE = 
          { 
            {
            }
          }
          KEYBOARDSHOULDPERSISTTAPS="ALWAYS" 
        >
          <VIEW
            STYLE = 
            {
              {
                DISPLAY: "FLEX",
                FLEXDIRECTION: "COLUMN",
                JUSTIFYCONTENT: "FLEX-START",
              }
            }
          >
            <PRESSABLE
              STYLE = 
              { 
                STYLES1.OBJ23A2
              }
              ONPRESS = 
              {
                (EVENT1) => {
                  console.log ("LAYER GROUP PLUS!")
                  var INDEX1 = OBJ1.INST2.DATA1.OPTION2.INDEX1
                  var INDEX2 = OBJ1.INST2.DATA1.OPTION2.INDEX2
                  var INDEX3 = OBJ1.INST2.DATA1.OPTION2.INDEX1 + 1
                  var INDEX4 = 0
                  OBJ1.INST2.DATA1.OPTION2.INDEX1 = INDEX3
                  OBJ1.INST2.DATA1.OPTION2.INDEX2 = INDEX4
                  OBJ1.INST2.ADD1 (INDEX3)
                  OBJ1.INST2.ADD2 (INDEX3, INDEX4)
                  OBJ1.INST2.DATA1.DUMMY1.INDEX14 = INDEX1
                  OBJ1.INST2.DATA1.DUMMY1.INDEX15 = INDEX2
                  var LAYER1 = OBJ1.INST2.GET2 (INDEX1, INDEX2)
                  LAYER1.DUMMY1.REND20 ()
                  // var LAYER2 = OBJ1.INST2.GET2 (INDEX3, INDEX4)
                  // LAYER2.DUMMY1.REND1 ()
                  // console.log ("ONPRESS::", "INDEX1:", INDEX1, ",INDEX2:", INDEX2)
                  // OBJ1.INST2.DATA1.DUMMY1.INDEX3 = INDEX3
                  // CLASS1.REND10 ()

                  // OBJ1.INST2.DATA1.DUMMY1.INDEX4 = INDEX3
                  // OBJ1.INST2.DATA1.DUMMY1.INDEX5 = INDEX4
                  // OBJ1.INST2.DATA1.DUMMY1.INDEX16 = INDEX3
                  // OBJ1.INST2.DATA1.DUMMY1.INDEX17 = INDEX4
                  // CLASS1.REND12 ()
                  // CLASS1.REND2 ()
                }
              }
            >
              <VIEW
                STYLE = 
                {
                  {
                    POSITION: "RELATIVE",
                  }
                }
              >
                <VIEW
                  STYLE = 
                  { 
                    {
                      POSITION: "absOLUTE",
                      TOP: -7,
                    }
                  }
                >
                  <FONTAWESOMEICON SIZE = 
                  { 32 } COLOR = 
                  { STYLES1.OBJ23A3.COLOR } ICON = 
                  { FALAYERGROUPPLUS }></FONTAWESOMEICON>
                </VIEW>
              </VIEW>
              <VIEW
                STYLE = 
                { 
                  {
                  }
                }
              >
                <FONTAWESOMEICON SIZE = 
                { 32 } COLOR = 
                { STYLES1.OBJ23A3.COLOR } ICON = 
                { FALAYERGROUP }></FONTAWESOMEICON>
              </VIEW>
            </PRESSABLE>
            <PRESSABLE
              STYLE = 
              { 
                STYLES1.OBJ23A2
              }
              ONPRESS = 
              {
                (EVENT1) => {
                  var INDEX1 = OBJ1.INST2.DATA1.OPTION2.INDEX1
                  var INDEX2 = OBJ1.INST2.DATA1.OPTION2.INDEX2
                  var INDEX3 = OBJ1.INST2.DATA1.OPTION2.INDEX1
                  var INDEX4 = OBJ1.INST2.DATA1.OPTION2.INDEX2 + 1
                  OBJ1.INST2.ADD2 (INDEX3, INDEX4)
                  OBJ1.INST2.DATA1.OPTION2.INDEX1 = INDEX3
                  OBJ1.INST2.DATA1.OPTION2.INDEX2 = INDEX4
                  OBJ1.INST2.DATA1.DUMMY1.INDEX1 = INDEX1
                  OBJ1.INST2.DATA1.DUMMY1.INDEX2 = INDEX2
                  var LAYER1 = OBJ1.INST2.GET2 (INDEX1, INDEX2)
                  LAYER1.DUMMY1.REND1 ()
                  OBJ1.INST2.DATA1.DUMMY1.INDEX1 = INDEX3
                  OBJ1.INST2.DATA1.DUMMY1.INDEX2 = INDEX4
                  var GROUP2 = OBJ1.INST2.GET1 (INDEX3)
                  GROUP2.DUMMY1.REND3 ()
                  
                  CLASS1.REND2 ()
                }
              }
            >
              <FONTAWESOMEICON SIZE = 
              { 32 } COLOR = 
              { STYLES1.OBJ23A3.COLOR } ICON = 
              { FALAYERPLUS }></FONTAWESOMEICON>
            </PRESSABLE>
          </VIEW>
        </SCROLLVIEW>
      </VIEW>
      <VIEW
        STYLE = 
        {
          {
            FLEXGROW: 3,
            FLEXSHRINK: 1,
            HEIGHT: "100%",
            POSITION: "RELATIVE",
          }
        }
      >
        <COMP10></COMP10>
        <COMP11></COMP11>
        <COMP12></COMP12>
      </VIEW>
    </VIEW>
  )
}
function COMP10 (PROP1?: {
}) 
{
  CLASS1.REF010 = CLASS1.USE001 ()
  CLASS1.REND10 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT10, EVENT1.NATIVEEVENT.LAYOUT)
          CLASS1.REND11 ()
        }
      }
      REF = 
      { 
        CLASS1.REF010 
      }
      STYLE = 
      { 
        {
          DISPLAY: "FLEX",
          FLEXDIRECTION: "COLUMN",
          JUSTIFYCONTENT: "FLEX-START",
          ALIGNITEMS: "FLEX-START",
          BORDERBOTTOMWIDTH: 1,
          BORDERCOLOR: "RGBA (245, 245, 245, 1)",
          WIDTH: "100%",
        } 
      }
    >
      <VIEW
        ONTOUCHEND = 
        {
          (EVENT1) => {
            CLASS1.BOOL1 = !CLASS1.BOOL1
            CLASS1.REND10 ()
            CLASS1.REND11 ()
          } 
        }
        STYLE = 
        { 
          {
            DISPLAY: "FLEX",
            FLEXDIRECTION: "ROW",
            JUSTIFYCONTENT: "SPACE-BETWEEN",
            ALIGNITEMS: "CENTER",
            PADDING: 8,
            WIDTH: "100%",
          }
        }
      >
        <TEXT
          CHILDREN = 
          { 
            "        " 
          }
          STYLE = 
          { 
            {
              FONTWEIGHT: "300",
              FONTSIZE: 14,
              TEXTDECORATIONLINE: "LINE-THROUGH",
            }
          }
        >
        </TEXT>
        { 
          CLASS1.BOOL1 ? 
          (
            <FONTAWESOMEICON 
              SIZE = 
              { 
                16 
              } 
              COLOR = 
              { 
                STYLES1.OBJ23A3.COLOR 
              } 
              ICON = 
              { 
                FACARETUP 
              }
            >
            </FONTAWESOMEICON>
          ) 
            :
          (
            <FONTAWESOMEICON 
              SIZE = 
              { 
                16 
              } 
              COLOR = 
              { 
                STYLES1.OBJ23A3.COLOR 
              } 
              ICON = 
              { 
                FACARETDOWN 
              }
            >
            </FONTAWESOMEICON>
          )
        }
      </VIEW>
    </VIEW>
  )
}
function COMP11 (PROP1?: {
}) 
{
  CLASS1.REF011 = USEREF ()
  CLASS1.REND11 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT11, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      {
        CLASS1.REF011
      }
      STYLE = 
      {
        {
          POSITION: "absOLUTE",
          TOP: CLASS1.LAYOUT10.HEIGHT1,
          LEFT: 0,
          DISPLAY: CLASS1.BOOL1 ? "FLEX" : "NONE",
          WIDTH: "100%",
          BORDERBOTTOMWIDTH: 1,
          BORDERCOLOR: "RGBA (245, 245, 245, 1)",
          MAXHEIGHT: 36 * 8,
          ZINDEX: 9,
        }
      }
    >
      <SCROLLVIEW
        SCROLLENABLED = 
        { 
          true 
        }
        SHOWSVERTICALSCROLLINDICATOR = 
        { 
          false 
        }
        STYLE = 
        { 
          {
            WIDTH: "100%",
            HEIGHT: "100%",
          }
        }
        CONTENTCONTAINERSTYLE = 
        { 
          {
            WIDTH: "100%",
          }
        }
      >
        <VIEW
          STYLE = 
          {
            {
              WIDTH: "100%",
              FLEXDIRECTION: "COLUMN",
              JUSTIFYCONTENT: "FLEX-START",
              ALIGNITEMS: "FLEX-START",
              BACKGROUNDCOLOR: "RGBA (255, 255, 255, 1)",
            }
          }
        >
          {
            OBJ1.INST2.DATA1.GROUPS1.map ((GROUP1, INDEX1) => {
              console.log ("COMP10::GROUPS1.map::INDEX1:", INDEX1)
              return (
                <COMP13
                  INDEX1 = 
                  { 
                    INDEX1 
                  }
                  KEY = 
                  { 
                    GROUP1.ID1 
                  }
                >
                </COMP13>
              )
            })
          }
        </VIEW>
      </SCROLLVIEW>
    </VIEW>
  )
}
function COMP12 (PROP1?: {
}) 
{
  CLASS1.REF012 = USEREF ()
  CLASS1.REND12 = CLASS1.USE001 ()
  return (
    <SCROLLVIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT12, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      CONTENTCONTAINERSTYLE = 
      { 
        {
        }
      }
      KEYBOARDSHOULDPERSISTTAPS="ALWAYS"
      REF = 
      { 
        CLASS1.REF012 
      }
      SHOWSVERTICALSCROLLINDICATOR = 
      { 
        false 
      }
      STYLE = 
      { 
        {
          POSITION: "RELATIVE",
          HEIGHT: "100%",
        }
      }
    >
      <VIEW
        STYLE = 
        { 
          {
            DISPLAY: "FLEX",
            FLEXDIRECTION: "COLUMN",
            JUSTIFYCONTENT: "FLEX-START",
            ALIGNITEMS: "FLEX-START",
            MINHEIGHT: "100%",
          } 
        }
      >
        <COMP14></COMP14>
      </VIEW>
    </SCROLLVIEW>
  )
}
function COMP13 (PROP1?: {
  INDEX1?: number
}) 
{
  CLASS1.REF013 = undefined
  CLASS1.REND13 = undefined
  var GROUP1 = OBJ1.INST2.GET1 (PROP1.INDEX1)
  GROUP1.DUMMY1.REF1 = USEREF ()
  GROUP1.DUMMY1.REND1 = CLASS1.USE001 ()
  if 
  (
    (PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1) || (
      undefined == GROUP1.DUMMY1.ELEMENT3)
  ) 
  {
    GROUP1.DUMMY1.ELEMENT3 = (
      <VIEW
        ONLAYOUT = 
        {
          (EVENT1) => {
            CLASS1.SET1 (CLASS1.LAYOUT13, EVENT1.NATIVEEVENT.LAYOUT)
            if 
            (
              (PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1)
            ) 
            {
              OBJ1.INST2.DATA1.DUMMY1.INDEX1 = -1
            }
          }
        }
        REF = 
        { 
          GROUP1.DUMMY1.REF1 
        }
        STYLE = 
        {
          {
            ALIGNITEMS: "CENTER",
            DISPLAY: "FLEX",
            FLEXDIRECTION: "ROW",
            JUSTIFYCONTENT: "SPACE-BETWEEN",
            PADDING: 8,
            WIDTH: "100%",
          }
        }
      >
        <TEXT 
          STYLE = 
          { 
            {
              FONTSIZE: 14,
              FONTWEIGHT: "300",
            }
          }
        >
          { 
            GROUP1.NAME1 
          }
        </TEXT>
        <CHECKBOX
          COLOR = 
          { 
            "RGBA (240, 240, 240, 1)" 
          }
          ONVALUECHANGE = 
          { 
            (
              VALUE,
            ) => 
            {
              GROUP1.OPTION1.CHECK1 = VALUE
              GROUP1.DUMMY1.REND1 
              (

              )
              CLASS1.REND2 
              (

              )
              CLASS1.REND14 
              (

              )
            }
          }
          STYLE = 
          { 
            {

            } 
          }
          VALUE = 
          { 
            GROUP1.OPTION1.CHECK1 
          }
        >
        </CHECKBOX>
      </VIEW>
    )  
  }
  return GROUP1.DUMMY1.ELEMENT3
}
function COMP14 (PROP2: {
}) 
{
  CLASS1.REF014 = USEREF ()
  CLASS1.REND14 = CLASS1.USE001 ()
  return (
    <VIEW
      ONLAYOUT = 
      {
        (EVENT1) => {
          CLASS1.SET1 (CLASS1.LAYOUT14, EVENT1.NATIVEEVENT.LAYOUT)
        }
      }
      REF = 
      { 
        CLASS1.REF014 
      }
      STYLE = 
      {
        {
          ALIGNITEMS: "FLEX-START",
          DISPLAY: "FLEX",
          FLEXDIRECTION: "COLUMN",
          JUSTIFYCONTENT: "FLEX-START",
          WIDTH: "100%",
        }
      }
    >
      {
        (
          (

          ) => 
          {
            return OBJ1.INST2.DATA1.GROUPS1
            .filter ((GROUP1) => GROUP1.OPTION1.CHECK1)
            .map 
            (
              (
                GROUP1, 
                INDEX1,
              ) => 
              {
                if 
                (
                  (
                    (
                      undefined == GROUP1.DUMMY1.ELEMENT14A1
                    )
                  )
                ) 
                {
                  GROUP1.DUMMY1.ELEMENT14A1 = 
                  (
                    <COMP15
                      INDEX1 = 
                      { 
                        INDEX1 
                      }
                      KEY = 
                      { 
                        GROUP1.ID1 
                      }
                    >
                    </COMP15>
                  )
                }
                return GROUP1.DUMMY1.ELEMENT14A1
              }
            )
          }
        )
        (
          
        )
      }
    </VIEW>
  )
}
function COMP15 (PROP1?: {
  INDEX1?: number
}) 
{
  CLASS1.REF015 = undefined
  CLASS1.REND15 = undefined
  var GROUP1 = OBJ1.INST2.GET1 (PROP1.INDEX1)
  GROUP1.DUMMY1.REND2 = CLASS1.USE001 ()
  if 
  (
    (PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1) || (!GROUP1.DUMMY1.ELEMENT1)
  ) 
  {
    GROUP1.DUMMY1.ELEMENT1 = (
      <VIEW
        ONLAYOUT = 
        {
          (EVENT1) => {
            CLASS1.LAYOUT15 = undefined
            CLASS1.SET1 (GROUP1.DUMMY1.LAYOUT1, EVENT1.NATIVEEVENT.LAYOUT)
            if 
            (PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1 && -1 == OBJ1.INST2.DATA1.DUMMY1.INDEX2) 
            {
              OBJ1.INST2.DATA1.DUMMY1.INDEX1 = -1
              CLASS1.SCROLL1 (PROP1.INDEX1)
            }
          }
        }
        REF = 
        {
          CLASS1.REF015
        }
        STYLE = 
        {
          {
            WIDTH: "100%",
          }
        }
      >
        <VIEW
          STYLE = 
          {
            {
              ALIGNITEMS: "CENTER",
              BORDERBOTTOMCOLOR: "RGBA (245, 245, 245, 1)",
              BORDERBOTTOMWIDTH: 1,
              DISPLAY: "FLEX",
              FLEXDIRECTION: "ROW",
              JUSTIFYCONTENT: "SPACE-BETWEEN",
              PADDINGLEFT: 8,
              PADDINGRIGHT: 8,
              PADDINGVERTICAL: 10,
              WIDTH: "100%",
            }
          }
        >
          <TEXT
            STYLE = 
            {
              {
                FONTSIZE: 14,
                FONTWEIGHT: "300",
              }
            }
          >
            { 
              GROUP1.NAME1 
            }
          </TEXT>
          <VIEW
            STYLE = 
            { 
              {
                ALIGNITEMS: "CENTER",
                DISPLAY: "FLEX",
                FLEXDIRECTION: "ROW",
                JUSTIFYCONTENT: "FLEX-START",
              }
            }
          >
            <PRESSABLE
              ONPRESS = 
              {
                (EVENT1) => {
                } 
              }
              STYLE = 
              {
                STYLES1.OBJ2 
              }
            >
              <FONTAWESOMEICON 
                COLOR = 
                { 
                  STYLES1.OBJ23A3.COLOR 
                } 
                ICON = 
                { 
                  FAMINUS 
                }
                SIZE = 
                { 
                  16 
                }
              >
              </FONTAWESOMEICON>
            </PRESSABLE>
            <PRESSABLE
              ONPRESS = 
              { 
                (EVENT1) => {
                } 
              }
              STYLE = 
              { 
                STYLES1.OBJ2 
              }
            >
              <FONTAWESOMEICON 
                COLOR = 
                { 
                  STYLES1.OBJ23A3.COLOR 
                } 
                ICON = 
                { 
                  FAELLIPSISSTROKEVERTICAL 
                }
                SIZE = 
                { 
                  16 
                }
              >
              </FONTAWESOMEICON>
            </PRESSABLE>
          </VIEW>
        </VIEW>
        <COMP16
          INDEX1 = 
          { 
            PROP1.INDEX1 
          }
        >
        </COMP16>
      </VIEW>
    )
  }
  return GROUP1.DUMMY1.ELEMENT1
}
function COMP16 (PROP1?: {
  INDEX1?: number
}) 
{
  CLASS1.REF016 = undefined
  CLASS1.REND16 = undefined
  var GROUP1 = OBJ1.INST2.GET1 (PROP1.INDEX1)
  GROUP1.DUMMY1.REND3 = CLASS1.USE001 ()
  if 
  (
    (PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1) || 
    (
      undefined == GROUP1.DUMMY1.ELEMENT2)
  ) 
  {
    GROUP1.DUMMY1.ELEMENT2 = (
      <VIEW
        STYLE = 
        {
          {
            WIDTH: "100%",
          }
        }
      >
        {
          GROUP1.LAYERS1.map ((LAYER1, INDEX2) => {
            return (
              <COMP17
                INDEX1 = 
                { 
                  PROP1.INDEX1 
                }
                INDEX2 = 
                { 
                  INDEX2 
                }
                KEY = 
                { 
                  LAYER1.ID1 
                }
              >
              </COMP17>
            )
          })
        }
      </VIEW>
    )
  }
  return GROUP1.DUMMY1.ELEMENT2
}
function COMP17 (PROP1?: {
  INDEX1?: number
  INDEX2?: number
}) 
{
  CLASS1.REND17 = undefined
  var GROUP1 = OBJ1.INST2.GET1 (PROP1.INDEX1)
  var LAYER1 = OBJ1.INST2.GET2 (PROP1.INDEX1, PROP1.INDEX2)
  LAYER1.DUMMY1.REND1 = CLASS1.USE001 ()
  if 
  (
    ((PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX12) && (PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX13)) || 
    (!LAYER1.DUMMY1.ELEMENT1)
  ) 
  {
    LAYER1.DUMMY1.ELEMENT1 = (
      <VIEW
        STYLE = 
        {
          {
            WIDTH: "100%",
            HEIGHT: CLASS1.HEIGHT3,
            BORDERBOTTOMWIDTH: 1,
            BORDERCOLOR: "RGBA (245, 245, 245, 1)",
            DISPLAY: "FLEX",
            FLEXDIRECTION: "ROW",
            JUSTIFYCONTENT: "FLEX-START",
            ALIGNITEMS: "FLEX-START",
          }
        }
        ONLAYOUT = 
        {
          (EVENT1) => {
            CLASS1.SET1 (LAYER1.DUMMY1.LAYOUT1, EVENT1.NATIVEEVENT.LAYOUT)
            if 
            ((PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX12) && (PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX13)) 
            {
              OBJ1.INST2.DATA1.DUMMY1.INDEX12 = -1
              OBJ1.INST2.DATA1.DUMMY1.INDEX13 = -1
              CLASS1.SCROLL2 (PROP1.INDEX1, PROP1.INDEX2)
            }
          }
        }
      >
        <COMP18
          INDEX1 = 
          { PROP1.INDEX1 }
          INDEX2 = 
          { PROP1.INDEX2 }
        >
          <COMP21 
            INDEX1 = 
            { PROP1.INDEX1 }
            INDEX2 = 
            { PROP1.INDEX2 }
          >
          </COMP21>
        </COMP18>
        <VIEW
          STYLE = 
          { 
            {
              DISPLAY: "FLEX",
              FLEXDIRECTION: "COLUMN",
              JUSTIFYCONTENT: "FLEX-START",
              ALIGNITEMS: "FLEX-START",
            } 
          }
        >
          <PRESSABLE
            STYLE = 
            { STYLES1.OBJ3 }
            ONPRESS = 
            { (O) => {} }
          >
            <FONTAWESOMEICON SIZE = 
            { 16 } COLOR = 
            { STYLES1.OBJ23A3.COLOR } ICON = 
            { FAARROWSUPDOWN }></FONTAWESOMEICON>
          </PRESSABLE>
        </VIEW>
      </VIEW>
    )
  }
  return LAYER1.DUMMY1.ELEMENT1
}
function COMP18 
(
  PROP1?: 
  {
    INDEX1?: number
    INDEX2?: number
    CHILDREN?
  },
) 
{
  CLASS1.REF018 = undefined
  CLASS1.REND18 = undefined
  var GROUP1 = OBJ1.INST2.GET1 
  (
    PROP1.INDEX1,
  )
  var LAYER1 = OBJ1.INST2.GET2 
  (
    PROP1.INDEX1, 
    PROP1.INDEX2,
  )
  LAYER1.DUMMY1.REND20 = CLASS1.USE001 
  (
  )
  if
  (
    (
      (
        (
          PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX14
        ) &&
        (
          PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX15
        )
      ) ||
      (
        (
          undefined == CLASS1.ELEMENT20
        ) &&
        (
          undefined == LAYER1.DUMMY1.ELEMENT20
        )
      )
    )
  )
  {
    CLASS1.ELEMENT20 = undefined
    LAYER1.DUMMY1.ELEMENT20 = 
    (
      <VIEW
        ONLAYOUT = 
        {
          (
            EVENT1,
          ) => 
          {
            CLASS1.LAYOUT20 = undefined
            CLASS1.SET1
            (
              LAYER1.DUMMY1.LAYOUT20,
              EVENT1.NATIVEEVENT.LAYOUT,
            )
            if 
            (
              (
                (
                  (
                    PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX14
                  ) &&
                  (
                    PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX15
                  )
                )
              )
            ) 
            {
              OBJ1.INST2.DATA1.DUMMY1.INDEX14 = -1
              OBJ1.INST2.DATA1.DUMMY1.INDEX15 = -1
            }
          }
        }
        ONTOUCHEND = 
        {
    async (
            EVENT1,
          ) => 
          {
            if 
            (
              (
                (
                  (
                    PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX14
                  ) && 
                  (
                    PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX15
                  )
                )
              )
            ) 
            {
              // BEFORE
              var GROUP1 = OBJ1.INST2.GET1 
              (
                OBJ1.INST2.DATA1.OPTION2.INDEX1,
              )
              var LAYER1 = OBJ1.INST2.GET2 
              (
                OBJ1.INST2.DATA1.OPTION2.INDEX1, 
                OBJ1.INST2.DATA1.OPTION2.INDEX2,
              )
              await OBJ1.INST2.LOAD1 
              (
                OBJ1.INST2.DATA1.OPTION2.INDEX1, 
                OBJ1.INST2.DATA1.OPTION2.INDEX2, 
                LAYER1.OPTION1.INDEX1,
              )
              // CURRENT
              OBJ1.INST2.DATA1.OPTION2.INDEX1 = PROP1.INDEX1
              OBJ1.INST2.DATA1.OPTION2.INDEX2 = PROP1.INDEX2
              var GROUP2 = OBJ1.INST2.GET1 
              (
                OBJ1.INST2.DATA1.OPTION2.INDEX1,
              )
              var LAYER2 = OBJ1.INST2.GET2 
              (
                OBJ1.INST2.DATA1.OPTION2.INDEX1, 
                OBJ1.INST2.DATA1.OPTION2.INDEX2,
              )
              await OBJ1.INST2.LOAD1 
              (
                OBJ1.INST2.DATA1.OPTION2.INDEX1, 
                OBJ1.INST2.DATA1.OPTION2.INDEX2, 
                LAYER2.OPTION1.INDEX1,
              )
              CLASS1.REND2 
              (
              )
              LAYER1.DUMMY1.REND1 
              (
              )
              LAYER2.DUMMY1.REND1 
              (
              )
            }
          }
        }
        STYLE = 
        {
          (
            (
              (
                PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX14
              ) &&
              (
                PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX15
              )
            )
          ) ?
          STYLESHEET.COMPOSE 
          (
            STYLES1.OBJ20A1,
            {
              BACKGROUNDCOLOR: "RGBA (242, 242, 242, 1)",
            },
          ) :
          STYLES1.OBJ20A1
        }
      >
        {
          (
            PROP1.CHILDREN
          ) 
        }
      </VIEW>
    )
  }
  return LAYER1.DUMMY1.ELEMENT20
}
function COMP21 
(
  PROP1?: 
  {
    INDEX1?: number
    INDEX2?: number
  },
)
{
  CLASS1.REF021 = undefined
  CLASS1.REND21 = undefined
  var GROUP1 = OBJ1.INST2.GET1 
  (
    PROP1.INDEX1,
  )
  var LAYER1 = OBJ1.INST2.GET2 
  (
    PROP1.INDEX1, 
    PROP1.INDEX2,
  )
  LAYER1.DUMMY1.REND21 = CLASS1.USE001 
  (
  )
  if 
  (
    (
      (
        (
          undefined == CLASS1.ELEMENT21
        ) &&
        (
          undefined == LAYER1.DUMMY1.ELEMENT21
        )
      )
    )
  )
  {
    LAYER1.DUMMY1.ELEMENT21 = 
    (
      <SCROLLVIEW
        CONTENTCONTAINERSTYLE = 
        { 
          {
          }
        }
        HORIZONTAL = 
        { 
          true
        }
        ONLAYOUT = 
        {
          (
            EVENT1,
          ) => 
          {
            CLASS1.LAYOUT21 = undefined
            CLASS1.SET1 
            (
              LAYER1.DUMMY1.LAYOUT21,
              EVENT1.NATIVEEVENT.LAYOUT,
            )
          }
        }
        REF = 
        {
          CLASS1.REF021
        }
        SHOWSHORIZONTALSCROLLINDICATOR = 
        { 
          false
        }
        STYLE = 
        {
          {
            HEIGHT: "100%",
          }
        }
      >
        <VIEW
          STYLE = 
          {
            {
              ALIGNITEMS: "CENTER",
              DISPLAY: "FLEX",
              FLEXDIRECTION: "ROW",
              JUSTIFYCONTENT: "FLEX-START",
            }
          }
        >
          <COMP22
            INDEX1 = 
            { 
              PROP1.INDEX1 
            }
            INDEX2 = 
            { 
              PROP1.INDEX2 
            }
            INDEX3 = 
            { 
              LAYER1.OPTION1.INDEX1 
            }
          >
          </COMP22>
        </VIEW>
      </SCROLLVIEW>
    )
  }
  return LAYER1.DUMMY1.ELEMENT21
}
function COMP22 
(
  PROP1?: 
  {
    INDEX1?: number
    INDEX2?: number
    INDEX3?: number
  },
)
{
  CLASS1.REF022 = undefined
  CLASS1.REND22 = undefined
  var GROUP1 = OBJ1.INST2.GET1 
  (
    PROP1.INDEX1,
  )
  var LAYER1 = OBJ1.INST2.GET2 
  (
    PROP1.INDEX1,
    PROP1.INDEX2,
  )
  LAYER1.DUMMY1.REF22 = USEREF 
  (
  )
  LAYER1.DUMMY1.REND22 = CLASS1.USE001 
  (
  )
  useEffect 
  (
    (
    ) => 
    {
      ;
      (
  async (
        ) => 
        {
          await OBJ1.INST2.LOAD1 
          (
            PROP1.INDEX1,
            PROP1.INDEX2, 
            PROP1.INDEX3,
          )
          LAYER1.DUMMY1.REND22 
          (
          )
        }
      )
      (
      )
    },
    [
      PROP1.INDEX3,
    ],
  )
  if
  (
    (
      (
        (
          PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1
        ) && 
        (
          PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX2
        ) && 
        (
          PROP1.INDEX3 == OBJ1.INST2.DATA1.DUMMY1.INDEX3
        )
      ) ||
      (
        (
          undefined == CLASS1.ELEMENT22
        ) &&
        (
          undefined == LAYER1.DUMMY1.ELEMENT22
        )
      )
    )
  ) 
  {
    CLASS1.ELEMENT22 = undefined
    LAYER1.DUMMY1.ELEMENT22 = 
    (
      <VIEW
        ONLAYOUT = 
        {
          (
            EVENT1,
          ) => {
            if 
            (
              (
                (
                  (
                    PROP1.INDEX1 == OBJ1.INST2.DATA1.DUMMY1.INDEX1
                  ) && 
                  (
                    PROP1.INDEX2 == OBJ1.INST2.DATA1.DUMMY1.INDEX2
                  ) && 
                  (
                    PROP1.INDEX3 == OBJ1.INST2.DATA1.DUMMY1.INDEX3
                  )
                )
              )
            )
            {
              CLASS1.LAYOUT22 = undefined
              CLASS1.SET1 
              (
                LAYER1.DUMMY1.LAYOUT22, 
                EVENT1.NATIVEEVENT.LAYOUT,
              )
              OBJ1.INST2.DATA1.DUMMY1.INDEX1 = -1
              OBJ1.INST2.DATA1.DUMMY1.INDEX2 = -1
              OBJ1.INST2.DATA1.DUMMY1.INDEX3 = -1
            }
          }
        }
        REF = 
        {
          LAYER1.DUMMY1.REF22
        }
        STYLE = 
        { 
          {
            ALIGNITEMS: "CENTER",
            BACKGROUNDCOLOR: "RGBA (255, 255, 255, 1)",
            BORDERCOLOR: "RGBA (230, 230, 230, 1)",
            BORDERWIDTH: 1,
            DISPLAY: "FLEX",
            FLEXDIRECTION: "ROW",
            HEIGHT: "100%",
            JUSTIFYCONTENT: "CENTER",
            WIDTH: 80,
          }
        }
      >
        {
          (
            (
              (
                undefined == LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1
              )
            )
          ) &&
          (
            <RNIMAGE
              SOURCE = 
              {
                {
                  URI: LAYER1.DUMMY1.HISTORY1.IMAGE1.FILE1.CONTENT1, 
                }
              }
              STYLE = 
              { 
                {
                  ASPECTRATIO: 1,
                  HEIGHT: "100%",
                } 
              }
              RESIZEMODE="CONTAIN"
            >
            </RNIMAGE>
          )
        }
      </VIEW>
    )
  }
  return LAYER1.DUMMY1.ELEMENT22
}
function COMP23 
(
  PROP1?: 
  { 
  },
)
{
  CLASS1.REF023 = USEREF 
  (
  )
  CLASS1.REND23 = CLASS1.USE001 
  (
  )
  if 
  (
    (
      (
        (
          undefined == CLASS1.ELEMENT23
        )
      )
    )
  )
  {
    CLASS1.ELEMENT23 = 
    (
      <VIEW
        ONLAYOUT = 
        {
          (
            EVENT1,
          ) => 
          {
            CLASS1.SET1 
            (
              CLASS1.LAYOUT23, 
              EVENT1.NATIVEEVENT.LAYOUT,
            )
          }
        }
        REF = 
        {
          CLASS1.REF023
        }
        STYLE = 
        {
          STYLES1.OBJ23A1 
        }
      >
        <PRESSABLE
          STYLE = 
          {
            STYLES1.OBJ23A2 
          }
        >
          <FONTAWESOMEICON 
            COLOR = 
            { 
              STYLES1.OBJ23A3.COLOR 
            } 
            ICON = 
            { 
              FASQUAREDASHEDCIRCLEPLUS 
            }
            SIZE = 
            { 
              34 
            } 
          >
          </FONTAWESOMEICON>
        </PRESSABLE>
      </VIEW>
    )
  }
  return CLASS1.ELEMENT23
}
function COMP24 
(
  PROP1?: 
  {
  },
) 
{
  CLASS1.REF024 = USEREF 
  (
  )
  CLASS1.REND24 = CLASS1.USE001 
  ( 
  )
  // PAINTBRUSH-PENCIL
  // UTILS (PEN SIZE, BRUSH, PENCIL, )
  if 
  (
    (
      (
        (
          undefined == CLASS1.ELEMENT24
        )
      )
    )
  ) 
  {
    CLASS1.ELEMENT24 = 
    (
      <VIEW
        ONLAYOUT = 
        {
          (
            EVENT1,
          ) => 
          {
            CLASS1.SET1 
            (
              CLASS1.LAYOUT24, 
              EVENT1.NATIVEEVENT.LAYOUT,
            )
          }
        }
        REF = 
        {
          CLASS1.REF024
        }
        STYLE = 
        { 
          STYLES1.OBJ024A01
        }
      >
        <PRESSABLE
          ONPRESS = 
          { 
            (
              EVENT1,
            ) => 
            {
              // MAGIC1: UP-SPEED1 -> UP-BRUSH_SIZE1
            }
          }
          STYLE = 
          {
            STYLES1.OBJ024A02 
          }
        >
          <FONTAWESOMEICON 
            SIZE = 
            { 
              34 
            }
            COLOR = 
            { 
              STYLES1.OBJ024A03.COLOR 
            }
            ICON = 
            {
              FASQUAREDASHEDCIRCLEPLUS 
            }
          >
          </FONTAWESOMEICON>
        </PRESSABLE>
        <PRESSABLE
          STYLE = 
          { 
            STYLES1.OBJ024A02 
          }
          ONPRESS = 
          {
            (
              EVENT1,
            ) => 
            {
              // MAGIC1: UP-SPEED1 -> DOWN-BRUSH_SIZE1
            }
          }
        >
          <FONTAWESOMEICON 
            COLOR = 
            { 
              STYLES1.OBJ024A03.COLOR 
            }
            ICON = 
            { 
              FASQUAREDASHEDCIRCLEPLUS 
            }
            SIZE = 
            { 
              34 
            }
          >
          </FONTAWESOMEICON>
        </PRESSABLE>
      </VIEW>
    )  
  }
  return CLASS1.ELEMENT24
}
function COMP025 
(
  PROP1?: 
  {

  },
)
{
  CLASS1.REF025 = USEREF 
  (
  )
  CLASS1.REND025 = CLASS1.USE001 
  (
  )
  if 
  (
    (
      (
        (
          undefined == CLASS1.ELEMENT025
        )
      )
    )
  ) 
  {
    CLASS1.ELEMENT025 = 
    (
      <VIEW
        ONLAYOUT = 
        {
          (
            EVENT1,
          ) => 
          {
            CLASS1.SET1 (
              CLASS1.LAYOUT025, 
              EVENT1.NATIVEEVENT.LAYOUT,
            )
          }
        }
        REF = 
        {
          CLASS1.REF025
        }
      >
      </VIEW>
    )
  }
  return CLASS1.ELEMENT025
}