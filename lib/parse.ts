import { parse as fechaParse } from "fecha"
import {Time} from "./time";

function parse(data: {value :string, format :string}) :[Time, Error?] {
    let [date, err] = parseDate(data) ; if (err) {
        return [new Time(new Date(0)), err]
    }
    return [new Time(date), undefined]
}
const YEAR = "YEAR"
const MONTH = "MONTH"
const DAY = "DAY"
const HOURS = "HOURS"
const MINUTES = "MINUTES"
const SECONDS = "SECONDS"

interface FlagData {
    flag :string,
    len: number,
    setFunc (value: number, date :Date) :Date,
}

const formatFixedVar :FlagData[] = [
    {flag: YEAR, len: 4, setFunc(value: number, date: Date): Date { date.setFullYear(value); return date }},
    {flag: MONTH, len: 2, setFunc(value: number, date: Date): Date { date.setMonth(value-1); return date }},
    {flag: DAY, len: 2, setFunc(value: number, date: Date): Date { date.setDate(value); return date }},
    {flag: HOURS, len: 2, setFunc(value: number, date: Date): Date { date.setHours(value); return date }},
    {flag: MINUTES, len: 2, setFunc(value: number, date: Date): Date { date.setMinutes(value); return date }},
    {flag: SECONDS, len: 2, setFunc(value: number, date: Date): Date { date.setSeconds(value); return date }},
]
function parseDate(data: {value :string, format :string}) :[Date, Error?] {
    data = Object.assign(data)
    let date :Date = new Date(0)
    let offset :number = 0
    for (let i=0;i<data.format.length;i++) {
        const s = data.format[i]
        for (let indexOfFixedVar = 0; indexOfFixedVar < formatFixedVar.length; indexOfFixedVar++) {
            let fixedVar : FlagData = formatFixedVar[indexOfFixedVar]
            if (s == fixedVar.flag[0]) {
                if (data.format.slice(i, i + fixedVar.flag.length) == fixedVar.flag) {
                    let start :number = i-offset
                    let target :string = data.value.slice(start, start + fixedVar.len)
                    let arg :number = parseInt(target, 10)
                    if (isNaN(arg)) {
                        return [new Date(0), new Error("esclub/time: parse(data) error, format:" + fixedVar.flag + " value :" + target)]
                    }
                    date = fixedVar.setFunc(arg, date)
                    if (fixedVar.len > fixedVar.flag.length) {
                        offset += fixedVar.flag.length + fixedVar.len
                    } else {
                        offset += fixedVar.flag.length - fixedVar.len
                    }

                }
                break
            }
        }

    }
    return [date,]
}
export { parse }