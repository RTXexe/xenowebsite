import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Create mock data with unique IDs for clients
const mockClients = Array.from({ length: 8 }).map((_, i) => ({
  id: `client-${i}`,
  pid: 27508 + i * 1000,
  online: true
}));

// Create mock data with unique IDs for scripts
const mockScripts = [
  { id: "script-1", name: "Dex.lua" },
  { id: "script-2", name: "Infinite Yield.lua" },
  { id: "script-3", name: "Sine Wave.lua" },
  { id: "script-4", name: "Spinning Donut.lua" },
  { id: "script-5", name: "UNCCheckEnv.lua" }
];

export default function HomePage() {
  return (
    <Layout>
      <section className="pt-10 pb-16">
        <div className="container">
          {/* Code Editor Interface */}
          <div className="grid grid-cols-1 gap-6 rounded-lg border border-border/20 bg-card/50 p-1 shadow-lg backdrop-blur-md mb-12">
            <div className="relative rounded-md bg-card/90 overflow-hidden">
              <div className="flex justify-between items-center px-4 py-2 border-b border-border/20">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://ext.same-assets.com/1296868399/3848735716.png"
                    alt="Xeno Editor"
                    width={24}
                    height={24}
                  />
                  <span className="text-sm text-muted-foreground">v1.1.5</span>
                  <span className="text-xs text-muted-foreground">https://xeno.now</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Minimize</span>
                    <span className="block w-4 h-0.5 bg-current" />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Maximize</span>
                    <span className="block w-3 h-3 border border-current" />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Close</span>
                    <span className="block w-3 h-3 relative before:absolute before:w-full before:h-0.5 before:bg-current before:top-1/2 before:-translate-y-1/2 before:rotate-45 after:absolute after:w-full after:h-0.5 after:bg-current after:top-1/2 after:-translate-y-1/2 after:-rotate-45" />
                  </button>
                </div>
              </div>

              <div className="flex h-[400px]">
                {/* Code Editor */}
                <div className="flex-1 p-4 overflow-auto font-mono text-sm">
                  <div className="flex items-center gap-3 mb-4 border-b border-border/20 pb-2">
                    <button className="px-3 py-1 text-xs rounded bg-secondary/50 text-muted-foreground">IV</button>
                    <button className="px-3 py-1 text-xs rounded hover:bg-secondary/30 text-muted-foreground">Fetch</button>
                    <button className="px-3 py-1 text-xs rounded hover:bg-secondary/30 text-muted-foreground">MM2</button>
                    <button className="px-3 py-1 text-xs rounded hover:bg-secondary/30 text-muted-foreground">Test</button>
                    <button className="px-3 py-1 text-xs rounded hover:bg-secondary/30 text-muted-foreground">Tab 5</button>
                    <button className="px-2 py-1 text-xs rounded hover:bg-secondary/30 text-muted-foreground">+</button>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-x-4">
                    <div className="text-muted-foreground text-right">
                      <div>9016</div>
                      <div>9017</div>
                      <div>9018</div>
                      <div>9019</div>
                      <div>9020</div>
                      <div>9021</div>
                      <div>9022</div>
                      <div>9023</div>
                      <div>9024</div>
                      <div>9025</div>
                    </div>
                    <div>
                      <div><span className="text-[#905a6a]">addcmd</span>(<span className="text-[#73a392]">"pathfindwalktopoint"</span>,{<span className="text-[#73a392]">"pathfindwalkto"</span>},<span className="text-[#905a6a]">function</span>(args, speaker)</div>
                      <div>    waypointwalkto = <span className="text-[#905a6a]">false</span></div>
                      <div>    <span className="text-[#905a6a]">wait</span>()</div>
                      <div>    <span className="text-[#905a6a]">local</span> WPName = <span className="text-[#905a6a]">tostring</span>(<span className="text-[#905a6a]">getstring</span>(1))</div>
                      <div>    <span className="text-[#905a6a]">local</span> hum = Players.LocalPlayer.Character:<span className="text-[#905a6a]">FindFirstChildOfClass</span>(<span className="text-[#73a392]">"Humanoid"</span>)</div>
                      <div>    <span className="text-[#905a6a]">local</span> path = PathService:CreatePath()</div>
                      <div>    <span className="text-[#905a6a]">if</span> speaker.Character <span className="text-[#905a6a]">then</span></div>
                      <div>        <span className="text-[#905a6a]">for</span> i_, <span className="text-[#905a6a]">in</span> <span className="text-[#905a6a]">pairs</span>(WayPoints) <span className="text-[#905a6a]">do</span></div>
                      <div>            <span className="text-[#905a6a]">if</span> <span className="text-[#905a6a]">tostring</span>(WayPoints[i_].NAME):<span className="text-[#905a6a]">lower</span>() == <span className="text-[#905a6a]">tostring</span>(WPName):<span className="text-[#905a6a]">lower</span>() <span className="text-[#905a6a]">then</span></div>
                      <div>                <span className="text-[#905a6a]">if</span> speaker.Character:<span className="text-[#905a6a]">FindFirstChildOfClass</span>(<span className="text-[#73a392]">"Humanoid"</span>) <span className="text-[#905a6a]">and</span> speaker.Character:<span className="text-[#905a6a]">FindFirstChildOfClass</span>(<span className="text-[#73a392]">"Humanoid"</span>).Sit == <span className="text-[#905a6a]">true</span> <span className="text-[#905a6a]">then</span></div>
                    </div>
                  </div>
                </div>

                {/* Clients Panel */}
                <div className="w-80 border-l border-border/20 bg-card/70 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Clients</h3>
                    <button className="text-muted-foreground hover:text-foreground">
                      <span className="sr-only">Close</span>
                      <span className="block w-3 h-3 relative before:absolute before:w-full before:h-0.5 before:bg-current before:top-1/2 before:-translate-y-1/2 before:rotate-45 after:absolute after:w-full after:h-0.5 after:bg-current after:top-1/2 after:-translate-y-1/2 after:-rotate-45" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {mockClients.map((client) => (
                      <div key={client.id} className="flex items-center gap-2 p-1.5 rounded hover:bg-secondary/30">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="w-4 h-4 rounded-sm bg-secondary/40" />
                        <span className="text-xs line-clamp-1">| PID: {client.pid}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium">Scripts</h3>
                      <button className="text-xs text-muted-foreground hover:text-foreground bg-secondary/40 rounded px-2 py-0.5">
                        Open Folder
                      </button>
                      <button className="text-muted-foreground hover:text-foreground">
                        <span className="sr-only">Close</span>
                        <span className="block w-3 h-3 relative before:absolute before:w-full before:h-0.5 before:bg-current before:top-1/2 before:-translate-y-1/2 before:rotate-45 after:absolute after:w-full after:h-0.5 after:bg-current after:top-1/2 after:-translate-y-1/2 after:-rotate-45" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {mockScripts.map((script) => (
                        <div key={script.id} className="flex justify-between items-center p-1.5 rounded hover:bg-secondary/30">
                          <span className="text-xs">{script.name}</span>
                          <button className="text-xs text-muted-foreground hover:text-foreground bg-secondary/40 rounded px-2 py-0.5">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex border-t border-border/20 p-1.5 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded hover:bg-secondary/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="p-1 rounded hover:bg-secondary/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 11H4C2.89543 11 2 11.8954 2 13V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V13C22 11.8954 21.1046 11 20 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11V7C7 5.93913 7.42143 4.92172 8.17157 4.17157C8.92172 3.42143 9.93913 3 11 3H13C14.0609 3 15.0783 3.42143 15.8284 4.17157C16.5786 4.92172 17 5.93913 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <Link href="/download" className="inline-flex h-11 items-center justify-center rounded-md bg-card px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Now
            </Link>
            <Link href="/tutorial" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-transparent px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Help & Tutorial
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="border border-border/20 rounded-lg bg-card/50 px-6">
                <AccordionTrigger className="text-base font-medium py-5">Is Xeno Safe?</AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  Yes, Xeno is completely safe to use. Our code is reviewed regularly and we maintain a strict security protocol. We do not collect any personal information beyond what is necessary for the application to function properly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/20 rounded-lg bg-card/50 px-6">
                <AccordionTrigger className="text-base font-medium py-5">Can I get banned with Xeno?</AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  While we design Xeno to be as safe as possible, any third-party tool carries some risk. We recommend using Xeno responsibly and avoid using it for activities that violate terms of service of applications you're working with.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/20 rounded-lg bg-card/50 px-6">
                <AccordionTrigger className="text-base font-medium py-5">How often does Xeno update?</AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  Xeno is regularly updated to ensure compatibility with the latest software versions and to add new features. We typically release updates every 2-4 weeks, with critical security updates being released as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
