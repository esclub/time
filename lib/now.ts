import { Time } from "./time"
function now() : Time {
    const date  = new Date()
    return new Time(date)
}
export { now }