const ENGLISH_ID = "NDOqyb5VSdA";
const ORIGINAL_ID = "5XdeI0cOWSs";
const POSTER_HQ = "https://i.ytimg.com/vi/" + ENGLISH_ID + "/hqdefault.jpg";
const PAGE_VIEWS = "https://api.counterapi.dev/v1/niulai/watch";
const RELEASE = new Date("2026-08-05T00:00:00+08:00");
const seenKey = "niu-lai-viewed";
const langKey = "niu-lai-subs";
const LANG_NAMES = {
  off: "off",
  en: "English",
  es: "Spanish",
  pt: "Portuguese",
  fr: "French",
  de: "German",
  it: "Italian",
  id: "Indonesian",
  vi: "Vietnamese",
  th: "Thai",
  ja: "Japanese",
  ko: "Korean",
  hi: "Hindi",
  ar: "Arabic",
  ru: "Russian",
  tr: "Turkish",
  pl: "Polish",
  nl: "Dutch",
};

function currentLang() {
  const select = document.getElementById("subtitles");
  const value = select && LANG_NAMES[select.value] ? select.value : "en";
  return value;
}

function embedUrl(lang, start) {
  const useEnglishFile = lang === "en";
  const id = useEnglishFile ? ENGLISH_ID : ORIGINAL_ID;
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
  });
  if (lang !== "off") {
    params.set("cc_load_policy", "1");
    params.set("cc_lang_pref", lang);
  }
  if (start && start > 1) params.set("start", String(Math.floor(start)));
  return "https://www.youtube.com/embed/" + id + "?" + params.toString();
}

function playerTitle(lang) {
  if (lang === "off") return "Niu Lai, full version. Subtitles are off.";
  return "Niu Lai, full version. Subtitles in " + LANG_NAMES[lang] + ".";
}

const SOURCES = [
  {
    id: "5XdeI0cOWSs",
    kind: "youtube",
    label: "Full movie",
    channel: "Nota",
    online: "16 Aug 2026",
    seed: 1101589,
    seedNote: "1,101,589 live on 22 Aug",
    detail: "First widely shared full copy. 700,000+ documented by 19 August.",
  },
  {
    id: "NDOqyb5VSdA",
    kind: "youtube",
    label: "Full version, English subtitles",
    channel: "Pet the Actor",
    online: "17 Aug 2026",
    seed: 668191,
    detail: "Dedicated English-subbed upload used by this player.",
  },
  {
    id: "O98ziUVmrYg",
    kind: "youtube",
    label: "Full version, English subtitles",
    channel: "NuzzlePaw",
    online: "18 Aug 2026",
    seed: 438408,
    detail: "Second English full upload counted in the live total.",
  },
  {
    id: "MKrzprr72h0",
    kind: "youtube",
    label: "Full movie, English subtitles",
    channel: "Public upload",
    online: "Aug 2026",
    seed: 15532,
    detail: "Smaller public copy still counted in the full-film total.",
  },
  {
    id: "2vcuuDdbZu0",
    kind: "youtube",
    label: "Full movie",
    channel: "shinaryen",
    online: "Aug 2026",
    seed: 12,
    detail: "Public full-length file with almost no traffic yet.",
  },
  {
    id: "tiktok-andyyjiang",
    kind: "clip",
    href: "https://www.tiktok.com/@andyyjiang",
    label: "TikTok explainer",
    channel: "TikTok, Andy Jiang",
    online: "18 Aug 2026",
    seed: 1200000,
    live: false,
    detail: "1.2 million views in a day. Talks about the film. Not a single scene cut.",
  },
  {
    id: "bilibili-liu",
    kind: "clip",
    href: "https://www.bilibili.com/",
    label: "Bilibili recap",
    channel: "Liu Hangzhang",
    online: "Aug 2026",
    seed: 1410000,
    live: false,
    detail: "Documented 1.41 million plays. Cinema reaction plus the movie. Other Bilibili videos also passed 1 million.",
  },
];

