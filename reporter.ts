import { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import * as fs from 'fs';


class MyReporter implements Reporter {

    onBegin(config: import('@playwright/test').FullConfig, suite: import('@playwright/test/reporter').Suite) {
        console.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onEnd(result: FullResult): Promise<{ status?: FullResult['status']; } | undefined | void> | void {
        console.log(`Finished the run: ${result.status}`);
    
    }

    onTestBegin(test: TestCase, result: TestResult): void {
        console.log(`Starting test ${test.title}`);
    }

onTestEnd(test: TestCase, result: TestResult): void {
    const execTime = result.duration;

    const data = {
        test: test.title,
        status: result.status,
        duration: execTime,
        errors: result.errors
    };
    const dataToString = JSON.stringify(data, null, 2);
    console.log(dataToString);

    fs.appendFileSync('test-result.json', dataToString);
}

}

export default MyReporter;