import createTestCafe from "testcafe";

const testcafe = await createTestCafe("localhost", 1337, 1338)

try{
    const runner = testcafe.createRunner();

    const failedCount = await runner
    .src(["./Tests/testRemo*.js"])
    .browsers(['chrome'])
    .run();

    console.log('test failed ' + failedCount)
}finally{
    await testcafe.close();
}
