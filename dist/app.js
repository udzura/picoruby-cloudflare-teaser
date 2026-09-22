const messages = {
  en: {
    "nav.why": "Why", "nav.start": "Start", "nav.rack": "Rack & Sinatra", "nav.bindings": "Binding guide",
    "hero.eyebrow": "A small Ruby runtime for a very large edge", "hero.line1": "Ruby at the edge.", "hero.line2": "The web you know.",
    "hero.lede": "Write a Rack-style application in PicoRuby. Compile it to WebAssembly. Run it inside Cloudflare Workers, close to every request.", "hero.cta": "Get started",
    "stats.protocol": "protocol adapter", "stats.bridge": "async host bridge", "stats.runtime": "compact runtime", "stats.request": "per request",
    "why.kicker": "THE POSSIBILITY", "why.title": "Ruby ergonomics.<br>Edge-native reach.",
    "why.body": "PicoRuby brings a compact Ruby implementation to WebAssembly. The adapter connects familiar Ruby application shapes to Cloudflare’s global runtime and request-scoped platform bindings.",
    "why.cards.ruby.title": "Keep the Ruby shape", "why.cards.ruby.body": "A familiar <code>call(env)</code> entrypoint and a Rack response tuple let application code stay recognizably Ruby.",
    "why.cards.edge.title": "Reach the platform", "why.cards.edge.body": "Use D1, KV, R2, Workers AI, Vectorize, Queues, Durable Objects, Access, and Web Crypto from request-scoped Ruby wrappers.",
    "why.cards.small.title": "Stay intentionally small", "why.cards.small.body": "Precompiled bytecode, one VM per request, and explicit compatibility boundaries make the runtime understandable and testable.",
    "start.kicker": "GETTING STARTED", "start.title": "One command to a new edge app.",
    "start.intro": "Install the generator gem and create a minimal Worker project. The CLI writes the Ruby app, build configuration, Worker entrypoint, package manifests, and Wrangler configuration for you.",
    "start.template": "Template & CLI repository", "start.note.title": "Need bindings too?", "start.note.body": "Add <code>--bindings</code> when generating to include KV, Queue, Durable Object, and Access examples with their Wrangler declarations.",
    "rack.kicker": "RACK & SINATRA", "rack.title": "A narrow bridge,<br>built on purpose.",
    "rack.body": "The runtime implements the Rack application protocol—an environment Hash in, a <code>[status, headers, body]</code> tuple out. It is not the complete CRuby Rack distribution.",
    "rack.compat": "Read the compatibility contract", "rack.matrix.title": "Runtime contract", "rack.matrix.status": "CURRENT",
    "rack.matrix.input": "Buffered request bodies", "rack.matrix.headers": "Headers & cookies", "rack.matrix.hoststreams": "Host-owned AI / R2 streams", "rack.matrix.rubystreams": "Ruby-generated streaming",
    "rack.matrix.supported": "Supported", "rack.matrix.profile": "Compatibility profile", "rack.matrix.notserver": "Not provided by server", "rack.matrix.future": "Future work",
    "rack.matrix.note": "The Sinatra profile intentionally disables sessions, rack-protection, logging middleware, static files, templates, and development reloading.",
    "bindings.kicker": "CLOUDFLARE BINDINGS", "bindings.title": "Platform primitives,<br>Ruby syntax.",
    "bindings.body": "Bindings stay in the Worker <code>env</code>. The request receives typed Ruby wrappers through <code>env[\"cloudflare.env\"]</code>, with asynchronous calls bridged by JSPI.",
    "bindings.api": "API details", "bindings.guide": "Open the complete binding guide", "binding.d1.label": "Prepared SQL", "binding.ai.label": "Inference & streams", "binding.r2.label": "Objects & streams", "binding.kv.label": "Edge key-value",
    "more.vector.title": "Semantic search", "more.vector.body": "Query, insert, upsert, inspect, and delete vectors using JSON-compatible values.",
    "more.queue.title": "Producers & consumers", "more.queue.body": "Send UTF-8 messages and process batches with ack, retry, and Rack-style middleware.",
    "more.do.title": "JSON object state", "more.do.body": "Store JSON-compatible POJOs in named Durable Object instances.",
    "more.access.title": "Identity middleware", "more.access.body": "Resolve Cloudflare Access identity and place it in the Rack environment.",
    "more.crypto.title": "Secure randomness", "more.crypto.body": "Use Web Crypto-backed random bytes and AES-GCM instead of pseudo-randomness.",
    "more.fetch.title": "Native host access", "more.fetch.body": "Make buffered HTTP calls and read variables or secrets from request scope.",
    "examples.kicker": "EXAMPLES", "examples.title": "See the pieces<br>working together.",
    "examples.body": "The repository includes runnable applications that combine PicoRuby, Sinatra, Static Assets, and Cloudflare resources.",
    "examples.d1.title": "Todo API & frontend", "examples.d1.body": "Static Assets serves the UI; the Worker routes <code>/api/*</code> to Sinatra and D1.",
    "examples.ai.title": "Incremental AI stream", "examples.ai.body": "Pass a host-owned SSE stream straight to the browser, including cancellation.",
    "examples.rag.title": "Streaming RAG", "examples.rag.body": "Embed documents, retrieve sources, and stream a grounded answer with citations.",
    "links.kicker": "KEEP EXPLORING", "links.title": "Small runtime.<br>Open road.", "links.repo": "Worker runtime repository", "links.picoruby": "PicoRuby project", "links.apis": "Ruby binding references", "links.guide": "Guide ↗",
    "footer.note": "An experimental, open-source bridge between PicoRuby and Cloudflare Workers.", "footer.top": "Back to top"
  },
  ja: {
    "nav.why": "可能性", "nav.start": "はじめ方", "nav.rack": "Rack & Sinatra", "nav.bindings": "Bindingガイド",
    "hero.eyebrow": "小さな Ruby ランタイムを、大きなエッジへ", "hero.line1": "Rubyで、<br>エッジで、", "hero.line2": "いつものWeb開発。",
    "hero.lede": "Rack スタイルのアプリを PicoRuby で書き、WebAssembly へコンパイル。Cloudflare Workers 上で、リクエストのすぐそばで実行します。", "hero.cta": "はじめる",
    "stats.protocol": "プロトコルアダプタ", "stats.bridge": "非同期ホストブリッジ", "stats.runtime": "コンパクトなランタイム", "stats.request": "1リクエストごと",
    "why.kicker": "可能性", "why.title": "Ruby の書き心地を、<br>エッジのスケールで。",
    "why.body": "PicoRuby は、コンパクトな Ruby 実装を WebAssembly に持ち込みます。アダプタがおなじみの Ruby アプリの形と、Cloudflare のグローバルランタイムやリクエストスコープのバインディングをつなぎます。",
    "why.cards.ruby.title": "Ruby の形をそのままに", "why.cards.ruby.body": "おなじみの <code>call(env)</code> と Rack のレスポンスタプルで、アプリのコードは Ruby らしさを保てます。",
    "why.cards.edge.title": "プラットフォームにつながる", "why.cards.edge.body": "D1、KV、R2、Workers AI、Vectorize、Queues、Durable Objects、Access、Web Crypto を Ruby から扱えます。",
    "why.cards.small.title": "意図的に小さく", "why.cards.small.body": "プリコンパイル済みバイトコード、1リクエスト1VM、明確な互換性の境界により、理解しやすくテスト可能です。",
    "start.kicker": "はじめ方", "start.title": "コマンドひとつで、新しいエッジアプリを。",
    "start.intro": "generator gem をインストールし、最小構成の Worker プロジェクトを生成します。Ruby アプリ、ビルド設定、Worker entrypoint、package manifest、Wrangler 設定まで CLI が用意します。",
    "start.template": "Template & CLI リポジトリ", "start.note.title": "binding もまとめて用意するには", "start.note.body": "生成時に <code>--bindings</code> を付けると、KV、Queue、Durable Object、Access の例と Wrangler 設定も追加されます。",
    "rack.kicker": "RACK & SINATRA", "rack.title": "目的を絞った、<br>細いブリッジ。",
    "rack.body": "ランタイムが実装するのは Rack のアプリプロトコルです。入力は env Hash、出力は <code>[status, headers, body]</code> タプル。CRuby の Rack 全体ではありません。",
    "rack.compat": "互換性の契約を読む", "rack.matrix.title": "ランタイム契約", "rack.matrix.status": "現在",
    "rack.matrix.input": "バッファされたリクエストボディ", "rack.matrix.headers": "ヘッダと Cookie", "rack.matrix.hoststreams": "ホスト所有の AI / R2 ストリーム", "rack.matrix.rubystreams": "Ruby 生成のストリーミング",
    "rack.matrix.supported": "サポート", "rack.matrix.profile": "互換プロファイル", "rack.matrix.notserver": "サーバーは未提供", "rack.matrix.future": "将来の課題",
    "rack.matrix.note": "Sinatra 互換プロファイルは、sessions、rack-protection、ロギングミドルウェア、Static Files、template、development reload を意図的に無効化しています。",
    "bindings.kicker": "CLOUDFLARE 連携", "bindings.title": "プラットフォームの機能を、<br>Ruby の構文で。",
    "bindings.body": "バインディングは Worker の <code>env</code> に保持されます。リクエストは <code>env[\"cloudflare.env\"]</code> 経由で型付き Ruby ラッパーを受け取り、非同期呼び出しは JSPI が中継します。",
    "bindings.api": "API 詳細", "bindings.guide": "bindingガイドを開く", "binding.d1.label": "プリペアド SQL", "binding.ai.label": "推論とストリーム", "binding.r2.label": "オブジェクトとストリーム", "binding.kv.label": "エッジ KV",
    "more.vector.title": "セマンティック検索", "more.vector.body": "JSON 互換の値でベクトルを検索、追加、更新、参照、削除できます。",
    "more.queue.title": "プロデューサとコンシューマ", "more.queue.body": "UTF-8 メッセージを送信し、ack、retry、Rack スタイルのミドルウェアでバッチを処理します。",
    "more.do.title": "JSON オブジェクト状態", "more.do.body": "名前付き Durable Object インスタンスに JSON 互換 POJO を保存します。",
    "more.access.title": "アイデンティティ・ミドルウェア", "more.access.body": "Cloudflare Access のアイデンティティを取得し、Rack env へ格納します。",
    "more.crypto.title": "安全な乱数", "more.crypto.body": "擬似乱数ではなく、Web Crypto ベースの乱数バイトと AES-GCM を使います。",
    "more.fetch.title": "ホスト機能へのアクセス", "more.fetch.body": "バッファ型 HTTP リクエストを行い、リクエストスコープの変数や secret を読みます。",
    "examples.kicker": "サンプル", "examples.title": "つながって動く姿を<br>見てみよう。",
    "examples.body": "リポジトリには、PicoRuby、Sinatra、Static Assets、Cloudflare リソースを組み合わせた実行可能なアプリが含まれます。",
    "examples.d1.title": "Todo API とフロントエンド", "examples.d1.body": "Static Assets が UI を配信し、Worker が <code>/api/*</code> を Sinatra と D1 へルーティングします。",
    "examples.ai.title": "インクリメンタル AI ストリーム", "examples.ai.body": "ホスト所有の SSE ストリームをキャンセル対応のままブラウザへ渡します。",
    "examples.rag.title": "ストリーミング RAG", "examples.rag.body": "文書を埋め込み、ソースを検索し、引用付きの回答をストリームします。",
    "links.kicker": "もっと見る", "links.title": "小さなランタイム。<br>大きなこれから。", "links.repo": "Worker ランタイムのリポジトリ", "links.picoruby": "PicoRuby プロジェクト", "links.apis": "Ruby バインディングリファレンス", "links.guide": "ガイド ↗",
    "footer.note": "PicoRuby と Cloudflare Workers をつなぐ、実験的なオープンソースブリッジ。", "footer.top": "ページ先頭へ"
  }
};

