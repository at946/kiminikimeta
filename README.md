# What is this?
これは"/kiminikimeta"のslash commandをポストしたチャンネルでランダムに１人のユーザーをSlack Botが選出してくれるSlack appです。

# How to use.
`docker-compose.yml`の`SLACK_SIGNING_SECRET`、`SLACK_BOT_TOKEN`を自分のSlack appの値に更新してお使いいただく必要があります。
その後、以下のコマンドを実行してください。

```
$ docker-compose build
$ docker-compose run app npm install
```

あとは通常のDocker（Docker Compose）と同じ使い方です。

```
$ docker-compose up
```

# How to command
Input

```
/kiminikimeta [text]
```

Output

```
[text]
@[random user]、キミに決めた！
```

# Articles
このアプリやSlack appの作り方などについては以下の記事にまとめてます。

[【Slack】OOOoO、キミにきめた！Bolt on Docker + Cloud Runでユーザーをランダムで選んでくれるSlash commandを作った話 - Qiita](https://qiita.com/at-946/items/e70cac96c03f911454ab)
