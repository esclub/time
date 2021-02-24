import * as estime from "./index"
//
// test("parse", function () {
//     {
//         const [time, err] = estime.parse({value: "2012-11-11", format:"YY-MM-DD"})
//         expect(err).toBeUndefined()
//         expect(time.date.getTime()).toBe(1352563200000)
//     }
//     {
//         const [time, err] = estime.parse({value: "2012-11-11 01:02:03", format:"YY-MM-DD HH:mm:ss"})
//         expect(err).toBeUndefined()
//         expect(time.date.getTime()).toBe(1352566923000)
//     }
//     {
//         const RFC3339 = "YYYY-MM-DDTHH:mm:ssZ"
//         const [time, err] = estime.parse({value: "2021-02-23T22:16:55+08:00", format:RFC3339})
//         expect(err).toBeUndefined()
//         expect(time.date.getTime()).toBe(1614089815000)
//     }
// })

test("parseYear", function () {
    estime.parse({value:"1000-11-22 03:04:05", format: "YEAR-MONTH-DAY HOURS:MINUTES:SECONDS"})
})