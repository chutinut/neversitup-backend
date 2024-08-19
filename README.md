```
Example.project
    ├── src                                                 # all source of api
        ├── @core                                           # cored information
            ├── constant                                    # constant
                └── example.constant.ts
            ├── db                                          # database configuration
                └── database.config.ts
            └── util                                        # shared function
                └── example.util.ts
        └── @module                                         # each api 
                └── example
                    ├── example.controller.ts               # main function, request routing
                    ├── example.interface.ts                # data structuring
                    ├── example.service.ts                  # query building and send to database 
                    └── example.unit.spec.ts                # unit testing function(using jest)
    ├── test                                                # api testing directory
        ├── data                                            # testing data
            └── testing_data.json
        ├── database                                        # testing data
            └── database_shell_script.sql
        ├── environment                                     # postman environment
            └── example.postman_environment.json
        ├── result                                          # api testing result
            └── example.result.xml
        ├── Dockerfile.test                                 # docker file config for testing
        ├── collection.postman_collection.json              # postman testing collection
        └── test_entrypoint.sh                              # sh script for newman runner
    ├── .eslintrc.json                                      # linter for code formatting
    ├── .gitignore
    ├── docker-compose.yml                                  # docker compose config
    ├── Dockerfile                                          # docker file config for api
    ├── jest.config.js                                      # jest configuration for unit testing
    ├── package.json
    └── README.md
```