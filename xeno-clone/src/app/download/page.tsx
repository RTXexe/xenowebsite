import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DownloadPage() {
  const features = [
    {
      id: "community",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Good Community",
      description: "Join our growing community"
    },
    {
      id: "multi-attach",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
          <path d="M16 8V16M12 11V16M8 14V16M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Multi Attach",
      description: "Attach to multiple Clients at once"
    },
    {
      id: "performance",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Performance",
      description: "Run scripts with high speed"
    }
  ];

  const updates = [
    { id: "update-1", text: "Added online script execution (https://xeno.now/executor)" },
    { id: "update-2", text: "Fixed cache system initializing same clients multiple times" },
    { id: "update-3", text: "Fixed Failing to get RenderView when Roblox recently started" },
    { id: "update-4", text: "Fixed Xeno stuck in \"Waiting for DataModel\"" },
    { id: "update-5", text: "Fixed script compiler error handling" }
  ];

  return (
    <Layout>
      <section className="pt-10 pb-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Download Xeno</h1>
            <p className="text-muted-foreground text-lg">Experience the next generation of scripting</p>
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 gap-8 p-8 rounded-lg border border-border/20 bg-card/50 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-6 mb-6">
                <Image
                  src="https://ext.same-assets.com/1296868399/1388939149.png"
                  alt="Xeno"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold">Xeno 1.1.65</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Latest Release</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <Card key={feature.id} className="bg-secondary/20 border-border/20">
                    <CardHeader className="pb-2">
                      <div className="text-primary mb-2">{feature.icon}</div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                <Link
                  href="/download/step1"
                  className="inline-flex items-center justify-center h-11 px-6 py-3 rounded-md bg-card/80 text-sm font-medium shadow transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download Now
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Card className="h-full bg-card/50 border-border/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <CardTitle>Latest Updates</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {updates.map((update) => (
                        <div key={update.id} className="rounded-md bg-secondary/20 p-3 text-sm">
                          {update.text}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-2">
                <Card className="h-full bg-card/50 border-border/20">
                  <CardHeader>
                    <CardTitle>System Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-medium mb-2">Minimum Requirements</h3>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Windows 10/11 (64-bit)</li>
                            <li>4GB RAM</li>
                            <li>Intel Core i3 or equivalent</li>
                            <li>.NET Framework 4.7.2 or later</li>
                            <li>DirectX 11 compatible graphics</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Recommended</h3>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Windows 10/11 (64-bit)</li>
                            <li>8GB RAM</li>
                            <li>Intel Core i5 or equivalent</li>
                            <li>.NET Framework 4.8 or later</li>
                            <li>SSD for faster loading</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/20">
                        <h3 className="font-medium mb-2">Installation Notes</h3>
                        <p className="text-sm text-muted-foreground">
                          You may need to temporarily disable your antivirus software during installation as some antivirus programs flag script executors as potentially unwanted programs. We ensure Xeno is completely safe and virus-free.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
