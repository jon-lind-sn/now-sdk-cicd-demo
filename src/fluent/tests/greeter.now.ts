import '@servicenow/sdk/global'
import { Test, TestSuite } from '@servicenow/sdk/core'

export const greeterGreetsByName = Test(
    {
        $id: Now.ID['cicd_demo_greeter_greets_by_name'],
        name: 'CicdDemoGreeter greets by name',
        description: 'Calls CicdDemoGreeter.greet and checks the returned greeting.',
        active: true,
        failOnServerError: false,
    },
    (atf) => {
        atf.server.runServerSideScript({
            $id: Now.ID['cicd_demo_greeter_script_step'],
            jasmineVersion: '3.1',
            script: `(function(outputs, steps, params, stepResult, assertEqual) {
    describe('CicdDemoGreeter', function() {
        it('greets by name', function() {
            expect(new x_snc_cicd_demo_1.CicdDemoGreeter().greet('CI')).toBe('Hello 1.0.1, CI');
        });
    });
})(outputs, steps, params, stepResult, assertEqual);
jasmine.getEnv().execute();`,
        })
    }
)

export const cicdDemoSuite = TestSuite({
    $id: Now.ID['cicd_demo_suite'],
    name: 'Now SDK CICD Demo 1 Suite',
    description: 'Run by the pipeline on the test instance before publishing.',
    tests: [greeterGreetsByName],
})
