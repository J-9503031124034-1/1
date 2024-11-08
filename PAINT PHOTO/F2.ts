import * as EXPOFILESYSTEM from "expo-file-system"
import * as EXPOMEDIALIBRARY from "expo-media-library"
import "react-native-get-random-values"
import * as UUID from "uuid"
import * as EXPOIMAGEPICKER from "expo-image-picker"
import { useState } from "react"
export var OBJ1 = {
  ARR1: [], 
}
export type TYPE1 = () => void
export function USE1(): TYPE1 {
  var [STATE1, SETSTATE1] = useState(0) 
  function REND1() {
    SETSTATE1(STATE1 + 1)
  }
  return REND1
}
export class CLASS1 {
  static async READWORKSPACEasync(): Promise<String[]> {
    return await EXPOFILESYSTEM.readDirectoryAsync(EXPOFILESYSTEM.documentDirectory)
  }
}
export class CLASS2 {
  static WORKSPACENAME: string = "WORKSPACE1725249303995I1"
  static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME
  static async EXISTWORKSPACEasync() {
    var A, B
    A = await CLASS1.READWORKSPACEasync()
    B = A.includes(CLASS2.WORKSPACENAME)
    return B
  }
  static async CREATEWORKSPACEasync() {
    var A
    A = await CLASS2.EXISTWORKSPACEasync()
    if (!A) {
      await EXPOFILESYSTEM.makeDirectoryAsync(CLASS2.WORKSPACEURI)
    }
  }
  static async READWORKSPACEasync(): Promise<String[]> {
    return await EXPOFILESYSTEM.readDirectoryAsync(CLASS2.WORKSPACEURI)
  }
  static async DELETEWORKSPACEasync(): Promise<void> {
    await EXPOFILESYSTEM.deleteAsync(CLASS2.WORKSPACEURI)
  }
}
export class CLASS3 {
  // PROJECT
  static ALLOWCHARACTERS1 = "|\\?*<\":>+[]/'"
  static SEPERATOR1 = "****"
  static WORKSPACENAME: string = "DIRECTORY1"
  static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME + "/" + CLASS3.WORKSPACENAME
  static FILEURI
  static async EXISTWORKSPACEasync() {
    var A, B
    A = await CLASS2.READWORKSPACEasync()
    B = A.includes(CLASS3.WORKSPACENAME)
    return B
  }
  static async CREATEWORKSPACEasync() {
    var A
    A = await CLASS3.EXISTWORKSPACEasync()
    if (!A) {
      await EXPOFILESYSTEM.makeDirectoryAsync(CLASS3.WORKSPACEURI)
    }
  }
  static async READWORKSPACEasync(): Promise<String[]> {
    return (await EXPOFILESYSTEM.readDirectoryAsync(CLASS3.WORKSPACEURI)).map(E => CLASS3.DECODEFILENAME(E))
  }
  static async CREATEnewFILEasync(): Promise<String> {
    var A: string, B
    A = CLASS3.GETFILENAME1()
    B = CLASS3.ENCODEFILENAME(A)
    await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI + "/" + B, "")
    return CLASS3.DECODEFILENAME(B)
  }
  static async DELETEFILEasync(FILENAME: string) {
    var A
    A = CLASS3.ENCODEFILENAME(FILENAME)
    await EXPOFILESYSTEM.deleteAsync(CLASS3.WORKSPACEURI + "/" + A)
  }
  static async CREATEPREVIOUSDATEFILEasync() {
    var A, B 
    A = CLASS3.GETFILENAME2()
    B = CLASS3.ENCODEFILENAME(A)
    await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI + "/" + B, "")
    return A
  }
  static async CREATEDATEFILEasync(DATE: Date) {
    var A, B 
    A = CLASS3.CREATEFILENAME(DATE)
    B = CLASS3.ENCODEFILENAME(A)
    await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI + "/" + B, "")
    return A
  }
  static async DELETEWORKSPACEasync() {
    await EXPOFILESYSTEM.deleteAsync(CLASS3.WORKSPACEURI)
  }
  static async EXISTFILEasync(FILENAME: string) {
    var A, B, C
    A = await EXPOFILESYSTEM.readDirectoryAsync(CLASS3.WORKSPACEURI)
    B =  CLASS3.ENCODEFILENAME(FILENAME)
    C = A.includes(B)
    return C
  }
  static async WRITEFILEasync(FILENAME: string, CONTENT: string) {
    var A
    A = CLASS3.ENCODEFILENAME(FILENAME)
    await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI  + "/" + A, CONTENT)
  }
  static async READFILEasync(FILENAME: string): Promise<String> {
    var A
    A = CLASS3.ENCODEFILENAME(FILENAME)
    return await EXPOFILESYSTEM.readAsStringAsync(CLASS3.WORKSPACEURI + "/" + A)
  }
  static CREATEFILENAME(DATE: Date): string {
    var A
    A = DATE.toISOString() + CLASS3.SEPERATOR1 + DATE.toLocaleDateString(OBJ1.ARR1) + CLASS3.SEPERATOR1 + DATE.toLocaleTimeString(OBJ1.ARR1, {hour12: true, hour: "2-digit", minute: "2-digit"})
    return A
  }
  static GETFILENAME1(): string {
    var A: Date, B
    A = new Date()
    B = CLASS3.CREATEFILENAME(A)
    return B
  }
  static GETFILENAME2(): string {
    var A: Date, B
    A = new Date()
    A.setDate(A.getDate() - 1)
    B = CLASS3.CREATEFILENAME(A)
    return B
  }
  static ENCODEFILENAME(FILENAME) {
    return FILENAME.replaceALL("/", "__")
  }
  static DECODEFILENAME(FILENAME) {
    return FILENAME.replaceALL("__", "/")
  }
}
export class CLASS4 {
  // GROUPS EACH LAYER EACH IMAGE
  static WORKSPACENAME: string = "DIRECTORY2"
  static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME + "/" + CLASS4.WORKSPACENAME
  static async EXISTWORKSPACEasync() {
    var A, B
    A = await EXPOFILESYSTEM.readDirectoryAsync(EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME)
    B = A.includes(CLASS4.WORKSPACENAME)
    return B
  }
  static async CREATEWORKSPACEasync() {
    var A
    A = await CLASS4.EXISTWORKSPACEasync()
    if (!A) {
      await EXPOFILESYSTEM.makeDirectoryAsync(CLASS4.WORKSPACEURI)
    }
  }
  static async READWORKSPACEasync(): Promise<String[]> {
    return (await EXPOFILESYSTEM.readDirectoryAsync(CLASS4.WORKSPACEURI))
  }
  static async DELETEFILEasync(FILENAME: string) {
    await EXPOFILESYSTEM.deleteAsync(CLASS4.WORKSPACEURI + "/" + FILENAME)
  }
  static async DELETEWORKSPACEasync() {
    await EXPOFILESYSTEM.deleteAsync(CLASS4.WORKSPACEURI)
  }
  static async EXISTFILEasync(FILENAME: string) {
    var A, B
    A = await EXPOFILESYSTEM.readDirectoryAsync(CLASS4.WORKSPACEURI)
    B = A.includes(FILENAME)
    return B
  }
  static async WRITEFILEasync(FILENAME: string, CONTENT: string, OPTIONS?: EXPOFILESYSTEM.WritingOptions) {
    await EXPOFILESYSTEM.writeAsStringAsync(CLASS4.WORKSPACEURI  + "/" + FILENAME, CONTENT, OPTIONS)
  }
  static async READFILEasync(FILENAME: string, OPTIONS?: EXPOFILESYSTEM.ReadingOptions): Promise<String> {
    return await EXPOFILESYSTEM.readAsStringAsync(CLASS4.WORKSPACEURI + "/" + FILENAME, OPTIONS)
  }
  static async GETINFOasync(FILENAME: string, OPTIONS?: EXPOFILESYSTEM.InfoOptions) {
    return await EXPOFILESYSTEM.getInfoAsync(CLASS4.WORKSPACEURI + "/" + FILENAME, OPTIONS)
  }
  static GETUUIDV4FILENAME(): string {
    return UUID.v4()
  }
}
export class CLASS7 {
  static async PICKIMAGE(OPTION?): Promise<EXPOIMAGEPICKER.ImagePickerResult>  {
    var MERGEOPTION 
    = 
    Object.assign
    (
      {

      }
      , 
      {
        MEDIATYPES: EXPOIMAGEPICKER.MediaTypeOptions.All,
        ALLOWSEDITING: false,
        ASPECT: 
        [
          4
          , 
          3
          ,
        ]
        ,
        QUALITY: 1
        ,
        SELECTIONLIMIT: 1
        ,
        ALLOWSMULTIPLESELECTION: false
        ,
      }
      , 
      OPTION
    )
    var GOTIMAGE = await EXPOIMAGEPICKER.launchImageLibraryAsync(MERGEOPTION)
    return GOTIMAGE
  }
}