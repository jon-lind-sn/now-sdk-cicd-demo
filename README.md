# Now SDK CI/CD Demo

A tiny Fluent app with a Continuous Integration/Continuous Delivery (CI/CD) pipeline that reaches the instance only through scoped REST APIs. Each pipeline credential is an OAuth client credentials integration restricted to one auth scope, and the service account can be a machine identity.

The app is one script include (`CicdDemoGreeter`) and one Automated Test Framework (ATF) suite ("Now SDK CICD Demo Suite").

## How It Works

`tools/now-sdk2.sh` looks like the [ServiceNow SDK](https://github.com/ServiceNow/sdk) command line but sends every instance call to a scoped REST API:

| Command | What it does |
|---|---|
| `build` | Stock `now-sdk build`, then `tools/gen_update_set.py` turns `dist/app` into the update-set XML that `now_sdk/install` accepts |
| `install` | `POST /api/global/now_sdk/install`, then polls `sn_cicd/progress` |
| `auth` | Requests a token and calls `now_sdk/auth` to show the token scope and user |
| `cicd testsuite run` | `sn_cicd/testsuite/run`, then fails unless the suite result is `success` |
| `cicd publish`, `cicd install`, `cicd rollback` | `sn_cicd/app_repo/*` |
| Anything else | Passed to the stock Now SDK |

It needs bash, curl and python3, and reads the same variables the Now SDK uses in CI mode: `SN_SDK_INSTANCE_URL`, `SN_SDK_OAUTH_CLIENT_ID` and `SN_SDK_OAUTH_CLIENT_SECRET`. The test instance needs the app that ships the `now_sdk` API and the "ServiceNow SDK CICD" and "App Repo Deployer" auth scopes.

## Pipeline

`.github/workflows/pipeline.yml`:

1. Pull requests and pushes to `main`: build, install and run the ATF suite on the test instance with the "ServiceNow SDK CICD" credential.
2. Pushes to `main`: publish to the Application Repository (App Repo), wait for approval on the `production` environment, then install the published version on production with the "App Repo Deployer" credential.

App Repo versions are immutable, so bump `version` in `package.json` for each release.

Set these in the repository settings:

1. Variables: `SN_SDK_TEST_INSTANCE_URL`, `SN_SDK_PROD_INSTANCE_URL`.
2. Secrets: `SN_SDK_TEST_OAUTH_CLIENT_ID`, `SN_SDK_TEST_OAUTH_CLIENT_SECRET`, `SN_SDK_PROD_OAUTH_CLIENT_ID`, `SN_SDK_PROD_OAUTH_CLIENT_SECRET`.
3. Environment: `production`, with required reviewers.

## Run It Locally

```bash
npm ci
./tools/now-sdk2.sh build
SN_SDK_INSTANCE_URL=https://<instance>.service-now.com SN_SDK_OAUTH_CLIENT_ID=<id> SN_SDK_OAUTH_CLIENT_SECRET=<secret> ./tools/now-sdk2.sh install
```