const FILM_LEN = 86 * 60;
const SHORT_CLIPS = [
  {
    id: "mama",
    start: 78,
    title: "Drawn-out Mama",
    platform: "Douyin, Reels, TikTok",
    views: null,
    viewsNote: "Lead Douyin scene. Part of 2.42 billion related short plays.",
    detail: "The calf stretches Mama. Phone clips from cinemas started the short-form wave around 13–15 August.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai%20mama",
  },
  {
    id: "name-call",
    start: 132,
    title: "Mother calls his name",
    platform: "Douyin, WeChat Channels",
    views: null,
    viewsNote: "Second most copied line. Same topic pool as Mama.",
    detail: "The mother shouts the calf’s name at full volume. Brands later swapped the first word and reused the cadence.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai",
  },
  {
    id: "trip",
    start: 248,
    title: "Calf trips",
    platform: "Douyin, Xiaohongshu",
    views: null,
    viewsNote: "Early phone clips. Count sits inside the Douyin topic total.",
    detail: "Stiff walk, then a fall. Shorts used this as the first proof of the modeling.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai%20trip",
  },
  {
    id: "serpent",
    start: 520,
    title: "Serpent scare",
    platform: "Douyin remakes, Reels",
    views: null,
    viewsNote: "Yili remake: 188,000 likes. Original cinema clips uncounted.",
    detail: "The dream serpent startles him and he calls Mama again. Brand remakes copied this beat.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai%20snake",
  },
  {
    id: "herd",
    start: 1140,
    title: "Copy-paste herd",
    platform: "Douyin, Reels",
    views: null,
    viewsNote: "Repeated herd shots. Topic plays, not one upload.",
    detail: "The cattle look stamped. Shorts loop the herd as the modeling joke.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai%20herd",
  },
  {
    id: "roar",
    start: 1680,
    title: "The roar",
    platform: "Douyin, TikTok, RedNote",
    views: null,
    viewsNote: "Sound clips of the odd roar. No single public view total.",
    detail: "A jarring cry became its own short. Press named this as a clip that jumped platforms.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai%20roar",
  },
  {
    id: "line",
    start: 2520,
    title: "Tomorrow is now",
    platform: "Cinema phone clips",
    views: null,
    viewsNote: "Laugh line in theatres. Views sit in the topic totals.",
    detail: "A stiff line that reads as tomorrow’s tomorrow is now. Audiences laughed; phones came out.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai",
  },
  {
    id: "mother",
    start: 2280,
    title: "Mother stays behind",
    platform: "Xiaohongshu, Reels",
    views: null,
    viewsNote: "One Xiaohongshu note: 52,000 likes. Clip views not published.",
    detail: "The wolf attack. Some shorts stop being jokes here. The note said the room went quiet.",
    href: "https://www.tiktok.com/search?q=Niu%20Lai%20mother",
  },
  {
    id: "milk",
    start: 4080,
    title: "Father on the milk",
    platform: "YouTube stills, Shorts",
    views: null,
    viewsNote: "The still that press reused. Short cuts exist; no live count.",
    detail: "Late film. The father talks about the milk. Wikipedia used this frame.",
    href: "https://www.youtube.com/results?search_query=Niu+Lai+milk",
  },
  {
    id: "x-clip",
    start: 60,
    title: "First Western clip",
    platform: "X, then Reels",
    views: 19000,
    metric: "likes",
    viewsNote: "Tong Bingxue, 15 August. 19,000 likes and 2,600 reposts in four days.",
    detail: "A short movie clip plus the two-person crew note. This is the cut that left China.",
    href: "https://x.com/tongbingxue",
  },
  {
    id: "tiktok-andy",
    start: 20,
    title: "TikTok explainer",
    platform: "TikTok",
    views: 1200000,
    viewsNote: "1.2 million views in a day on 18 August.",
    detail: "Andy Jiang. Uses film shots but is a talk-over, not one scene.",
    href: "https://www.tiktok.com/@andyyjiang",
  },
  {
    id: "bili-liu",
    start: 300,
    title: "Bilibili recap",
    platform: "Bilibili",
    views: 1410000,
    viewsNote: "1.41 million plays. Other Bilibili videos also passed 1 million.",
    detail: "Liu Hangzhang. Cinema room plus scenes. Closest public short-form view we can pin.",
    href: "https://www.bilibili.com/",
  },
];

