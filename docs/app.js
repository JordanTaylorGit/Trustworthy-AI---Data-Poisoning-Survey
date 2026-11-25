// Renders papers and resources from data/*.json. Edit the JSON, not this file.
const LABELS = {all:"All", attack:"Attacks", defense:"Defenses", frontier:"Frontier (LLM, RAG, web-scale)", survey:"Surveys and benchmarks"};
let papers = [], active = "all", query = "";

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

function renderPapers() {
  const list = $("paper-list");
  list.replaceChildren();
  const q = query.trim().toLowerCase();
  const shown = papers
    .filter(p => active === "all" || p.category === active)
    .filter(p => !q || [p.title, p.authors, p.tag, p.venue].join(" ").toLowerCase().includes(q))
    .sort((a, b) => a.year - b.year);
  $("count").textContent = `${shown.length} of ${papers.length} papers`;
  for (const p of shown) {
    const li = el("li");
    const title = el("div", "title");
    if (p.url) { const a = el("a", "", p.title); a.href = p.url; a.target = "_blank"; a.rel = "noopener"; title.append(a); }
    else title.textContent = p.title;
    const meta = el("div", "meta");
    meta.append(el("span", `badge ${p.category}`, LABELS[p.category] ? LABELS[p.category].split(" (")[0] : p.category));
    if (!p.verified) meta.append(el("span", "badge warn", "unverified"));
    meta.append(`${p.authors}. ${p.venue}, ${p.year}.` + (p.tag ? ` ${p.tag}.` : ""));
    li.append(title, meta, p.summary ? el("p", "summary", p.summary) : el("p", "summary empty", "Summary to be written (five sentences or fewer)."));
    list.append(li);
  }
}

function renderFilters() {
  const box = $("filters");
  for (const key of Object.keys(LABELS)) {
    const b = el("button", "", LABELS[key]);
    b.type = "button";
    b.setAttribute("aria-pressed", key === active);
    b.addEventListener("click", () => {
      active = key;
      box.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
      renderPapers();
    });
    box.append(b);
  }
}

function renderResources(items) {
  const ul = $("resource-list");
  for (const r of items) {
    const li = el("li");
    const title = el("div", "title");
    if (r.url) { const a = el("a", "", r.name); a.href = r.url; a.target = "_blank"; a.rel = "noopener"; title.append(a); }
    else title.textContent = r.name;
    const meta = el("div", "meta");
    meta.append(el("span", "badge survey", r.type));
    if (!r.verified) meta.append(el("span", "badge warn", "unverified"));
    li.append(title, meta, r.summary ? el("p", "summary", r.summary) : el("p", "summary empty", "Description to be written (five sentences or fewer)."));
    ul.append(li);
  }
}

async function load(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Could not load ${path}`);
  return res.json();
}

(async () => {
  try {
    papers = await load("data/papers.json");
    renderFilters();
    renderPapers();
    $("search").addEventListener("input", e => { query = e.target.value; renderPapers(); });
    renderResources(await load("data/resources.json"));
  } catch (err) {
    $("paper-list").textContent = err.message + ". Serve the folder with a local web server (python3 -m http.server).";
  }
})();
