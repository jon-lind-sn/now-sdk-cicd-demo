import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ef8aa23805b24e22999825b19ba2c4c8'
                    }
                    cicd_demo_greeter: {
                        table: 'sys_script_include'
                        id: '7803a9f6580d4499b6848b236914fd95'
                    }
                    cicd_demo_greeter_greets_by_name: {
                        table: 'sys_atf_test'
                        id: '71cb821d96184258afa74baa168e577d'
                    }
                    cicd_demo_greeter_script_step: {
                        table: 'sys_atf_step'
                        id: '65e56ee9c001493494ddf3c42dcc5611'
                    }
                    cicd_demo_suite: {
                        table: 'sys_atf_test_suite'
                        id: 'db1ef22419914358a9530c79fe7758ea'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'fe93179e50cf4e52877f543c55c92e1d'
                    }
                }
                composite: [
                    {
                        table: 'sys_element_mapping'
                        id: '159e07bc0db247deaa04a14092cf6180'
                        key: {
                            id: '65e56ee9c001493494ddf3c42dcc5611'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4743ea3c4cdf47f79cd0020e5e769a6b'
                        key: {
                            document_key: '65e56ee9c001493494ddf3c42dcc5611'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6a4ab83c5f134120a6f79d398d914f51'
                        key: {
                            document_key: '65e56ee9c001493494ddf3c42dcc5611'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '75dd28c9ae9840198e6a46530ca91e8c'
                        key: {
                            test_suite: 'db1ef22419914358a9530c79fe7758ea'
                            test: '71cb821d96184258afa74baa168e577d'
                        }
                    },
                ]
            }
        }
    }
}