const THEATRES = [
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Shanghai",
    value: "Major chains",
    detail: "Booking apps still sold seats a week ahead in mid-August. Check Maoyan or Tao Piao Piao for tonight.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Beijing",
    value: "Short-run houses",
    detail: "On 16 August, Beijing had tickets for the next day or two. Later dates disappeared faster than in the south.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Guangzhou",
    value: "Still booking",
    detail: "Press found future-dated tickets here after the viral surge, including added late shows.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Chengdu",
    value: "Still booking",
    detail: "Listed with Shanghai, Guangzhou, and Chongqing as cities still selling seats after 15 August.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Chongqing",
    value: "Still booking",
    detail: "Same mid-August booking-app check as Chengdu and Guangzhou.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Wuhan",
    value: "Added late shows",
    detail: "Cinemas put on extra screenings on 15 August. One reported late-night curiosity crowd.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · now showing",
    title: "Nanjing",
    value: "Added screenings",
    detail: "A house there said it added shows to test the online heat and sold better than expected.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "now",
    kicker: "China · pulled",
    title: "Dalian",
    value: "No screenings",
    detail: "The production company’s city dropped the film from 15 August. Wanda, CGV, and others told press they had no showtimes.",
    href: "https://www.maoyan.com/",
    link: "Open Maoyan",
  },
  {
    filter: "soon",
    kicker: "Singapore · 1 Sep 2026",
    title: "Golden Village, Cathay, Shaw, The Projector",
    value: "Showtimes pending",
    detail: "Announced as the first stop outside China. Booking apps had not locked seats as of 22 August.",
    href: "https://www.cinemaonline.sg/",
    link: "Check Cinema Online",
  },
  {
    filter: "soon",
    kicker: "Malaysia · teased",
    title: "TGV Cinemas",
    value: "Not confirmed",
    detail: "TGV posted about the film and a poster call. No locked national date yet.",
    href: "https://www.tgv.com.my/",
    link: "Open TGV",
  },
  {
    filter: "online",
    kicker: "This page",
    title: "Watch here",
    value: "YouTube player",
    detail: "Full 86-minute film. Pick a subtitle language above. Playback does not come from a personal computer.",
    href: "#cinema-screen",
    link: "Jump to player",
    local: true,
  },
];

const fmt = new Intl.NumberFormat("en-US");

function daysSinceRelease() {
  const ms = Date.now() - RELEASE.getTime();
  return Math.max(0, Math.floor(ms / 86400000));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const poster = document.getElementById("poster");
poster.addEventListener("error", function () {
  if (poster.src !== POSTER_HQ) poster.src = POSTER_HQ;
});

const days = daysSinceRelease();
setText("days-stat", String(days));
setText("days-live", "Day " + days + " since release.");

async function loadPageViews() {
  const flag = sessionStorage.getItem(seenKey) === "1";
  const url = flag ? PAGE_VIEWS : PAGE_VIEWS + "/up";
  if (!flag) sessionStorage.setItem(seenKey, "1");
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) return;
    const data = await res.json();
    const n = Number(data.count ?? data.value);
    if (!Number.isFinite(n)) return;
    const shown = fmt.format(n);
    setText("page-views", shown);
    setText("page-views-stat", shown);
    setText("page-views-bottom", shown);
  } catch {}
}

async function fetchSourceViews(source) {
  if (source.kind !== "youtube") {
    return { count: source.seed, live: false };
  }
  try {
    const res = await fetch(
      "https://returnyoutubedislikeapi.com/votes?videoId=" + encodeURIComponent(source.id),
      { headers: { Accept: "application/json" } }
    );
    if (!res.ok) throw new Error("unavailable");
    const data = await res.json();
    const n = Number(data.viewCount);
    if (Number.isFinite(n) && n > 0) return { count: n, live: true };
  } catch {}
  return { count: source.seed, live: false };
}

