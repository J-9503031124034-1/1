import 
{ 
  FONTAWESOMEICON 
} 
from "@FORTAWESOME/REACT-NATIVE-FONTAWESOME"
import 
{
  FATIMELINE,
  FAPEN,
  FALIST,
  ICONDEFINITION,
} 
from "@FORTAWESOME/PRO-THIN-SVG-ICONS"
import 
* as EXPOFILESYSTEM 
from "EXPO-FILE-SYSTEM"
import 
{ 
  ROUTER, 
  USEFOCUSEFFECT, 
  USENAVIGATION, 
  USEROUTER, 
}
from "EXPO-ROUTER"
import 
{
  COMPONENT,
  REACTELEMENT,
  USECALLBACK,
  useEffect,
  useState,
} 
from "REACT"
import 
{
  KEYBOARD,
  PRESSABLE,
  SCROLLVIEW,
  SECTIONLIST,
  STATUSBAR,
  STYLESHEET,
  TEXT,
  VIEW,
  VIRTUALIZEDLIST,
} 
from "REACT-NATIVE"
import 
* as EXPOLOCALIZATION 
from "EXPO-LOCALIZATION"
import 
{ 
  USEISFOCUSED 
} 
from "@REACT-NAVIGATION/NATIVE"
type TYPE1 = 
{
  DATA: TYPE2 [

  ]
  TITLE: string
  DUMMY1?: 
  {
    ELEMENT1?: REACTELEMENT
    REND1?: ANY  
  }
}
type TYPE2 = 
{ 
  FILE1?: {
    NAME1?: string
  }
  DUMMY1?: {
    REND1?: ANY 
    ELEMENT1?: REACTELEMENT
  }
} & 
TYPE3
type TYPE3 = 
{
  ISO1: string
  DATE1: string
  TIME1: string
}
class CLASS1 
{
  // *static
  // static VARIABLE
  static BOOL1: boolean
  static COUNT1: number
  static ITEM1: TYPE2
  static ITEM2: TYPE2
  static SECTION1: TYPE1
  static SECTION2: TYPE1
  static SECTIONS1: TYPE1 [

  ]
  // static REND
  static REND1: COMMON2.TYPE1
  static REND2: COMMON2.TYPE1
  static REND3: COMMON2.TYPE1
  static REND4: COMMON2.TYPE1
  static REND5: COMMON2.TYPE1
  static REND6: COMMON2.TYPE1
  static REND7: COMMON2.TYPE1
  // *static function
  static ADD1: (NAME1: string) => void
  static CHANGE1: (NAME1: string) => Promise<boolean>
  static MAKE1: (ARR1: Array<String>) => void
  static split1: (NAME1: string) => TYPE3
  static CALCULATESSYNCHRONOUSLYEXCUTIONTIME: (FU1: function) => Promise<NUMBER>
  static
  {
    {
      if 
      (
        (
          (
            (
              undefined == CLASS1.BOOL1
            )
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
            (
              undefined == CLASS1.COUNT1
            )
          )
        )
      )
      {
        CLASS1.COUNT1 = 0
      }
      if
      (
        (
          (
            (
              undefined == CLASS1.ITEM1
            )
          )
        )
      )
      {
        CLASS1.ITEM1 = undefined
      }
      if
      (
        (
          (
            (
              undefined == CLASS1.ITEM2
            )
          )
        )
      )
      {
        CLASS1.ITEM2 = undefined
      }
      if 
      (
        (
          (
            (
              undefined == CLASS1.SECTION1        
            )
          )
        )
      )
      {
        CLASS1.SECTION1 = undefined
      }
      if
      (
        (
          (
            (
              undefined == CLASS1.SECTION2
            )
          )
        )
      )
      {
        CLASS1.SECTION2 = undefined
      }
      if
      (
        (
          (
            (
              undefined == CLASS1.SECTIONS1
            )
          )
        )
      )
      {
        CLASS1.SECTIONS1 = 
        [
    
        ]
      }
    }
    {
      CLASS1.ADD1 = (NAME1: string): void => 
      {
        var OBJ1 = CLASS1.split1(NAME1)
        var ITEM1: TYPE2 = 
        { 
          FILE1: {
    
            NAME1: NAME1,
          },
          ISO1: OBJ1.ISO1, 
          DATE1: OBJ1.DATE1, 
          TIME1: OBJ1.TIME1, 
          DUMMY1: {
            REND1: undefined, 
            ELEMENT1: undefined, 
          },
        }
        if (CLASS1.SECTIONS1[0].DATA[0].DATE1 == OBJ1.DATE1) {
          CLASS1.SECTIONS1[0].DATA = [ITEM1].concat(CLASS1.SECTIONS1[0].DATA)
        } else {
          var SECTION1: TYPE1 = 
          {
            TITLE: OBJ1.
      
            DATE1, 
            DATA: [ITEM1],
            DUMMY1: {
              REND1: undefined, 
              ELEMENT1: undefined, 
            }
          }
          CLASS1.SECTIONS1 = [SECTION1].concat(CLASS1.SECTIONS1)
        }
      }
      CLASS1.CALCULATESSYNCHRONOUSLYEXCUTIONTIME = async (FUNC1) => 
      {
        var A, B
        A = new Date(), await FUNC1(), B = new Date()
        return B.GETTIME() - A.GETTIME()
      }
      CLASS1.CHANGE1 = async (NAME1: string): Promise<boolean> => {
        var EXIST 
        = 
        await COMMON2.CLASS3.EXISTFILEasync
        (
          NAME1
        )
        var BOOL1
        =
        false
        if 
        (
          EXIST
        ) 
        {
          var DATAString 
          = 
          await COMMON2.CLASS3.READFILEasync
          (
            NAME1
          )
          TRY 
          {
            var DATA = JSON.PARSE(DATAString)
          } 
          CATCH 
          (
            ERROR
          ) 
          {
            DATA 
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
                DATA.IMAGES
              )
            )
          )
          {
          }
          else if
          (
            (
              (
                1 <= DATA.IMAGES.length
              )
            )
          )
          {
            BOOL1 
            = 
            true
          }
        }
        return BOOL1
      }
      CLASS1.MAKE1 = 
      (
        ARR1: Array<
          String
        >,
      ): void => 
      {
        var ARR2 = 
        [

        ]
        LET OBJ1: TYPE3
        LET BOOL1: boolean = false
        ARR1.map
        (
          (
            NAME1,
          ) => 
          {
            var OBJ2 = CLASS1.split1(NAME1)
            LET SECTION1: TYPE1
            if (!!SECTION1) {
              BOOL1 = (OBJ2.DATE1 != OBJ1.DATE1)
            } else {
              BOOL1 = true
            }
            if (!!BOOL1) {
              SECTION1 = 
              {
                TITLE: OBJ2.
          
                DATE1, 
                DATA: [
                  { 
                    FILE1: {
                      NAME1: NAME1,
                    }, 
                    ISO1: OBJ2.ISO1, 
                    DATE1: OBJ2.DATE1, 
                    TIME1: OBJ2.TIME1, 
                    DUMMY1: {
                      REND1: undefined, 
                      ELEMENT1: undefined,
                    },
                  },
                ], 
                DUMMY1: { 
                  REND1: undefined,
                  ELEMENT1: undefined, 
                },
              }
              ARR2.push(SECTION1)
            } else {
              SECTION1.DATA.push({ 
                FILE1: {
                  NAME1: NAME1,
                },
                ISO1: OBJ2.ISO1, 
                DATE1: OBJ2.DATE1, 
                TIME1: OBJ2.TIME1, 
                DUMMY1: {
                  REND1: undefined, 
                  ELEMENT1: undefined,
                },
              })
            }
            OBJ1 = OBJ2
          }
        )
        CLASS1.SECTIONS1 = ARR2
      }
      CLASS1.split1 = (NAME1: string): TYPE3 => {
        var ARR1: string[] = NAME1.split(COMMON2.CLASS3.SEPERATOR1)
        var ISO1: string = ARR1.length > 0 ? ARR1[0] : ""
        var DATE1: string = ARR1.length > 1 ? ARR1[1] : "" 
        var TIME1: string = ARR1.length > 2 ? ARR1[2] : ""
        return {
          ISO1: ISO1,
          DATE1: Date1,
          TIME1: TIME1,
        }
      }
    }
  }
}
class OBJ1 {
  INST1: CLASS1
}
var OBJ1 = new OBJ1()
var STYLES1 = STYLESHEET.CREATE({
  OBJ1: {
    PADDING: 10,
    FONTSIZE: 18,
    HEIGHT: 44,
    // BACKGROUNDCOLOR: "RGBA(99, 99, 99, 0.8)",
  },
  OBJ2: {
    WIDTH: "100%",
    HEIGHT: "100%",
  },
  OBJ3: {
    WIDTH: "100%"
  },
  OBJ4: {
    PADDINGTOP: 2,
    PADDINGLEFT: 10,
    PADDINGRIGHT: 10,
    PADDINGBOTTOM: 2,
    FONTSIZE: 14,
    FONTWEIGHT: "BOLD",
    BACKGROUNDCOLOR: "RGBA(247,247,247,1.0)",
  },
})
export default function COMP1(PROP1: {
}) {
  var FOCUS1 = USEISFOCUSED()
  var [STATE1] = useState<{
    INST1: CLASS1
  }>(() => {
    return {
      INST1: new CLASS1(),
    }
  })

  OBJ1.INST1 = STATE1.INST1

  CLASS1.REND1 = COMMON2.USE1()

  useEffect(() => {
    ;(async () => {
      // await COMMON2.CLASS2.DELETEWORKSPACEasync()
      // await COMMON2.CLASS3.DELETEWORKSPACEasync()
      // return
      await COMMON2.CLASS2.CREATEWORKSPACEasync()
      await COMMON2.CLASS3.CREATEWORKSPACEasync()
      await COMMON2.CLASS4.CREATEWORKSPACEasync()
      LET WORKSPACES1
      var TIME1 = await COMMON.CALCULATESSYNCHRONOUSLYEXCUTIONTIME(async () => {
        WORKSPACES1 = (await COMMON2.CLASS3.READWORKSPACEasync()).SORT().reverse()
        if (WORKSPACES1.length == 0 || CLASS1.split1(WORKSPACES1[0]).DATE1 != new Date().toLocaleDateString()) {
          await COMMON2.CLASS3.CREATEnewFILEasync()
          WORKSPACES1 = (await COMMON2.CLASS3.READWORKSPACEasync()).SORT().reverse()
        }
        // await COMMON2.CLASS1.DELETEFILEasync(A[0])
      })
      console.log("TIME of INITIALIZE", TIME1 / 1024, "S")
      var TIME2 = COMMON.CALCULATESEXCUTIONTIME(() => {
        CLASS1.MAKE1(WORKSPACES1)
      })
      if (await CLASS1.CHANGE1(CLASS1.SECTIONS1[0].DATA[0].FILE1.NAME1)) {
        var NAME1 = await COMMON2.CLASS3.CREATEnewFILEasync()
        CLASS1.ADD1(NAME1)
      }
      console.log("TIME of MADE SECTIONS", TIME2 / 1024, "S")
      // var DATE1 = new Date()
      // DATE1.setDate(DATE1.getDate() - 1)
      // for (var I = 0; I <= 18; I ++) {
      //   DATE.SETHOURS(I)
      //   DATE.SETMINUTES(5)
      //   await CLASS3.CREATEDATEFILEasync(DATE)
      // }
      CLASS1.REND1()
    })()
  }, [])
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
          if 
          (
            (
              (
                (
                  false == CLASS1.BOOL1
                )
              )
            )
          )
          {
            // if (CLASS1.COUNT1 == 0) {
            //   CLASS1.COUNT1 = CLASS1.COUNT1 + 1
            // } else {
            //   CLASS1.PREVSECTION1 && CLASS1.PREVSECTION1.DUMMY1.REND1()
            //   CLASS1.CURRENTSECTION1 && CLASS1.CURRENTSECTION1.DUMMY1.REND1()
            //   CLASS1.PREVEM1 && CLASS1.PREVEM1.DUMMY1.REND1()
            //   CLASS1.CURRENTEM1 && CLASS1.CURRENTEM1.DUMMY1.REND1()
            //   TRY {
            //     if ((CONTAINER1.INST4.SECTIONS1[0].DATA[0].LOCALEDATEString1 != new Date().toLocaleDateString()) || await CLASS1.ISFIRSTROWCHANGEasync(CONTAINER1.INST4.SECTIONS1[0].DATA[0].FILE1.NAME1)) {
            //       var NAME1 = await COMMON2.CLASS3.CREATEnewFILEasync()
            //       CONTAINER1.INST4.ADDSECTIONDATAEM(NAME1)
            //       CLASS1.REND1()
            //     }
            //   } CATCH (ERROR) {
            //     CONSOLE.ERROR(ERROR)
            //   }
            // }
          } 
          else 
          {
            CLASS1.BOOL1 = false
          }
        }
      )
      (

      )
    },
    [
      FOCUS1,
    ],
  )
  return (
      <VIEW
        STYLE = 
        { 
          {
            DISPLAY: "FLEX",
            FLEXDIRECTION: "COLUMN",
            HEIGHT: "100%",
            JUSTIFYCONTENT: "FLEX-START",
            PADDING: 0,
            POSITION: "RELATIVE",
            WIDTH: "100%",
          } 
        }
        ONLAYOUT = 
        { 
          (
            EVENT,
          ) => 
          {
            console.log
            (
              "VIEW LAYOUT1", 
              EVENT.NATIVEEVENT.LAYOUT,
            )
          }
        }
      >
        <VIEW
          STYLE = 
          { 
            {
              FLEXGROW: 1,
              FLEXSHRINK: 3,
              BACKGROUNDCOLOR: "RGBA(255, 255, 255, 1)",
              PADDING: 0,
              POSITION: "RELATIVE",
            } 
          }
          ONLAYOUT = 
          { 
            (
              EVENT,
            ) => 
            {
              console.log("VIEW LAYOUT2", EVENT.NATIVEEVENT.LAYOUT)
            }
          }
        >
          <COMP2>
          </COMP2>
        </VIEW>
      </VIEW>
  )
}
function COMP2(PROP1: {
}) {
  CLASS1.REND2 = COMMON2.USE1()
  var DATE1 = new Date().toLocaleDateString()
  return (
    <SECTIONLIST
      SECTIONS = 
      { 
        CLASS1.SECTIONS1 
      }
      RENDERITEM = 
      { 
        (
          { 
            SECTION, 
            ITEM, 
          },
        ) => 
        {
          var ELEMENT1 = 
          (
            <COMP5 
              SECTION1 = 
              { 
                SECTION 
              } 
              ITEM1 = 
              { 
                ITEM 
              } 
              DATE1 = 
              { 
                DATE1 
              }
            >

            </COMP5>
          )
          return ELEMENT1
        } 
      }
      RENDERSECTIONHEADER = 
      { 
        (
          { 
            SECTION,
          },
        ) => 
        {
          var ELEMENT1 = 
          (
            <COMP3 
              SECTION1 = 
              { 
                SECTION 
              } 
              DATE1 = 
              { 
                DATE1 
              }
            >

            </COMP3>
          )
          return ELEMENT1
        } 
      }
      KEYEXTRACTOR = 
      { 
        (
          ITEM1, 
          INDEX1,
        ) => 
        {
          return "" + INDEX1
        } 
      }
      STYLE = 
      { 
        STYLES1.OBJ2 
      }
    >
    </SECTIONLIST>
  )
}
function COMP3
(
  PROP1: 
  { 
    SECTION1?: TYPE1
    DATE1?: string
  },
) 
{
  CLASS1.REND3 = COMMON2.USE1
  (
    
  )
  var ELEMENT1 = 
  (
    <COMP4 
      DATE1 = 
      { 
        PROP1.DATE1 
      } 
      SECTION1 = 
      { 
        PROP1.SECTION1 
      }
    >

    </COMP4>
  )
  return ELEMENT1
}
function COMP4
(
  PROP1?: 
  { 
    SECTION1?: TYPE1
    DATE1?: string
  }
) 
{
  CLASS1.REND4 = COMMON2.USE1
  (

  )
  PROP1.SECTION1.DUMMY1.REND1 = COMMON2.USE1
  (

  )
  var ELEMENT1 = 
  (
    <TEXT 
      STYLE = 
      { 
        STYLESHEET.COMPOSE
        (
          STYLES1.OBJ4, 
          {
            COLOR: 
            (
              (
                (
                  PROP1.DATE1 == PROP1.SECTION1.TITLE
                )
              ) ||
              (
                (
                  undefined != CLASS1.ITEM1    
                )
              )
            ) &&
            (
              (
                (
                  CLASS1.ITEM1.DATE1 == PROP1.SECTION1.TITLE
                )
              )
            ) ? 
            "RGBA(33, 33, 33, 0.8)" 
            :
            "RGBA(200, 200, 200, 0.9)"
          },
        ) 
      }
    >
      { 
        PROP1.SECTION1.TITLE 
      }
    </TEXT>
  )
  return 
}
function COMP5(PROP1: {
  SECTION1?: TYPE1;
  ITEM1?: TYPE2;
  DATE1?: string;
}) {
  CLASS1.REND5 = COMMON2.USE1()
  if (!PROP1.ITEM1.DUMMY1.ELEMENT1) {
    PROP1.ITEM1.DUMMY1.ELEMENT1 = (
      <COMP6 
        DATE1 = 
        { PROP1.DATE1 }
        ITEM1 = 
        { PROP1.ITEM1 }
        SECTION1 = 
        { PROP1.SECTION1 }
      >
      </COMP6>
    )
  }
  return PROP1.ITEM1.DUMMY1.ELEMENT1
}
function COMP6(PROP1: {
  SECTION1?: TYPE1;
  ITEM1?: TYPE2;
  DATE1?: string;
}) {
  CLASS1.REND6 = COMMON2.USE1()
  PROP1.ITEM1.DUMMY1.REND1 = COMMON2.USE1()
  return (
    <TEXT 
      ONPRESS = 
      { 
        (EVENT1) => {
          CLASS1.SECTION2 = CLASS1.SECTION1
          CLASS1.SECTION1 = PROP1.SECTION1
          CLASS1.ITEM2 = CLASS1.ITEM1
          CLASS1.ITEM1 = PROP1.ITEM1
          CLASS1.BOOL1 = true
          ROUTER.push({
            PATHNAME: "/[MEMOID1]", 
            PARAMS: {
              MEMOID1: PROP1.ITEM1.FILE1.NAME1, 
              ISO1: PROP1.ITEM1.ISO1, 
              DATE1: PROP1.ITEM1.DATE1, 
              TIME1: PROP1.ITEM1.TIME1,
            },
          })
        } 
      }
      STYLE = 
      {
        STYLESHEET.COMPOSE(
          STYLES1.OBJ1, 
          {
            COLOR: (PROP1.DATE1 == PROP1.ITEM1.DATE1) || (CLASS1.ITEM1 && (CLASS1.ITEM1.ISO1 == PROP1.ITEM1.ISO1)) ? "RGBA(33, 33, 33, 0.8)" : "RGBA(200, 200, 200, 0.9)",
            FONTWEIGHT: (CLASS1.ITEM1 && (CLASS1.ITEM1.ISO1 == PROP1.ITEM1.ISO1)) ? "BOLD" : "NORMAL"
          }
        )
      }
    >
      { PROP1.ITEM1.TIME1 }
    </TEXT>
  )
}