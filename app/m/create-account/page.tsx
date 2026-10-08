import type { Metadata } from 'next';
import Link from 'next/link';
import CookieBanner from '@/components/site/CookieBanner';
import Footer from '@/components/site/Footer';
import PageShell from '@/components/site/PageShell';
import SiteHeader from '@/components/site/SiteHeader';

export const metadata: Metadata = {
  "title": "Create Account",
  "openGraph": {
    "url": "/m/create-account",
    "siteName": "lovethyneighborhhc.com",
    "title": "lovethyneighborhhc.com",
    "type": "website",
    "images": [
      {
        "url": "/assets/images/______-5-dcd9cfb.jpg"
      }
    ],
    "locale": "en_PH"
  },
  "twitter": {
    "card": "summary",
    "title": "lovethyneighborhhc.com",
    "images": [
      {
        "url": "/assets/images/______-5-dcd9cfb.jpg",
        "alt": "lovethyneighborhhc.com"
      }
    ]
  }
};

export default function Page() {
  return (
    <PageShell>
      <SiteHeader path="/m/create-account" />
      <div id="31f0b9ae-8a99-4ac7-9056-b342e4872810" className="widget widget-membership widget-membership-create-account">
        <section data-ux="Section" className="x-el x-el-section gblnuxzq gcyjxnld gdyvsvip gf8xcobr gfnbvv2p giffmze9 glclw9ha glzkfomy gnvdvwno gr1xwajw gwpqohlt gyebw4d9 gyylpd4a">
          <div data-ux="Element" id="bs-9" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
            <span data-ux="Element" className="x-el x-el-span gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
              <div data-ux="Container" className="x-el x-el-div g3hb4mzh g9ycfsop gblnuxzq gbwjnawg gcyjxnld gdyvsvip ge0ritk7 ghedfzzs giffmze9 glzkfomy gokvceh9 gooiuydg gr1xwajw guxlb3uo gxaeiezy gyebw4d9 gyylpd4a">
                <h1 role="heading" data-ux="SectionHeading" data-aid="CREATE_ACCOUNT_HEADING_REND" data-promoted-from="2" data-typography="HeadingBeta" className="x-el x-el-h1 g0czjxye g8dsbrgp g8n4emmm ga4amxln ghedfzzs gigxinfv gjbvw8sr go3qeaqy go5sy3vz gpvkatrh gr1xwajw gvwwp2na gw64x8ni gwldylgr gwnjesmk gxg8ykvu gyebw4d9 gygjgilu gzfb89wh" aria-level={1}>
                  <span data-ux="Element" className="x-el x-el-span g2cr1sr7 ge7paz8d gngefaon gunkxpgl gxnan3jj">
                    {"Create Account"}
                  </span>
                  <div data-ux="Block" className="x-el x-el-div g8n4emmm ga4amxln go3qeaqy gpwgrpeg gw64x8ni gxg8ykvu gy2fy455 gygjgilu">
                    <hr aria-hidden="true" role="separator" data-ux="SectionHeadingHR" className="x-el x-el-hr g4zwumuk g6p3hfgc g8n4emmm ga4amxln gfv11svz gmdltzsl go3qeaqy gpfcnvdd gu1e3gcx gw64x8ni gxg8ykvu gxzwqjso gygjgilu" />
                  </div>
                </h1>
                <div data-ux="Grid" className="x-el x-el-div g3pnrnpf g8dsbrgp gblnuxzq gcgyzv5j gcyjxnld gdbopyva gdyvsvip giffmze9 gjux6r9i glzkfomy gm6f2fb2 gnwpol33 gqjsadva gr1xwajw gssyr9mu gx1oanxn gxl4udrf gyebw4d9 gyylpd4a gzmoxvgu">
                  <div data-ux="GridCell" className="x-el x-el-div g7wczdp2 g9pcvvgf gaschfuk gbfvrrpd gblnuxzq gbolxo0z gcxmumxe gcyjxnld gdbopyva gdyvsvip ge0ritk7 gebocsn8 geht787p gfap9ndo giffmze9 glh7booc glzkfomy gmuwzqkn gomkzznw gppf1f7l gr1xwajw grbhvz02 gy3folbh gyebw4d9 gyylpd4a gzqzuuvj gzzhjpog">
                    <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a gzfb89wh">
                      <p data-ux="Text" data-aid="CREATE_ACCOUNT_DESCRIPTION_REND" data-typography="BodyAlpha" className="x-el x-el-p g0czjxye g6p3hfgc g8dsbrgp gblnuxzq gcyjxnld gdyvsvip giffmze9 giog2xmp glzkfomy gr1xwajw gvwwp2na gwhqo0um gyebw4d9 gyylpd4a gzftwjlv">
                        {"By creating an account, you may receive newsletters or promotions."}
                      </p>
                    </div>
                    <form aria-live="polite" data-ux="Form" action="/m/reset" method="post" data-aid="CREATE_ACCOUNT_FORM_REND" className="x-el x-el-form g6p3hfgc gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="text" name="nameFirst" placeholder="First name" data-aid="CREATE_ACCOUNT_NAME_FIRST" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" defaultValue="" />
                      </div>
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="text" name="nameLast" placeholder="Last name" data-aid="CREATE_ACCOUNT_NAME_LAST" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" defaultValue="" />
                      </div>
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="text" name="email" placeholder="Email" data-aid="CREATE_ACCOUNT_EMAIL" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" defaultValue="" />
                      </div>
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="text" name="phone" placeholder="Phone (optional)" data-aid="CREATE_ACCOUNT_PHONE" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" defaultValue="" />
                      </div>
                      <div data-ux="Block" className="x-el x-el-div g4hgehdo g4w6uuuw gdyvsvip ghd4b1kk gr1xwajw gr3obihu gyebw4d9">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="text" autoComplete="off" name="beacon" data-aid="CREATE_ACCOUNT_BEACON" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv g4w6uuuw gak7k8pc gan91leb gbaew3k3 gdj0mabf gdlgaih2 gdyvsvip gfii1nh2 gfnsgd2s gigxinfv gj0l5sab glh7booc gmhtetjo go1hewcp goqxuqpg gpckc3en gr1xwajw grscn4hb gtmijdfz gv7tilis gwvehfsz gxzwqjso gy1xyh6p gyebw4d9 gylz2mx1 gyuog8fd" />
                      </div>
                      <div data-ux="Block" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a gzfb89wh">
                        <button data-ux-btn="primary" data-ux="ButtonPrimary" data-typography="ButtonAlpha" className="x-el x-el-button g8lsb305 gabgnkfo gabkhud7 gc8p6bfo gd9f0nfo gdn7vmi4 gdxbmhsb gdyvsvip ge0ritk7 gficukn3 ghkcz1hx gij7bgfh gk6gcw7u glln3z9t gp9bmjr8 gpmzbjfg gpuvsyr4 gpzfz3md grs3kn0o grsggmfi gt7051bo gteikabs gtvghkoa gucozvlo gulfcfyf gv7tilis gvwwp2na gxfiv3e9 gy2fy455 gy4pn5qw gz1fupps gzfb89wh">
                          {"Create Account"}
                        </button>
                      </div>
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a gzfb89wh">
                        <p data-ux="Text" data-typography="BodyAlpha" className="x-el x-el-p g0czjxye g6p3hfgc g8dsbrgp gblnuxzq gcyjxnld gdyvsvip giffmze9 giog2xmp glzkfomy gr1xwajw gvwwp2na gwhqo0um gyebw4d9 gyylpd4a gzftwjlv">
                          {"Already have an account? "}
                          <Link rel="" role="link" aria-haspopup="false" data-ux="Link" href="/m/login" data-typography="LinkAlpha" className="x-el x-el-a g4dkhcuy g5n7thga gbceae62 gblnuxzq gcyjxnld gdxbmhsb gdyvsvip giffmze9 gigxinfv gkzrqu2q glzkfomy gpuvsyr4 grb0zxfx gvwwp2na gwksesry gyylpd4a">
                            {"Sign in"}
                          </Link>
                        </p>
                      </div>
                      <div data-ux="Block" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a" />
                      <div data-ux="Block" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <p data-ux="Text" data-typography="BodyAlpha" className="x-el x-el-p g0czjxye g6p3hfgc g8dsbrgp gblnuxzq gcyjxnld gdyvsvip giffmze9 giog2xmp glzkfomy gr1xwajw gvwwp2na gwhqo0um gyebw4d9 gyylpd4a gzftwjlv">
                          {"This site is protected by reCAPTCHA and the Google "}
                          <a rel="" role="link" aria-haspopup="false" data-ux="Link" href="https://policies.google.com/privacy" data-typography="LinkAlpha" className="x-el x-el-a g4dkhcuy g5n7thga gbceae62 gblnuxzq gcyjxnld gdxbmhsb gdyvsvip giffmze9 gigxinfv gkzrqu2q glzkfomy gpuvsyr4 grb0zxfx gvwwp2na gwksesry gyylpd4a">
                            {"Privacy Policy"}
                          </a>
                          {" and "}
                          <a rel="" role="link" aria-haspopup="false" data-ux="Link" href="https://policies.google.com/terms" data-typography="LinkAlpha" className="x-el x-el-a g4dkhcuy g5n7thga gbceae62 gblnuxzq gcyjxnld gdxbmhsb gdyvsvip giffmze9 gigxinfv gkzrqu2q glzkfomy gpuvsyr4 grb0zxfx gvwwp2na gwksesry gyylpd4a">
                            {"Terms of Service"}
                          </a>
                          {" apply."}
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </section>
      </div>
      <Footer />
      <div id="580074ac-e6cd-4405-8831-00bbf462f97a" className="widget widget-messaging widget-messaging-messaging-1">
        <div data-ux="Element" id="bs-u12" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
          <span data-ux="Element" className="x-el x-el-span gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
            <div data-ux="Block" className="x-el x-el-div g9s5kbrx gblnuxzq gc5listd gcyjxnld gdvejhly gdyvsvip giffmze9 gl84owbc glzkfomy gm5rc0nd gmmx7zqh gr1xwajw gv60jas9 gyebw4d9 gyylpd4a">
              <div>
                <div />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div id="80f4084f-618c-402d-aa43-044dbefe795a" className="widget widget-popup widget-popup-popup-1" />
      <div id="9e65371f-f167-42fb-84f1-f53de633d681" className="widget widget-trustedsite widget-trustedsite-trusted-site-1" />
      <CookieBanner />
    </PageShell>
  );
}