function renderSources(rows) {
  const host = document.getElementById("source-cards");
  if (!host) return;
  host.replaceChildren();
  const filmTotal = rows
    .filter(function (row) { return row.kind === "youtube"; })
    .reduce(function (sum, row) { return sum + (row.count || 0); }, 0);
  const shortTotal = rows
    .filter(function (row) { return row.kind === "clip"; })
    .reduce(function (sum, row) { return sum + (row.count || 0); }, 0);
  const allTotal = filmTotal + shortTotal;

  rows.forEach(function (row) {
    const href = row.href || "https://www.youtube.com/watch?v=" + row.id;
    const card = document.createElement("article");
    card.className = "source-card";
    const share = allTotal ? Math.max(2, Math.round((row.count / allTotal) * 100)) : 0;
    const status = row.live ? "Live count" : "Documented";
    card.innerHTML =
      "<p class=\"card-kicker\">" + escapeHtml(row.channel) + "</p>" +
      "<h3>" + escapeHtml(row.label) + "</h3>" +
      "<p class=\"stat-value\">" + (row.count ? fmt.format(row.count) : "…") + "</p>" +
      "<p><span class=\"badge" + (row.live ? " badge-live" : "") + "\">" + status + "</span> · " +
      escapeHtml(row.online) + "</p>" +
      "<p class=\"card-detail\">" + escapeHtml(row.detail || row.seedNote || "") + "</p>" +
      "<div class=\"share-track\" aria-hidden=\"true\"><span style=\"width:" + share + "%\"></span></div>" +
      "<a href=\"" + escapeHtml(href) + "\" target=\"_blank\" rel=\"noopener noreferrer\">Open source<span class=\"sr-only\"> (opens in a new tab)</span></a>";
    host.appendChild(card);
  });

  setText("net-views", fmt.format(filmTotal));
  setText("short-views", fmt.format(shortTotal) + "+");
  setText("all-views", fmt.format(allTotal) + "+");
}

async function loadNetworkViews() {
  renderSources(SOURCES.map(function (s) { return Object.assign({ count: s.seed, live: !!s.live }, s); }));
  const rows = [];
  for (const source of SOURCES) {
    const result = await fetchSourceViews(source);
    rows.push(Object.assign({}, source, result));
    renderSources(rows.concat(
      SOURCES.slice(rows.length).map(function (s) { return Object.assign({ count: s.seed, live: !!s.live }, s); })
    ));
  }
}

function renderTheatres(filter) {
  const host = document.getElementById("theatre-cards");
  if (!host) return;
  host.replaceChildren();
  THEATRES.filter(function (place) {
    return filter === "all" || place.filter === filter;
  }).forEach(function (place) {
    const card = document.createElement(place.local ? "a" : "a");
    card.className = "place-card";
    card.href = place.href;
    if (!place.local) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.innerHTML =
      "<p class=\"card-kicker\">" + escapeHtml(place.kicker) + "</p>" +
      "<h3>" + escapeHtml(place.title) + "</h3>" +
      "<p class=\"card-value\">" + escapeHtml(place.value) + "</p>" +
      "<p class=\"card-detail\">" + escapeHtml(place.detail) + "</p>" +
      "<span class=\"card-link\">" + escapeHtml(place.link) +
      (place.local ? "" : "<span class=\"sr-only\"> (opens in a new tab)</span>") +
      "</span>";
    host.appendChild(card);
  });
}

function bindFilters() {
  const chips = document.querySelectorAll(".chip[data-filter]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (other) {
        const on = other === chip;
        other.classList.toggle("is-on", on);
        other.setAttribute("aria-pressed", on ? "true" : "false");
      });
      renderTheatres(chip.getAttribute("data-filter"));
    });
  });
}

function mountPlayer(start) {
  const lang = currentLang();
  const screen = document.getElementById("cinema-screen");
  const iframe = document.createElement("iframe");
  iframe.id = "player";
  iframe.src = embedUrl(lang, start);
  iframe.title = playerTitle(lang);
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  screen.replaceChildren(iframe);
  document.getElementById("status").textContent =
    lang === "off" ? "Video playing. Subtitles are off." : "Video playing. Subtitles set to " + LANG_NAMES[lang] + ".";
}

function restoreLang() {
  const select = document.getElementById("subtitles");
  const fromUrl = new URLSearchParams(window.location.search).get("subs");
  const stored = window.localStorage.getItem(langKey);
  const next = LANG_NAMES[fromUrl] ? fromUrl : LANG_NAMES[stored] ? stored : "en";
  select.value = next;
}

function rememberLang(lang) {
  try { window.localStorage.setItem(langKey, lang); } catch {}
  const url = new URL(window.location.href);
  if (lang === "en") url.searchParams.delete("subs");
  else url.searchParams.set("subs", lang);
  window.history.replaceState(null, "", url.pathname + url.search + url.hash);
}

