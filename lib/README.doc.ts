import * as estime from "./index"
test("readme", function () {
    const [time, err] = estime.parse({value: "2012-11-11 01:02:03", format:"YY-MM-DD HH:mm:ss"})
    if (err) {
        throw err
    }
    console.log(time.date.toISOString())
})