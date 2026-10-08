import type { Metadata } from 'next';

import Footer from '@/components/site/Footer';
import PageShell from '@/components/site/PageShell';
import SiteHeader from '@/components/site/SiteHeader';

export const metadata: Metadata = {
  "title": "Set your password",
  "openGraph": {
    "url": "/m/create",
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
      <SiteHeader path="/m/create" />
      <div id="5159c760-c044-4ece-b190-575ad595fff1" className="widget widget-membership widget-membership-create-password">
        <section data-ux="Section" className="x-el x-el-section gblnuxzq gcyjxnld gdyvsvip gf8xcobr gfnbvv2p giffmze9 glclw9ha glzkfomy gnvdvwno gr1xwajw gwpqohlt gyebw4d9 gyylpd4a">
          <div data-ux="Element" id="bs-9" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
            <span data-ux="Element" className="x-el x-el-span gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
              <div data-ux="Container" className="x-el x-el-div g3hb4mzh g9ycfsop gblnuxzq gbwjnawg gcyjxnld gdyvsvip ge0ritk7 ghedfzzs giffmze9 glzkfomy gokvceh9 gooiuydg gr1xwajw guxlb3uo gxaeiezy gyebw4d9 gyylpd4a">
                <h2 role="heading" data-ux="SectionHeading" data-aid="PASSWORD_CREATE_TITLE_REND" data-typography="HeadingBeta" className="x-el x-el-h2 g0czjxye g8dsbrgp g8n4emmm ga4amxln ghedfzzs gigxinfv gjbvw8sr go3qeaqy go5sy3vz gpvkatrh gr1xwajw gvwwp2na gw64x8ni gwldylgr gwnjesmk gxg8ykvu gyebw4d9 gygjgilu gzfb89wh" aria-level={2}>
                  <span data-ux="Element" className="x-el x-el-span g2cr1sr7 ge7paz8d gngefaon gunkxpgl gxnan3jj">
                    {"Set Password"}
                  </span>
                  <div data-ux="Block" className="x-el x-el-div g8n4emmm ga4amxln go3qeaqy gpwgrpeg gw64x8ni gxg8ykvu gy2fy455 gygjgilu">
                    <hr aria-hidden="true" role="separator" data-ux="SectionHeadingHR" className="x-el x-el-hr g4zwumuk g6p3hfgc g8n4emmm ga4amxln gfv11svz gmdltzsl go3qeaqy gpfcnvdd gu1e3gcx gw64x8ni gxg8ykvu gxzwqjso gygjgilu" />
                  </div>
                </h2>
                <div data-ux="Grid" className="x-el x-el-div g3pnrnpf g8dsbrgp gblnuxzq gcgyzv5j gcyjxnld gdbopyva gdyvsvip giffmze9 gjux6r9i glzkfomy gm6f2fb2 gnwpol33 gqjsadva gr1xwajw gssyr9mu gx1oanxn gxl4udrf gyebw4d9 gyylpd4a gzmoxvgu">
                  <div data-ux="GridCell" className="x-el x-el-div g7wczdp2 g9pcvvgf gaschfuk gbfvrrpd gblnuxzq gbolxo0z gcxmumxe gcyjxnld gdbopyva gdyvsvip ge0ritk7 gebocsn8 geht787p gfap9ndo giffmze9 glh7booc glzkfomy gmuwzqkn gomkzznw gppf1f7l gr1xwajw grbhvz02 gy3folbh gyebw4d9 gyylpd4a gzqzuuvj gzzhjpog">
                    <p data-ux="Text" data-aid="PASSWORD_CREATE_MESSAGE_REND" data-typography="BodyAlpha" className="x-el x-el-p g0czjxye g8dsbrgp g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 giog2xmp glzkfomy gr1xwajw gvwwp2na gwhqo0um gyebw4d9 gyylpd4a gzfb89wh gzftwjlv">
                      {"You're signing in for the first time as , so you need to set a password."}
                    </p>
                    <form aria-live="polite" data-ux="Form" action="/m/create" method="post" data-aid="PASSWORD_CREATE_FORM_REND" className="x-el x-el-form g6p3hfgc gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="password" name="password" placeholder="Password" aria-label="Password" data-aid="PASSWORD_CREATE_PW_INPUT_REND" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" />
                      </div>
                      <div data-ux="Block" className="x-el x-el-div g8lsb305 gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
                        <input role="textbox" aria-multiline="false" data-ux="Input" type="password" name="confirmPassword" autoComplete="new-password" placeholder="Confirm password" aria-label="Confirm password" data-aid="PASSWORD_CREATE_CONFIRM_REND" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" />
                      </div>
                      <input role="textbox" aria-multiline="false" data-ux="Input" type="hidden" name="contactId" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" value="" />
                      <input role="textbox" aria-multiline="false" data-ux="Input" type="hidden" name="redirect" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" value="" />
                      <input role="textbox" aria-multiline="false" data-ux="Input" type="hidden" name="app" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" value="website" />
                      <input role="textbox" aria-multiline="false" data-ux="Input" type="hidden" name="token" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" value="" />
                      <input role="textbox" aria-multiline="false" data-ux="Input" type="hidden" name="email" data-typography="InputAlpha" className="x-el x-el-input g0czjxye g37vqwdv gan91leb gbaew3k3 gblnuxzq gcyjxnld gdj0mabf gdyvsvip gfii1nh2 gfnsgd2s gh5emvec giffmze9 gigxinfv gj0l5sab glv4ljtc glzkfomy gn9sr22y gr1xwajw grscn4hb gtmijdfz gv7tilis gvi2zpsd gxzwqjso gy1xyh6p gy2fy455 gyebw4d9 gyuog8fd gyylpd4a" value="" />
                      <div data-ux="Block" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a gzfb89wh">
                        <button data-ux-btn="primary" data-ux="ButtonPrimary" type="submit" data-aid="PASSWORD_CREATE_SUBMIT_REND" data-typography="ButtonAlpha" className="x-el x-el-button g8lsb305 gabgnkfo gabkhud7 gc8p6bfo gd9f0nfo gdn7vmi4 gdxbmhsb gdyvsvip ge0ritk7 gficukn3 ghkcz1hx gij7bgfh gk6gcw7u glln3z9t gp9bmjr8 gpmzbjfg gpuvsyr4 gpzfz3md grs3kn0o grsggmfi gt7051bo gteikabs gtvghkoa gucozvlo gulfcfyf gv7tilis gvwwp2na gxfiv3e9 gy2fy455 gy4pn5qw gz1fupps gzfb89wh">
                          {"Set Password"}
                        </button>
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
      <div id="d7f453d2-1027-4580-a2ed-b6390769610c" className="widget widget-cookie-banner widget-cookie-banner-cookie-1">
        <div data-ux="Group" data-aid="FOOTER_COOKIE_BANNER_RENDERED" id="d7f453d2-1027-4580-a2ed-b6390769610c-banner" className="x-el x-el-div g3kaldjn g61g1whc g6p3hfgc g8dsbrgp g9ycfsop gblnuxzq gcfg1dx5 gcyjxnld gd7q6xzr gdyvsvip gershnun ggr6uzwi ghg5ywar giffmze9 gjdrmre6 gjmmmsnn gklt6cf0 gl12dpyq gllgivmh glzkfomy gmmx7zqh gmuwzqkn gnkxjbas gp0h1gzr gpud7lhe gr1xwajw gtqgczps gwakwoqb gwnjesmk gwpqohlt gxaeiezy gxq081ev gy2fy455 gyebw4d9 gyosvwfv gyylpd4a gzsrzq72" style={{ transform: "translateY(-500px)" }}>
          <h1 role="heading" data-ux="Heading" data-aid="FOOTER_COOKIE_TITLE_RENDERED" data-promoted-from="4" data-order="0" data-typography="HeadingDelta" className="x-el x-el-h1 g0czjxye g61g1whc g6p3hfgc g8dsbrgp gdyvsvip gefyfp8u gficukn3 gigxinfv gmsdlrrk gpnjfd5l gr1xwajw gvroqs6p gvwwp2na gw0qdwgc gwnjesmk gxpm7wpm gyebw4d9" aria-level={1}>
            {"This website uses cookies."}
          </h1>
          <div data-ux="Text" data-aid="FOOTER_COOKIE_MESSAGE_RENDERED" data-typography="BodyAlpha" className="x-el x-rt g0czjxye g6p3hfgc g8dsbrgp g8qts3la gblnuxzq gcyjxnld gdyvsvip ggceylv3 giffmze9 giog2xmp glzkfomy gr1xwajw gvwwp2na gwhqo0um gyebw4d9 gyosvwfv gyylpd4a gzftwjlv">
            <p style={{ margin: "0" }}>
              <span>
                {"We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data."}
              </span>
            </p>
          </div>
          <div data-ux="Block" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gssyr9mu guzpaoro gyebw4d9 gyylpd4a">
            <a data-ux-btn="primary" data-ux="ButtonPrimary" href="" data-aid="FOOTER_COOKIE_CLOSE_RENDERED" id="d7f453d2-1027-4580-a2ed-b6390769610c-accept" data-typography="ButtonAlpha" className="x-el x-el-a gabkhud7 gc25w6jt gcyzt1ma gd9f0nfo gdn7vmi4 gdxbmhsb gdyvsvip ge0ritk7 gfap9ndo ggrjhggr gh3pvjpg ghkcz1hx gij7bgfh gk6gcw7u gleblcrf glfwnk8p glv4ljtc glvlafdj gn9sr22y gnykkove go5v2jgq gpfcnvdd gpmzbjfg gpuvsyr4 gqmkznvt grsggmfi gssyr9mu gt7051bo gtvghkoa gv7tilis gvwwp2na gwgm2qcv gxfiv3e9 gy2fy455 gy43mjvb gy4pn5qw gzfb89wh gzh6lzhh">
              {"Accept"}
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