function clock(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return String(m) + ":" + String(s).padStart(2, "0");
}

function clipViews(clip) {
  if (clip.views && clip.metric === "likes") return fmt.format(clip.views) + " likes";
  if (clip.views) return fmt.format(clip.views) + " views";
  return clip.viewsNote;
}

function renderReel() {
  const track = document.getElementById("reel-track");
  const cards = document.getElementById("clip-cards");
  if (!track || !cards) return;
  track.replaceChildren();
  cards.replaceChildren();
  SHORT_CLIPS.forEach(function (clip, i) {
    const left = Math.max(2, Math.min(98, (clip.start / FILM_LEN) * 100));
    const mark = document.createElement("button");
    mark.type = "button";
    mark.className = "reel-mark";
    mark.style.left = left + "%";
    mark.setAttribute("role", "listitem");
    mark.setAttribute("aria-label", clip.title + " at " + clock(clip.start));
    mark.textContent = String(i + 1);
    mark.addEventListener("click", function () { selectClip(clip.id, true); });
    track.appendChild(mark);

    const card = document.createElement("article");
    card.className = "source-card";
    card.id = "clip-" + clip.id;
    card.innerHTML =
      "<p class=\"card-kicker\">" + escapeHtml(clip.platform) + " · " + clock(clip.start) + "</p>" +
      "<h3>" + escapeHtml(clip.title) + "</h3>" +
      "<p class=\"stat-value\">" + escapeHtml(clip.views ? (clip.metric === "likes" ? fmt.format(clip.views) : fmt.format(clip.views)) : "Topic") + "</p>" +
      "<p class=\"card-detail\">" + escapeHtml(clipViews(clip)) + "</p>" +
      "<p class=\"card-detail\">" + escapeHtml(clip.detail) + "</p>" +
      "<a href=\"" + escapeHtml(clip.href) + "\" target=\"_blank\" rel=\"noopener noreferrer\">Open shorts<span class=\"sr-only\"> (opens in a new tab)</span></a>";
    const jump = document.createElement("button");
    jump.type = "button";
    jump.className = "cinema-action cinema-action-ghost";
    jump.style.marginTop = "0.4rem";
    jump.textContent = "Jump in film";
    jump.addEventListener("click", function () { selectClip(clip.id, true); });
    card.appendChild(jump);
    cards.appendChild(card);
  });
}

function selectClip(id, play) {
  const clip = SHORT_CLIPS.filter(function (c) { return c.id === id; })[0];
  if (!clip) return;
  document.querySelectorAll(".reel-mark").forEach(function (mark, i) {
    mark.classList.toggle("is-on", SHORT_CLIPS[i] && SHORT_CLIPS[i].id === id);
  });
  const readout = document.getElementById("reel-readout");
  if (readout) {
    readout.textContent = clock(clip.start) + " · " + clip.title + " · " + clipViews(clip);
  }
  const card = document.getElementById("clip-" + id);
  if (card) card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  if (play) mountPlayer(clip.start);
}

restoreLang();
renderTheatres("all");
bindFilters();
renderReel();

document.getElementById("play").addEventListener("click", function () {
  mountPlayer(0);
});

document.getElementById("subtitles").addEventListener("change", function () {
  const lang = currentLang();
  rememberLang(lang);
  const playing = document.getElementById("player");
  if (playing) mountPlayer(0);
  const playBtn = document.getElementById("play");
  if (playBtn) {
    playBtn.setAttribute(
      "aria-label",
      lang === "off" ? "Play Niu Lai, full version, subtitles off" : "Play Niu Lai, full version, subtitles in " + LANG_NAMES[lang]
    );
  }
  const note = document.getElementById("sub-note");
  if (note) {
    if (lang === "off") note.textContent = "Subtitles off. You can still turn them on inside the YouTube player.";
    else if (lang === "en") note.textContent = "English uses the dedicated subtitled upload.";
    else note.textContent = LANG_NAMES[lang] + " captions are requested on the original upload. If that track is missing, use the player caption menu.";
  }
});

