import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const greeter = ScriptInclude({
    $id: Now.ID['cicd_demo_greeter'],
    name: 'CicdDemoGreeter',
    description: 'Returns a greeting. Exists so the pipeline has something small to install and test.',
    accessibleFrom: 'package_private',
    active: true,
    script: `var CicdDemoGreeter = Class.create();
CicdDemoGreeter.prototype = {
    initialize: function() {},

    greet: function(name) {
        return 'Hello 1.0.3, ' + name;
    },

    type: 'CicdDemoGreeter'
};`,
})
