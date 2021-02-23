import * as time  from "./index"

test("time.now", function () {
    let now = time.now()
        expect(new Date().getTime() - now.date.getTime() < 1).toBeTruthy()
})