const bindingData = {
  d1: {
    kind: "DATABASE", link: "https://github.com/udzura/picoruby-cloudflare-worker-wasm/blob/master/docs/cloudflare-d1.md",
    title: { en: "Prepare. Bind. Run.", ja: "prepare。bind。run。" },
    description: { en: "Keep SQL and values separate with an explicit prepared-statement flow.", ja: "明示的なプリペアドステートメントで、SQL と値を分離します。" },
    code: `db = env["cloudflare.env"].DB

result = db
  .prepare("INSERT INTO todos (title) VALUES (?1)")
  .bind("Ship PicoRuby")
  .run

todo = db
  .prepare("SELECT * FROM todos WHERE id = ?1")
  .bind(result.last_row_id)
  .first`
  },
  ai: {
    kind: "INFERENCE", link: "https://github.com/udzura/picoruby-cloudflare-worker-wasm/blob/master/docs/cloudflare-ai.md",
    title: { en: "Generate at the edge.", ja: "エッジで生成。" },
    description: { en: "Use the generic run API, typed helpers, or pass a host-owned SSE stream to the client.", ja: "汎用 run API、型付き helper、またはホスト所有の SSE ストリームを使えます。" },
    code: `ai = env["cloudflare.env"].AI
stream = ai.generate(
  "@cf/meta/llama-3.1-8b-instruct",
  {
    "prompt" => "Tell a short Ruby story",
    "stream" => true,
  }
)

env["cloudflare.hijack"] = stream
[200, { "content-type" => "text/event-stream" }, []]`
  },
  r2: {
    kind: "OBJECT STORAGE", link: "https://github.com/udzura/picoruby-cloudflare-worker-wasm/blob/master/docs/cloudflare-r2.md",
    title: { en: "Store bytes. Stream back.", ja: "バイトを保存し、ストリームで返す。" },
    description: { en: "Upload binary-safe Ruby Strings or hand the original R2 stream directly to Workers.", ja: "バイナリセーフな Ruby String を保存し、R2 のストリームを Workers にそのまま渡せます。" },
    code: `bucket = env["cloudflare.env"].BUCKET
object = bucket.get("report.pdf")

return [404, { "content-type" => "text/plain" },
  ["not found"]] unless object

env["cloudflare.hijack"] = object.body
[200, { "content-type" => "application/pdf" }, []]`
  },
  kv: {
    kind: "KEY-VALUE", link: "https://github.com/udzura/picoruby-cloudflare-worker-wasm/blob/master/docs/cloudflare-kv.md",
    title: { en: "Cache near the request.", ja: "リクエストの近くにキャッシュ。" },
    description: { en: "Read and write binary-safe values through a named KV namespace, with optional TTL.", ja: "名前付き KV namespace で、バイナリセーフな値を TTL 付きで読み書きできます。" },
    code: `cache = env["cloudflare.env"].CACHE_KV

cache.put("greeting", "Hello from PicoRuby", ttl: 300)
value = cache.get("greeting")

[200, { "content-type" => "text/plain" },
  [value || "missing"]]`
  }
};

