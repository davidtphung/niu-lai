const VIDEO_ID = "NDOqyb5VSdA";
const POSTER_HQ = "https://i.ytimg.com/vi/" + VIDEO_ID + "/hqdefault.jpg";
const EMBED = "https://www.youtube.com/embed/" + VIDEO_ID + "?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=1&cc_lang_pref=en";
const VIEWS = "https://api.counterapi.dev/v1/niulai/watch";
const seenKey = "niu-lai-viewed";

const poster = document.getElementById("poster");
poster.addEventListener("error", function () {
  if (poster.src !== POSTER_HQ) poster.src = POSTER_HQ;
});

async function loadViews(increment) {
  const flag = sessionStorage.getItem(seenKey) === "1";
  const url = increment && !flag ? VIEWS + "/up" : VIEWS;
  if (increment && !flag) sessionStorage.setItem(seenKey, "1");
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) return;
    const data = await res.json();
    const n = Number(data.count ?? data.value);
    if (Number.isFinite(n)) {
      document.getElementById("views").textContent = new Intl.NumberFormat("en-US").format(n);
    }
  } catch {}
}
loadViews(true);

document.getElementById("play").addEventListener("click", function () {
  const screen = document.getElementById("cinema-screen");
  const iframe = document.createElement("iframe");
  iframe.src = EMBED;
  iframe.title = "Niu Lai, full version, English subtitles. English captions are available in the player.";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  screen.replaceChildren(iframe);
  document.getElementById("status").textContent = "Video playing. English captions are available in the player.";
});

document.getElementById("share").addEventListener("click", async function () {
  const url = window.location.href;
  const btn = document.getElementById("share");
  try {
    if (navigator.share) {
      await navigator.share({ title: "Niu Lai", text: "Full version \u00b7 English subtitles", url: url });
      return;
    }
    await navigator.clipboard.writeText(url);
    btn.textContent = "Copied";
    setTimeout(function () { btn.textContent = "Share"; }, 1600);
  } catch (error) {
    if (error && error.name === "AbortError") return;
    try {
      await navigator.clipboard.writeText(url);
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Share"; }, 1600);
    } catch {
      window.prompt("Copy this link", url);
    }
  }
});
