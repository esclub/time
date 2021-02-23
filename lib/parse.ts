import { parse as fechaParse } from "fecha"
import {Time} from "./time";

function parse(data: {value :string, format: string}) :[Time, Error?] {
    let parseDate = fechaParse(data.value, data.format)
    if (parseDate) {
        return [new Time(parseDate),]
    } else {
        return [new Time(new Date(0)), new Error("esclub/time: parse() error, data: " + JSON.stringify(data))]
    }
}
export { parse }