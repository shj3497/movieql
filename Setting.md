## Setting

```
yarn add graphql-yoga
yarn add @babel/cli @babel/core @babel/node @bable/preset-env

.babelrc 파일 생성
{
  "presets":["@babel/preset-env"]
}

'useBuiltIns'라는 경고 메세지를 보게 되면 .babelrc 파일을 다음과 같이 작성
{
  "presets": [
    [
      "@babel/preset-env",
      {
      "useBuiltIns": "entry",
      "corejs": 3
      }
    ]
  ]
}
```
