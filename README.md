# Arkitema UI

## Inspiration
[VisX](https://github.com/airbnb/visx)

## Usage
```bash
npm install --save @arkitema/brand @arkitema/dataFetching @arkitema/errorHandling @arkitema/inputs @arkitema/layout @arkitema/navigation @arkitema/pages @arkitema/visualizations
```


## Package Structure
packages/
- visualizations/
- pages/
  - 404Page
  - loginPage
  - mobileWarningPage
- inputs/
  - arkitemaButton
  - informationInput
  - fileInput
- dataFetching/
  - apolloTokenProvider
  - dataFetchWrapper
  - loading
- errorHandling/
  - errorBoundary
  - errorMessage
- layout/
  - appContainer
  - cardGrid
  - paperPages
  - arkitemaCard
  - arkitemaTable
- navigation/
  - breadCrumb
  - arkitemaAppBar
- brand/
  - logo
  - theme
  - fonts