let activeBinding = "d1";

function currentLanguage() {
  return document.documentElement.dataset.lang || "en";
}

function updateBinding(name) {
  if (!document.querySelector("[data-binding-kind]")) return;
  activeBinding = bindingData[name] ? name : "d1";
  const data = bindingData[activeBinding];
  const lang = currentLanguage();
  document.querySelector("[data-binding-kind]").textContent = data.kind;
  document.querySelector("[data-binding-title]").textContent = data.title[lang];
  document.querySelector("[data-binding-description]").textContent = data.description[lang];
  document.querySelector("[data-binding-code]").textContent = data.code;
  document.querySelector("[data-binding-link]").href = data.link;
  document.querySelectorAll("[data-binding]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.binding === activeBinding));
  });
}

function setLanguage(lang) {
  const next = messages[lang] ? lang : "en";
  document.documentElement.lang = next;
  document.documentElement.dataset.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = messages[next][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langButton === next));
  });
  localStorage.setItem("site-language", next);
  updateBinding(activeBinding);
  document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language: next } }));
}

document.querySelectorAll("[data-lang-button]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langButton));
});

document.querySelectorAll("[data-code-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.codeTab;
    document.querySelectorAll("[data-code-tab]").forEach((tab) => tab.setAttribute("aria-selected", String(tab === button)));
    document.querySelectorAll("[data-code-panel]").forEach((panel) => { panel.hidden = panel.dataset.codePanel !== target; });
  });
});

document.querySelectorAll("[data-binding]").forEach((button) => button.addEventListener("click", () => updateBinding(button.dataset.binding)));

const savedLanguage = localStorage.getItem("site-language");
const preferredLanguage = navigator.language.startsWith("ja") ? "ja" : "en";
setLanguage(savedLanguage || preferredLanguage);
