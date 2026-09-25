// Binding reference: syntax colouring, copy buttons, and the current-section marker in the nav.
// Language switching is handled by app.js; bilingual prose is toggled in CSS via [lang].

const TOKEN_RULES = {
  ruby: [
    ["comment", /#.*/],
    ["string", /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/],
    ["symbol", /(?<![:\w]):[A-Za-z_]\w*[?!]?|\b[a-z_]\w*:(?![:\w])/],
    ["const", /\b[A-Z]\w*/],
    ["keyword", /\b(?:begin|break|case|class|def|do|else|elsif|end|ensure|false|if|module|next|nil|raise|rescue|return|self|super|then|true|unless|until|when|while|yield)\b/],
    ["number", /\b\d[\d_]*(?:\.\d+)?\b/],
  ],
  jsonc: [
    ["comment", /\/\/.*/],
    ["key", /"(?:\\.|[^"\\])*"(?=\s*:)/],
    ["string", /"(?:\\.|[^"\\])*"/],
    ["keyword", /\b(?:true|false|null)\b/],
    ["number", /-?\b\d+(?:\.\d+)?\b/],
  ],
  js: [
    ["comment", /\/\/.*/],
    ["string", /"(?:\\.|[^"\\])*"/],
    ["keyword", /\b(?:export|from)\b/],
  ],
  sh: [
    ["comment", /#.*/],
    ["string", /"(?:\\.|[^"\\])*"/],
  ],
};

const escapeHtml = (text) => text.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

function highlight(code) {
  const rules = TOKEN_RULES[code.dataset.code];
  if (!rules) return;
  const pattern = new RegExp(rules.map(([, re]) => `(${re.source})`).join("|"), "g");
  const text = code.textContent;
  let html = "";
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const kind = rules[match.slice(1).findIndex((group) => group !== undefined)][0];
    html += `${escapeHtml(text.slice(last, match.index))}<span class="tok-${kind}">${escapeHtml(match[0])}</span>`;
    last = match.index + match[0].length;
  }
  code.innerHTML = html + escapeHtml(text.slice(last));
}

const COPY_LABEL = '<span lang="en">Copy</span><span lang="ja">コピー</span>';
const COPIED_LABEL = '<span lang="en">Copied</span><span lang="ja">コピーしました</span>';

document.querySelectorAll(".ref-code").forEach((figure) => {
  const code = figure.querySelector("code");
  highlight(code);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "ref-copy";
  button.innerHTML = COPY_LABEL;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.innerHTML = COPIED_LABEL;
      setTimeout(() => { button.innerHTML = COPY_LABEL; }, 1500);
    } catch {
      // Clipboard access denied; the code stays selectable.
    }
  });
  figure.querySelector("figcaption").append(button);
});

const nav = document.querySelector(".ref-nav");
const navLinks = new Map([...nav.querySelectorAll("a")].map((link) => [link.hash.slice(1), link]));

// Keep the active link visible in the scrollable sidebar (desktop) or chip bar (mobile)
// without calling scrollIntoView, which would also move the page.
function reveal(link) {
  const box = nav.getBoundingClientRect();
  const item = link.getBoundingClientRect();
  if (item.left < box.left || item.right > box.right) nav.scrollLeft += item.left - box.left - (box.width - item.width) / 2;
  if (item.top < box.top || item.bottom > box.bottom) nav.scrollTop += item.top - box.top - (box.height - item.height) / 2;
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const link = navLinks.get(entry.target.id);
    if (!entry.isIntersecting || !link) continue;
    navLinks.forEach((other) => other.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "true");
    reveal(link);
  }
}, { rootMargin: "-25% 0px -65% 0px" });

document.querySelectorAll(".ref-section").forEach((section) => observer.observe(section));
