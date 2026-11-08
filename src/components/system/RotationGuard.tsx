/**
 * Per-tab site rotation.
 *
 * Load 1 (new tab)  -> device based, decided by middleware (desktop: main, mobile: legacy)
 * Load 2            -> swarm
 * Load 3            -> main
 * Load 4            -> legacy
 * Load 5            -> swarm ... and so on.
 *
 * The counter is per tab (sessionStorage), so a new tab starts again. Because
 * sessionStorage is scoped to one origin, the step is handed to the next host
 * as ?r=<step> and stripped from the address bar on arrival.
 *
 * Runs as a blocking inline script in <head>, before first paint, so the wrong
 * site is never shown. Only the homepage participates; crawlers are skipped so
 * the canonical root keeps serving `main`.
 */
const SCRIPT = `(function () {
  try {
    var path = location.pathname;
    if (path !== "/" && path !== "") return;

    var ua = navigator.userAgent || "";
    if (/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|pinterest|whatsapp|linkedinbot|google-inspectiontool|headlesschrome/i.test(ua)) return;

    var KEY = "__rot";
    var HOSTS = {
      swarm: "https://swarm.jagdishsah.com.np",
      main: "https://jagdishsah.com.np",
      legacy: "https://legacy.jagdishsah.com.np"
    };
    var ORDER = ["swarm", "main", "legacy"];

    var stored = null;
    try { stored = sessionStorage.getItem(KEY); } catch (e) {}

    var params = new URLSearchParams(location.search);
    var fromUrl = params.get("r");
    if (fromUrl !== null && !/^\\d+$/.test(fromUrl)) fromUrl = null;

    var step;
    if (fromUrl !== null) {
      step = parseInt(fromUrl, 10);
    } else if (stored !== null && /^\\d+$/.test(stored)) {
      step = parseInt(stored, 10) + 1;
    } else {
      step = 0;
    }

    try { sessionStorage.setItem(KEY, String(step)); } catch (e) {}

    if (fromUrl !== null) {
      params.delete("r");
      var qs = params.toString();
      try {
        history.replaceState(null, "", path + (qs ? "?" + qs : "") + location.hash);
      } catch (e) {}
    }

    if (step === 0) return;

    var target = HOSTS[ORDER[(step - 1) % 3]];
    if (location.origin !== target) {
      location.replace(target + "/?r=" + step);
    }
  } catch (e) {}
})();`;

export default function RotationGuard() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