document.getElementById("share").addEventListener("click", async function () {
  const url = window.location.href;
  const btn = document.getElementById("share");
  try {
    if (navigator.share) {
      await navigator.share({ title: "Niu Lai Watch Tracker", text: "Theatres, public views, and China tickets since 5 August 2026.", url: url });
      return;
    }
    await navigator.clipboard.writeText(url);
    btn.textContent = "Copied";
    setTimeout(function () { btn.textContent = "Share tracker"; }, 1600);
  } catch (error) {
    if (error && error.name === "AbortError") return;
    try {
      await navigator.clipboard.writeText(url);
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Share tracker"; }, 1600);
    } catch {
      window.prompt("Copy this link", url);
    }
  }
});

function mountTrends() {
  const host = document.getElementById("trends-embed");
  if (!host) return;
  if (window.trends && window.trends.embed && typeof window.trends.embed.renderExploreWidgetTo === "function") {
    window.trends.embed.renderExploreWidgetTo(
      host,
      "TIMESERIES",
      {
        comparisonItem: [{ keyword: "Niu Lai", geo: "", time: "2026-08-05 2026-08-22" }],
        category: 0,
        property: "",
      },
      {
        exploreQuery: "date=2026-08-05%202026-08-22&q=Niu%20Lai&hl=en",
        guestPath: "https://trends.google.com:443/trends/embed/",
      }
    );
    return;
  }
  const frame = document.createElement("iframe");
  frame.title = "Google Trends for Niu Lai";
  frame.src =
    "https://trends.google.com/trends/embed/explore/TIMESERIES?req=" +
    encodeURIComponent(JSON.stringify({
      comparisonItem: [{ keyword: "Niu Lai", geo: "", time: "today 1-m" }],
      category: 0,
      property: "",
    })) +
    "&tz=0";
  frame.loading = "lazy";
  host.replaceChildren(frame);
}

