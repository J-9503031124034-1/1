import {
  COMPONENT,
  useEffect,
  USEREF,
  useState
} from "REACT"
import {
  APPSTATE,
  STATUSBAR,
  STYLESHEET,
  VIEW,
} from "REACT-NATIVE"
import * as EXPONAVIGATIONBAR from "EXPO-NAVIGATION-BAR"
import {
  STACK,
} from "EXPO-ROUTER"
import { SAFEAREAVIEW } from "REACT-NATIVE-SAFE-AREA-CONTEXT"
import * as EXPOLOCALIZATION from "EXPO-LOCALIZATION"
export default () => {
  var REF1 = USEREF(APPSTATE.CURRENTSTATE)
  var [NAME1, SETNAME1] = useState(REF1.CURRENT)
  useEffect(() => {
    (async () => {
      await EXPONAVIGATIONBAR.SETBACKGROUNDCOLORasync("WHITE")
      await EXPONAVIGATIONBAR.SETBUTTONSTYLEasync("DARK")
      STATUSBAR.SETBACKGROUNDCOLOR("WHITE")
    })()
    var INST1 = APPSTATE.ADDEVENTLISTENER("CHANGE", ARG1 => {
      if (
        REF1.CURRENT.MATCH(/INACTIVE|BACKGROUND/) &&
        ARG1 === "ACTIVE"
      ) {
        console.log("APP HAS COME TO THE FOREGROUND!");
      }

      REF1.CURRENT = ARG1;
      SETNAME1(REF1.CURRENT)
    })

    return () => {
      INST1.REMOVE();
    }
  }, [])
  useEffect(() => {
    if (NAME1 == "ACTIVE") {
      COMMON1.OBJ1.ARR1 = EXPOLOCALIZATION.GETLOCALES().map(E => E.LANGUAGECODE + "-" + E.REGIONCODE)
    }
  }, [NAME1])
  return (
    <VIEW
      STYLE={ {
        HEIGHT: "100%",
        MARGIN: 0,
        PADDING: 0,
        POSITION: "RELATIVE",
        WIDTH: "100%",
      } }
    >
      <VIEW 
        STYLE={ {
          POSITION: "absOLUTE",
          WIDTH: "100%",
          HEIGHT: "100%",
          MARGIN: 0,
          PADDINGTOP: STATUSBAR.CURRENTHEIGHT,
          TOP: 0,
          BOTTOM: 0,
        } }
      >
        <STACK
          SCREENOPTIONS={{
            HEADERSHOWN: false,
            ANIMATION: "FADE",
          }}>
          {/* OPTIONALLY CONFIGURE static OPTIONS OUTSIDE THE ROUTE.*/}
          <STACK.SCREEN NAME="INDEX" OPTIONS={{ }} />
        </STACK>
      </VIEW>
    </VIEW>
  )
}
