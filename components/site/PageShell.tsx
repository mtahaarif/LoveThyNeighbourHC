import Enhancers from './Enhancers';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout-201-f-1-d-25-d-34-d-4-def-989-b-d-58-b-9-bdac-5-c-9" className="layout layout-layout layout-layout-layout-13 locale-en-PH lang-en">
      <div data-ux="Page" id="page-u1" className="x-el x-el-div gblnuxzq gcyjxnld gdyvsvip gfparv8j giffmze9 gk6gcw7u gltketef glzkfomy gnrbup65 gr1xwajw gslbjjyr guljl5sn gy2fy455 gyebw4d9 gyylpd4a gzr1rehh">
        <div data-ux="Block" className="x-el x-el-div page-inner gblnuxzq gcyjxnld gdyvsvip giffmze9 glzkfomy gr1xwajw gyebw4d9 gyylpd4a">
          {children}
        </div>
      </div>
      <Enhancers />
    </div>
  );
}
