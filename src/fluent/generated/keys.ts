import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '06004f80b3ee4da7a7f2910a628c31e2'
                    }
                    cicd_demo_greeter: {
                        table: 'sys_script_include'
                        id: 'f642730f67ce4977b2ca91e7720bc8d5'
                    }
                    cicd_demo_greeter_greets_by_name: {
                        table: 'sys_atf_test'
                        id: '20cd49c9029d4e6bbe4d4848cf9198d1'
                    }
                    cicd_demo_greeter_script_step: {
                        table: 'sys_atf_step'
                        id: 'f139428f87c0437e9542a56a8ea88f37'
                    }
                    cicd_demo_suite: {
                        table: 'sys_atf_test_suite'
                        id: 'c2fd659d5fee4ad3b8d304333404a292'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'dee22955b2804b6a9445735b677dc644'
                    }
                }
                composite: [
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '2947d50f127d485886bba9ecac5da8e0'
                        key: {
                            test_suite: 'c2fd659d5fee4ad3b8d304333404a292'
                            test: '20cd49c9029d4e6bbe4d4848cf9198d1'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c6a908b81a6f4b3ba19f3dca0d5ce8b4'
                        key: {
                            document_key: 'f139428f87c0437e9542a56a8ea88f37'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dec0f9bd6781466c85dbe558d258bee1'
                        key: {
                            id: 'f139428f87c0437e9542a56a8ea88f37'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f4625ce43b38474e970ffa1aba94b0ae'
                        key: {
                            document_key: 'f139428f87c0437e9542a56a8ea88f37'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                ]
            }
        }
    }
}
