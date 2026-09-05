const letter = document.getElementById('letter');
const count = document.getElementById('letter-count');
const bottleForm = document.getElementById('bottle-form');
const bottle = document.getElementById('floating-bottle');
const bottleStatus = document.getElementById('bottle-status');
const receivedQuote = document.querySelector('.received blockquote');
const incoming = [
  ['「眠れない夜にも、波の音がありました。」', '— みなも_03'],
  ['「遠くの光が、名前を呼んだ気がします。」', '— 海月_17'],
  ['「昨日の夢に、知らない駅が出てきました。」', '— 砂時計'],
['「海に投げた石が、まだ帰ってきません。」', '— ねむい人'],
['「誰かの忘れ物を拾いました。何かは秘密です。」', '— 逆さま'],
['「月って、近くで見るとどんな味がするんでしょう。」', '— ミルク瓶'],
['「ここを見つけたあなたへ。今日は何色でしたか？」', '— 透明人間'],
['「猫に道を聞いたら、右を見ろと言われました。」', '— 午前2時'],
['「知らない花の名前を、今日ひとつ覚えました。」', '— しおり'],
['「靴ひもがほどける日は、少しだけ遠回りします。」', '— こげパン'],
['「さっきから同じ雲がついてきます。」', '— 空き缶'],
['「もしもし。聞こえていたら返事はいりません。」', '— 774'],
['「冷蔵庫のプリンがなくなりました。犯人はたぶん私です。」', '— ぽんず'],
['「星を数えていたら、途中で朝になりました。」', '— 夜更かし部'],
['「この文章を読んだ人に、いいことがありますように。」', '— ひだまり'],
['「昔の自分から手紙が届いたら、たぶん怖いです。」', '— 未来人見習い'],
['「波の音を録音したら、知らない声が入っていました。」', '— 青い傘'],
['「今日の風は、昨日より少しだけ知り合いでした。」', '— 風見鶏'],
['「名前を忘れたので、とりあえず『たまご』と名乗ります。」', '— たまご'],
['「この瓶がどこまで行くのか、私も知りません。」', '— 旅人A'],
['「誰にも見つからない場所に、誰かへのありがとうを置きます。」', '— こはく'],
['「朝起きたら、昨日より世界が1ミリ広くなっていました。」', '— 1mm'],
['「ここまで読んだなら、あなたも共犯です。」', '— 犯人ではない'],
['「雨の日だけ開く店を知っています。場所は忘れました。」', '— 傘忘れ'],
['「魚に生まれていたら、今ごろ何を考えていたんだろう。」', '— さかな'],
['「誰かが笑った気がしたので、私も笑っておきました。」', '— つられて笑う人'],
['「この瓶を拾った人へ。拾ってくれてありがとう。」', '— 名無しの旅人'],
['「時計が止まっても、時間は怒らないんですね。」', '— 秒針'],
['「知らない人の好きなものを知るのって、なんだか面白い。」', '— となりの誰か'],
['「もし世界が明日なくなるなら、今日はアイスを食べます。」', '— バニラ派'],
['「またどこかで会えたら、そのときは初対面のふりをしましょう。」', '— 9月の人']
];

letter.addEventListener('input', () => { count.textContent = `${letter.value.length} / 140`; });
bottleForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = letter.value.trim();

  if (!text) {
    letter.focus();
    return;
  }

  // 特定のパスワードが入力された場合
  if (text === '114514') {
    window.location.href = 'index.html';
  return
  }

  // 通常のボトルメール処理
  bottle.classList.add('sent');
  bottleStatus.textContent = 'ボトルは青い光の向こうへ流れていきました。いつか、誰かに届きます。';
  letter.value = '';
  count.textContent = '0 / 140';

  window.setTimeout(() => bottle.classList.remove('sent'), 1900);
});
document.getElementById('next-message').addEventListener('click', () => {
  const message = incoming[Math.floor(Math.random() * incoming.length)];
  receivedQuote.innerHTML = `${message[0]}<cite>${message[1]}</cite>`;
});
