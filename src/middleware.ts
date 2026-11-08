import { NextResponse, type NextRequest } from "next/server";

const LEGACY = "https://legacy.jagdishsah.com.np";

/**
 * Crawlers always get the canonical root, never a redirect. Googlebot
 * Smartphone identifies as mobile; redirecting it would hand legacy's content
 * to mobile-first indexing for the root URL.
 */
const BOT =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|pinterest|whatsapp|linkedinbot|google-inspectiontool|headlesschrome|curl|wget|python-requests|axios|node-fetch|go-http-client/i;

const MOBILE = /android|iphone|ipad|ipod|iemobile|opera mini|mobile|blackberry|webos/i;

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";

  // The rotation sends mobile users back to the root on step 3. Without this
  // guard they would be bounced to legacy again, forever.
  const hasStep = req.nextUrl.searchParams.has("r");

  if (!BOT.test(ua) && !hasStep && MOBILE.test(ua)) {
    const url = new URL(LEGACY + "/");
    url.searchParams.set("r", "0");
    const redirect = NextResponse.redirect(url, 302);
    redirect.headers.set("Vary", "User-Agent");
    redirect.headers.set("Cache-Control", "private, no-store");
    return redirect;
  }

  // The 200 body is byte-identical for every user agent, so it stays cacheable.
  // Only the redirect above varies, and it is marked private/no-store.
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
