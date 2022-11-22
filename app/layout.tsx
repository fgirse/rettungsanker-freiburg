import '#/styles/globals.css';
import  { AddressBar }  from '#/ui/AddressBar';
import  { InfoBar }  from '#/ui/InfoBar';
import { GlobalNav } from '#/ui/GlobalNav';
import { VercelLogo } from '#/ui/VercelLogo';
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <Head />
      <body className="overflow-y-scroll bg-slate-600 bg-[url('/grid.svg')]">
        <GlobalNav />

        <div className="lg:pl-0">
          <div className="mx-auto max-w-9xl space-y-8 px-2 pt-20 lg:py-0 lg:px-0">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-slate-700">
                <AddressBar />
               

              </div>
              <InfoBar />
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-slate-800 p-3.5 lg:p-0">{children}</div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-green-200">
                <Byline />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function Byline() {
  return (
    <div className="flex items-center justify-between space-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center space-x-1.5">
        <div className="text-sm text-gray-600">By</div>
        <a href="https://vercel.com" title="Vercel">
          <div className="w-16 text-gray-300 hover:text-gray-50">
            <VercelLogo />
          </div>
        </a>
      </div>

      <div className="text-sm text-gray-600">
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://github.com/vercel/app-playground"
        >
          View code
        </a>
        {' or '}
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://vercel.com/templates/next.js/app-directory"
        >
          deploy your own
        </a>
      </div>
    </div>
  );
}
