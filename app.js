const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command('/kiminikimeta', async ({ command, ack, say, context }) => {
  ack();
  try {
    // slash commandが叩かれたChannelに所属する全ユーザー情報を取得する
    const result = await app.client.conversations.members({
      token: context.botToken,
      channel: command.channel_id
    });
    const members = result.members;
    
    // 取得した全ユーザーから今回作成しているSlack appのBotを除外する
    const bot_idx = members.indexOf(context.botUserId);
    if (bot_idx > -1) {
      members.splice(bot_idx, 1);
    }
    
    // Bot以外のユーザーから1つをランダムで選び、Channelに投稿する
    const member = members[Math.floor(Math.random() * members.length)];
    say(`<@${member}>、キミに決めた！`);
  } catch (error) {
    console.log(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