const YUAN_LOW = 2000;
const YUAN_MID = 3000;
const YUAN_HIGH = 8000;
const USD_REPORT_LOW = 200;
const USD_REPORT_HIGH = 7000;
const FX_KEY = "niu-lai-fx";
const FX_URLS = [
  "https://open.er-api.com/v6/latest/USD",
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
];
const CURRENCIES = {
  AED: "United Arab Emirates dirham", AFN: "Afghan afghani", ALL: "Albanian lek",
  AMD: "Armenian dram", ANG: "Netherlands Antillean guilder", AOA: "Angolan kwanza",
  ARS: "Argentine peso", AUD: "Australian dollar", AWG: "Aruban florin",
  AZN: "Azerbaijani manat", BAM: "Bosnia-Herzegovina mark", BBD: "Barbadian dollar",
  BDT: "Bangladeshi taka", BGN: "Bulgarian lev", BHD: "Bahraini dinar",
  BIF: "Burundian franc", BMD: "Bermudian dollar", BND: "Brunei dollar",
  BOB: "Bolivian boliviano", BRL: "Brazilian real", BSD: "Bahamian dollar",
  BTN: "Bhutanese ngultrum", BWP: "Botswana pula", BYN: "Belarusian ruble",
  BZD: "Belize dollar", CAD: "Canadian dollar", CDF: "Congolese franc",
  CHF: "Swiss franc", CLP: "Chilean peso", CNY: "Chinese yuan",
  COP: "Colombian peso", CRC: "Costa Rican colon", CUP: "Cuban peso",
  CVE: "Cape Verdean escudo", CZK: "Czech koruna", DJF: "Djiboutian franc",
  DKK: "Danish krone", DOP: "Dominican peso", DZD: "Algerian dinar",
  EGP: "Egyptian pound", ERN: "Eritrean nakfa", ETB: "Ethiopian birr",
  EUR: "Euro", FJD: "Fijian dollar", FKP: "Falkland Islands pound",
  FOK: "Faroese krona", GBP: "British pound", GEL: "Georgian lari",
  GGP: "Guernsey pound", GHS: "Ghanaian cedi", GIP: "Gibraltar pound",
  GMD: "Gambian dalasi", GNF: "Guinean franc", GTQ: "Guatemalan quetzal",
  GYD: "Guyanese dollar", HKD: "Hong Kong dollar", HNL: "Honduran lempira",
  HRK: "Croatian kuna", HTG: "Haitian gourde", HUF: "Hungarian forint",
  IDR: "Indonesian rupiah", ILS: "Israeli shekel", IMP: "Isle of Man pound",
  INR: "Indian rupee", IQD: "Iraqi dinar", IRR: "Iranian rial",
  ISK: "Icelandic krona", JEP: "Jersey pound", JMD: "Jamaican dollar",
  JOD: "Jordanian dinar", JPY: "Japanese yen", KES: "Kenyan shilling",
  KGS: "Kyrgyzstani som", KHR: "Cambodian riel", KID: "Kiribati dollar",
  KMF: "Comorian franc", KRW: "South Korean won", KWD: "Kuwaiti dinar",
  KYD: "Cayman Islands dollar", KZT: "Kazakhstani tenge", LAK: "Lao kip",
  LBP: "Lebanese pound", LKR: "Sri Lankan rupee", LRD: "Liberian dollar",
  LSL: "Lesotho loti", LYD: "Libyan dinar", MAD: "Moroccan dirham",
  MDL: "Moldovan leu", MGA: "Malagasy ariary", MKD: "Macedonian denar",
  MMK: "Myanmar kyat", MNT: "Mongolian tugrik", MOP: "Macanese pataca",
  MRU: "Mauritanian ouguiya", MUR: "Mauritian rupee", MVR: "Maldivian rufiyaa",
  MWK: "Malawian kwacha", MXN: "Mexican peso", MYR: "Malaysian ringgit",
  MZN: "Mozambican metical", NAD: "Namibian dollar", NGN: "Nigerian naira",
  NIO: "Nicaraguan cordoba", NOK: "Norwegian krone", NPR: "Nepalese rupee",
  NZD: "New Zealand dollar", OMR: "Omani rial", PAB: "Panamanian balboa",
  PEN: "Peruvian sol", PGK: "Papua New Guinean kina", PHP: "Philippine peso",
  PKR: "Pakistani rupee", PLN: "Polish zloty", PYG: "Paraguayan guarani",
  QAR: "Qatari riyal", RON: "Romanian leu", RSD: "Serbian dinar",
  RUB: "Russian ruble", RWF: "Rwandan franc", SAR: "Saudi riyal",
  SBD: "Solomon Islands dollar", SCR: "Seychellois rupee", SDG: "Sudanese pound",
  SEK: "Swedish krona", SGD: "Singapore dollar", SHP: "Saint Helena pound",
  SLE: "Sierra Leonean leone", SLL: "Sierra Leonean leone (old)", SOS: "Somali shilling",
  SRD: "Surinamese dollar", SSP: "South Sudanese pound", STN: "Sao Tome dobra",
  SYP: "Syrian pound", SZL: "Swazi lilangeni", THB: "Thai baht",
  TJS: "Tajikistani somoni", TMT: "Turkmenistani manat", TND: "Tunisian dinar",
  TOP: "Tongan paanga", TRY: "Turkish lira", TTD: "Trinidad and Tobago dollar",
  TVD: "Tuvaluan dollar", TWD: "New Taiwan dollar", TZS: "Tanzanian shilling",
  UAH: "Ukrainian hryvnia", UGX: "Ugandan shilling", USD: "United States dollar",
  UYU: "Uruguayan peso", UZS: "Uzbekistani som", VES: "Venezuelan bolivar",
  VND: "Vietnamese dong", VUV: "Vanuatu vatu", WST: "Samoan tala",
  XAF: "Central African CFA franc", XCD: "East Caribbean dollar", XDR: "IMF special drawing rights",
  XOF: "West African CFA franc", XPF: "CFP franc", YER: "Yemeni rial",
  ZAR: "South African rand", ZMW: "Zambian kwacha", ZWL: "Zimbabwean dollar",
};
const FX_PIN = ["CNY", "USD", "EUR", "GBP", "JPY", "KRW", "SGD", "MYR", "INR", "AUD", "CAD", "HKD", "TWD", "THB", "VND", "IDR", "PHP", "BRL", "MXN", "ZAR"];

let fxRates = { USD: 1, CNY: 7.2 };
let fxReady = false;

function money(amount, code) {
  try {
    return new Intl.NumberFormat("en", { style: "currency", currency: code, maximumFractionDigits: amount >= 100 ? 0 : 2 }).format(amount);
  } catch {
    return fmt.format(Math.round(amount * 100) / 100) + " " + code;
  }
}

