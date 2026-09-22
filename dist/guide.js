const guideMessages = {
  en: {
    "hero.kicker": "PicoRuby × Cloudflare Workers", "hero.title": "Bindings reference.",
    "hero.lede": "Examples and API boundaries for the Cloudflare bindings available from PicoRuby.",
    "intro.kicker": "THE SHAPE", "intro.title": "The request owns<br>the connection.",
    "intro.body": "Every Rack request receives a <code>Cloudflare::Environment</code> proxy at <code>env[\"cloudflare.env\"]</code>. It resolves typed resource wrappers against the current Worker <code>env</code>; it is not a Ruby pointer to a JavaScript object.",
    "intro.note": "Text variables and secrets use <code>ENV</code>. Resource bindings such as KV, D1, AI, or R2 do not.",
    "principle.request.title": "Request-scoped", "principle.request.body": "Wrappers resolve against the current Worker environment and are cached only for that Rack request.",
    "principle.typed.title": "Typed by config", "principle.typed.body": "The generated registry reads declared binding types. The runtime never guesses a resource from its methods.",
    "principle.async.title": "Sync-looking Ruby", "principle.async.body": "Promise-backed host operations cross the Wasm boundary through JSPI and resume the same Ruby stack.",
    "toc.title": "BINDINGS", "toc.environment": "Environment & values", "toc.fetch": "Fetch & Web Crypto",
    "limit.boundary": "Boundary",
    "environment.title": "Environment values and named resources", "environment.body": "Reach declared resources from the proxy. Use <code>ENV</code> for Worker text values and secrets only; writing to it creates a request-local Ruby overlay and does not mutate Cloudflare.",
    "environment.limit": "Unknown resource names return nil through <code>[]</code>; property syntax raises <code>NoMethodError</code>. A missing or wrong typed explicit resource raises <code>Cloudflare::BindingError</code>.",
    "d1.body": "D1 exposes prepared statements. Build a statement with <code>prepare</code>, derive a bound one with <code>bind</code>, then choose a terminal operation such as <code>run</code>, <code>rows</code>, or <code>first</code>.",
    "d1.limit": "Parameters are scalar JSON values only: nil, String, Integer, finite Float, true, or false. Query builders, Ruby transaction blocks, BLOB parameters, and D1 Sessions are outside the current API.",
    "kv.body": "Use a named namespace for binary-safe reads and writes. The optional <code>ttl:</code> maps to the Worker API’s relative expiration.",
    "kv.limit": "Only <code>get</code> and <code>put</code> are exposed today. TTL must be at least 60 seconds; values are capped at 8 MiB at the Wasm boundary.",
    "r2.body": "Put Ruby Strings as raw bytes, inspect objects, list and delete keys, or return an original R2 body as a host-owned Worker stream.",
    "r2.limit": "A streamed R2 body is JavaScript-owned: Ruby cannot read or transform it. Do not set <code>content-length</code> or <code>transfer-encoding</code>; Workers controls framing.",
    "ai.body": "Keep <code>run</code> model-agnostic. Use <code>generate</code> or <code>embed</code> when their explicit response helpers fit. For streaming, hand the returned descriptor to the Rack extension.",
    "ai.limit": "The original SSE bytes pass from the host to the client. Ruby cannot read, transform, or observe completion of that stream; the Rack body must still be a valid enumerable.",
    "vector.body": "Query by vector or ID, then insert, upsert, inspect, and delete vectors with JSON-compatible values.",
    "vector.limit": "The bridge is buffered and JSON-only. <code>top_k</code> is 1–100, or at most 50 when returning values or all metadata.",
    "queue.body": "A producer sends one UTF-8 text message. Consumers receive a batch environment and settle messages with <code>ack</code> or <code>retry</code>.",
    "queue.limit": "Messages are limited to 128 KiB. The producer currently supports one UTF-8 String at a time; batch sends, binary and JSON bodies, and delay options are not included.",
    "durable.body": "The current adapter is a small JSON-backed object store. Select a named instance and read or write a POJO, Hash, Array, or <code>to_pojo</code> value.",
    "durable.limit": "Values must be JSON-compatible. Payloads are capped at 1 MiB at the Wasm boundary, and the Worker module must export <code>PicoRubyDurableObject</code>.",
    "access.body": "Use the Rack middleware to turn the <code>CF_Authorization</code> cookie into an <code>AccessIdentity</code> at <code>env[\"cloudflare.identity\"]</code>.",
    "access.limit": "This fetches and decodes the Access identity response; it does not locally validate JWT signatures, issuer, expiry, or audience, and it does not implement service-token authentication.",
    "utility.title": "Fetch and Web Crypto", "utility.body": "Call HTTP(S) through the Worker host, and use the browser-compatible Web Crypto API for secure random bytes and AES-GCM.",
    "utility.limit": "Fetch is buffered UTF-8 text only: no credentials in URLs, no redirects, a 10-second timeout, and a 1 MiB response cap. AES-GCM supports 16-, 24-, or 32-byte raw keys.",
    "footer.note": "A practical companion to the runtime documentation.", "footer.top": "Back to top"
  },
  ja: {
    "hero.kicker": "PicoRuby × Cloudflare Workers", "hero.title": "Binding リファレンス。",
    "hero.lede": "PicoRuby から使える Cloudflare bindings のサンプルと API の制約。",
    "intro.kicker": "基本の形", "intro.title": "リクエストごとに、<br>接続がある。",
    "intro.body": "すべての Rack リクエストは、<code>env[\"cloudflare.env\"]</code> に <code>Cloudflare::Environment</code> proxy を受け取ります。現在の Worker <code>env</code> に対して型付きの resource wrapper を解決するもので、JavaScript object への Ruby ポインタではありません。",
    "intro.note": "Worker の文字列変数と secret には <code>ENV</code> を使います。KV、D1、AI、R2 のような resource binding には使いません。",
    "principle.request.title": "リクエストスコープ", "principle.request.body": "wrapper は現在の Worker 環境に対して解決され、その Rack リクエスト中だけキャッシュされます。",
    "principle.typed.title": "設定で型を決める", "principle.typed.body": "生成された registry が宣言済み binding の型を読み取ります。runtime がメソッド名から resource を推測することはありません。",
    "principle.async.title": "Ruby からは同期的に見える", "principle.async.body": "Promise ベースの host 操作は JSPI で Wasm 境界を越え、同じ Ruby stack に復帰します。",
    "toc.title": "BINDINGS", "toc.environment": "環境と値", "toc.fetch": "Fetch と Web Crypto",
    "limit.boundary": "境界",
    "environment.title": "環境の値と名前付き resource", "environment.body": "宣言済み resource には proxy から到達します。Worker の文字列値と secret だけに <code>ENV</code> を使ってください。書き込みはリクエストローカルの Ruby overlay を作るだけで、Cloudflare 自体は変更しません。",
    "environment.limit": "不明な resource 名は <code>[]</code> なら nil を返し、property 構文では <code>NoMethodError</code> です。明示的な resource の未登録・型違いは <code>Cloudflare::BindingError</code> になります。",
    "d1.body": "D1 は prepared statement を公開します。<code>prepare</code> で statement を作り、<code>bind</code> で値を与え、<code>run</code>、<code>rows</code>、<code>first</code> などの terminal operation を選びます。",
    "d1.limit": "parameter は nil、String、Integer、有限の Float、true、false の scalar JSON 値だけです。query builder、Ruby の transaction block、BLOB parameter、D1 Sessions は現行 API の対象外です。",
    "kv.body": "名前付き namespace でバイナリセーフに読み書きします。任意の <code>ttl:</code> は Worker API の相対有効期限へ対応します。",
    "kv.limit": "現状公開するのは <code>get</code> と <code>put</code> のみです。TTL は 60 秒以上、value は Wasm 境界で最大 8 MiB です。",
    "r2.body": "Ruby String を raw byte として保存し、object の確認・list・delete を行うか、元の R2 body を host 所有の Worker stream として返せます。",
    "r2.limit": "stream された R2 body は JavaScript 所有です。Ruby から読む・変換することはできません。<code>content-length</code> や <code>transfer-encoding</code> は設定せず、framing は Workers に任せます。",
    "ai.body": "<code>run</code> はモデルに依存しない API のまま使います。明示的な response helper に合う場合は <code>generate</code> や <code>embed</code> を使います。stream は返された descriptor を Rack extension に渡します。",
    "ai.limit": "元の SSE byte は host から client へ通過します。Ruby は stream を読む・変換する・完了を観測することができず、Rack body は有効な enumerable のまま必要です。",
    "vector.body": "vector または ID で query し、JSON 互換の値で vector の insert、upsert、参照、削除を行います。",
    "vector.limit": "bridge は buffered かつ JSON 専用です。<code>top_k</code> は 1–100、value または全 metadata を返す場合は最大 50 です。",
    "queue.body": "producer は UTF-8 text message を 1 件送信します。consumer は batch environment を受け、<code>ack</code> または <code>retry</code> で message を確定します。",
    "queue.limit": "message は最大 128 KiB です。producer は現在 UTF-8 String を 1 件ずつ送る方式のみで、batch send、binary / JSON body、delay option は含まれません。",
    "durable.body": "現行 adapter は小さな JSON-backed object store です。名前付き instance を選び、POJO、Hash、Array、または <code>to_pojo</code> を持つ値を読み書きします。",
    "durable.limit": "value は JSON 互換である必要があります。payload は Wasm 境界で最大 1 MiB、Worker module は <code>PicoRubyDurableObject</code> を export する必要があります。",
    "access.body": "Rack middleware を使うと、<code>CF_Authorization</code> cookie を <code>env[\"cloudflare.identity\"]</code> の <code>AccessIdentity</code> へ変換します。",
    "access.limit": "Access identity response を取得して decode しますが、JWT signature・issuer・expiry・audience のローカル検証は行わず、service-token authentication も実装しません。",
    "utility.title": "Fetch と Web Crypto", "utility.body": "Worker host 経由で HTTP(S) を呼び出し、browser 互換の Web Crypto API で安全な random byte と AES-GCM を使います。",
    "utility.limit": "Fetch は buffered UTF-8 text 専用です。URL に credential は置けず、redirect なし、10 秒 timeout、response は最大 1 MiB。AES-GCM は 16 / 24 / 32 byte の raw key をサポートします。",
    "footer.note": "runtime documentation を実装に近い形で読むためのガイド。", "footer.top": "ページ先頭へ"
  }
};

function applyGuideLanguage(language) {
  const messages = guideMessages[language] || guideMessages.en;
  document.querySelectorAll("[data-guide-i18n]").forEach((element) => {
    const value = messages[element.dataset.guideI18n];
    if (value) element.innerHTML = value;
  });
}

document.addEventListener("site-language-change", (event) => applyGuideLanguage(event.detail.language));
applyGuideLanguage(document.documentElement.dataset.lang || "en");