function toCurrency(amount, from, code) {
  const src = fxRates[from];
  const dst = fxRates[code];
  if (!src || !dst) return null;
  return amount / src * dst;
}

function fillCurrencySelect(filter) {
  const select = document.getElementById("currency");
  if (!select) return;
  const q = (filter || "").trim().toLowerCase();
  const saved = select.value || localStorage.getItem(FX_KEY) || guessHomeCurrency();
  const codes = Object.keys(CURRENCIES).sort(function (a, b) {
    const pa = FX_PIN.indexOf(a);
    const pb = FX_PIN.indexOf(b);
    if (pa !== -1 || pb !== -1) {
      if (pa === -1) return 1;
      if (pb === -1) return -1;
      return pa - pb;
    }
    return CURRENCIES[a].localeCompare(CURRENCIES[b]);
  }).filter(function (code) {
    if (!q) return true;
    return code.toLowerCase().indexOf(q) !== -1 || CURRENCIES[code].toLowerCase().indexOf(q) !== -1;
  });
  select.replaceChildren();
  codes.forEach(function (code) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = code + " · " + CURRENCIES[code];
    select.appendChild(opt);
  });
  if (CURRENCIES[saved] && (!q || codes.indexOf(saved) !== -1)) select.value = saved;
  else if (codes[0]) select.value = codes[0];
}

function guessHomeCurrency() {
  try {
    const code = new Intl.NumberFormat().resolvedOptions().currency;
    if (code && CURRENCIES[code]) return code;
  } catch {}
  return "USD";
}

function renderCash() {
  const select = document.getElementById("currency");
  const code = select && CURRENCIES[select.value] ? select.value : "USD";
  const yuan = toCurrency(YUAN_MID, "CNY", code);
  const yuanLow = toCurrency(YUAN_LOW, "CNY", code);
  const yuanHigh = toCurrency(YUAN_HIGH, "CNY", code);
  const usdLow = toCurrency(USD_REPORT_LOW, "USD", code);
  const usdHigh = toCurrency(USD_REPORT_HIGH, "USD", code);
  if (yuan == null || usdLow == null) {
    setText("cash-main", "Several thousand yuan");
    setText("cash-range", "About $200 to $7,000");
    setText("cash-detail", "Currency rates are still loading. Wikipedia says several thousand yuan. English recaps often cite $200. Some uploads say about $7,000.");
    return;
  }
  setText("cash-main", money(yuanLow, code) + " to " + money(yuanHigh, code));
  setText("cash-range", money(usdLow, code) + " to " + money(usdHigh, code));
  setText(
    "cash-detail",
    "Several thousand yuan is about " + money(yuan, code) + " in the middle of that range. " +
    "Public dollar reports of $200 to $7,000 convert to the second line. " +
    "Rates are live mid-market, not a bank quote. No outside backers."
  );
}

async function loadRates() {
  for (const url of FX_URLS) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) continue;
      const data = await res.json();
      const raw = data.rates || (data.usd ? data.usd : null);
      if (!raw || typeof raw !== "object") continue;
      const next = { USD: 1 };
      Object.keys(raw).forEach(function (key) {
        const code = key.toUpperCase();
        const n = Number(raw[key]);
        if (CURRENCIES[code] && Number.isFinite(n) && n > 0) next[code] = n;
      });
      if (next.CNY) {
        fxRates = next;
        fxReady = true;
        renderCash();
        return;
      }
    } catch {}
  }
  renderCash();
}

function bindCurrency() {
  const select = document.getElementById("currency");
  const search = document.getElementById("currency-search");
  if (!select) return;
  fillCurrencySelect("");
  const home = localStorage.getItem(FX_KEY) || guessHomeCurrency();
  if (CURRENCIES[home]) select.value = home;
  select.addEventListener("change", function () {
    try { localStorage.setItem(FX_KEY, select.value); } catch {}
    renderCash();
  });
  if (search) {
    search.addEventListener("input", function () {
      fillCurrencySelect(search.value);
      renderCash();
    });
  }
  renderCash();
}

loadPageViews();
loadNetworkViews();
bindCurrency();
loadRates();
window.addEventListener("load", function () {
  window.setTimeout(mountTrends, 400);
});
