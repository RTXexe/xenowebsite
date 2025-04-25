import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TutorialPage() {
  const installationSteps = [
    {
      id: "step-1",
      title: "Download Xeno",
      description: "Get the latest version from our download page",
      content: (
        <div className="space-y-4">
          <p>
            Visit the <Link href="/download" className="text-primary underline">download page</Link> and click on the "Download Now" button to get the latest version of Xeno.
          </p>
          <div className="rounded-md bg-secondary/20 p-3 text-muted-foreground text-sm">
            <strong>Note:</strong> Make sure to temporarily disable your antivirus during installation, as some security software may flag script executors as potentially unwanted programs. Rest assured, Xeno is completely safe and virus-free.
          </div>
        </div>
      )
    },
    {
      id: "step-2",
      title: "Install the Application",
      description: "Run the installer and follow the on-screen instructions",
      content: (
        <div className="space-y-4">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open the downloaded installer file (Xeno_Setup.exe)</li>
            <li>If prompted by Windows Defender, click "More info" and then "Run anyway"</li>
            <li>Choose your installation directory (the default location is recommended)</li>
            <li>Wait for the installation to complete</li>
          </ol>
          <div className="rounded-md bg-secondary/20 p-3 text-muted-foreground text-sm">
            <strong>Tip:</strong> For the best performance, install Xeno on an SSD if available.
          </div>
        </div>
      )
    },
    {
      id: "step-3",
      title: "Launch Xeno",
      description: "Start the application and begin using it",
      content: (
        <div className="space-y-4">
          <p>
            After installation, launch Xeno from your desktop shortcut or the Start menu. When you open Xeno for the first time, you might be prompted to install additional dependencies. Follow the on-screen instructions to complete this process.
          </p>
          <div className="rounded-md bg-secondary/20 p-3 text-muted-foreground text-sm">
            <strong>Note:</strong> Xeno requires administrator privileges to function properly. If prompted, click "Yes" to allow the application to make changes to your device.
          </div>
        </div>
      )
    }
  ];

  const scriptingGuides = [
    {
      id: "basics",
      title: "Scripting Basics",
      description: "Learn the fundamentals of writing scripts in Xeno",
      content: (
        <div className="space-y-4">
          <p>
            Xeno uses Lua as its scripting language. If you're new to Lua, here are some basic concepts to get you started:
          </p>
          <div className="rounded-md bg-card/50 p-4 font-mono text-sm">
            <pre className="whitespace-pre-wrap">
              <code>
                {`-- This is a comment in Lua

-- Variables
local name = "Xeno"
local version = 1.1

-- Conditional statements
if version > 1.0 then
    print("You're running the latest version!")
else
    print("Please update Xeno")
end

-- Functions
local function greet(username)
    return "Hello, " .. username .. "!"
end

print(greet("User"))`}
              </code>
            </pre>
          </div>
          <p>
            For more comprehensive Lua tutorials, check out the resources section at the bottom of this page.
          </p>
        </div>
      )
    },
    {
      id: "advanced",
      title: "Advanced Techniques",
      description: "Take your scripting to the next level",
      content: (
        <div className="space-y-4">
          <p>
            Once you're comfortable with the basics, you can explore these advanced techniques:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Multi-attaching:</strong> Connect to multiple instances simultaneously
            </li>
            <li>
              <strong>API Hooking:</strong> Intercept function calls for more advanced manipulation
            </li>
            <li>
              <strong>Remote Events:</strong> Listen for and trigger events across the network
            </li>
            <li>
              <strong>Memory Reading/Writing:</strong> Access and modify memory values directly
            </li>
          </ul>
          <div className="rounded-md bg-secondary/20 p-3 text-muted-foreground text-sm">
            <strong>Important:</strong> Advanced techniques require a deeper understanding of the underlying systems. Take time to learn and experiment safely.
          </div>
        </div>
      )
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      content: (
        <div className="space-y-4">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Script Execution Failed</h4>
              <p className="text-muted-foreground text-sm mb-2">
                If your script fails to execute, try these solutions:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Check for syntax errors in your script</li>
                <li>Make sure Xeno is properly attached to the client</li>
                <li>Restart Xeno and try again</li>
                <li>Update to the latest version of Xeno</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Attachment Issues</h4>
              <p className="text-muted-foreground text-sm mb-2">
                If Xeno cannot attach to the client:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Verify that the client is running</li>
                <li>Run Xeno as administrator</li>
                <li>Temporarily disable your antivirus or add Xeno to the exceptions list</li>
                <li>Check if there's a version mismatch between Xeno and the client</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Performance Issues</h4>
              <p className="text-muted-foreground text-sm mb-2">
                If you experience lag or freezes:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Optimize your scripts to reduce complexity</li>
                <li>Avoid using too many heavy loops</li>
                <li>Close other resource-intensive applications</li>
                <li>Consider upgrading your hardware if problems persist</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Xeno Help & Tutorials</h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about installing, configuring, and using Xeno.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Tabs defaultValue="installation" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="installation">Installation Guide</TabsTrigger>
                <TabsTrigger value="scripting">Scripting Tutorials</TabsTrigger>
              </TabsList>

              <TabsContent value="installation">
                <div className="space-y-8">
                  <div className="rounded-md bg-primary/5 border border-primary/10 p-4 text-center">
                    <p className="text-sm">
                      Follow these steps to install Xeno on your system. The process usually takes less than 5 minutes.
                    </p>
                  </div>

                  {installationSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {index < installationSteps.length - 1 && (
                        <div className="absolute left-[27px] top-[60px] h-[calc(100%-40px)] w-0.5 bg-border/60" />
                      )}
                      <div className="flex gap-6">
                        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-card shadow-sm">
                          <span className="text-xl font-semibold">{index + 1}</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          <Card className="overflow-hidden">
                            <CardContent className="pt-6">
                              {step.content}
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scripting">
                <div className="space-y-8">
                  {scriptingGuides.map((guide) => (
                    <Card key={guide.id} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>{guide.title}</CardTitle>
                        <CardDescription>{guide.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {guide.content}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="rounded-md bg-secondary/20 p-6">
              <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border/20 rounded-md p-4">
                  <h3 className="font-medium mb-2">Community Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.08984 9.00001C9.32495 8.33167 9.789 7.76811 10.3999 7.40913C11.0108 7.05016 11.7289 6.91894 12.4271 7.03871C13.1254 7.15849 13.7588 7.52152 14.215 8.06353C14.6713 8.60553 14.921 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Link href="https://discord.gg/getxeno" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Join our Discord Community
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Link href="#" className="text-primary hover:underline">
                        Follow us on Twitter
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9 2.10001C6.29997 2.10001 2.59998 5.80001 2.59998 10.4C2.59998 14.4 5.09997 17.7 8.59998 18.6C9.09998 18.7 9.29997 18.4 9.29997 18.1C9.29997 17.8 9.29997 17.3 9.29997 16.6C6.79997 17.1 6.29997 15.5 6.29997 15.5C5.89997 14.6 5.29997 14.3 5.29997 14.3C4.49997 13.8 5.39998 13.8 5.39998 13.8C6.29998 13.9 6.79997 14.7 6.79997 14.7C7.59997 15.9 8.79997 15.5 9.29997 15.2C9.39997 14.7 9.59997 14.3 9.79997 14.1C7.79997 13.9 5.69997 13.2 5.69997 9.80001C5.69997 8.90001 5.99997 8.20001 6.79997 7.60001C6.69997 7.40001 6.39997 6.60001 6.89997 5.50001C6.89997 5.50001 7.69997 5.20001 9.29997 6.30001C9.99997 6.10001 10.7 5.90001 11.4 5.90001C12.1 5.90001 12.8 6.00001 13.5 6.30001C15.1 5.20001 15.9 5.50001 15.9 5.50001C16.4 6.60001 16.1 7.40001 16 7.60001C16.7 8.20001 17 8.90001 17 9.80001C17 13.2 14.9 13.8 12.9 14C13.2 14.3 13.5 14.9 13.5 15.8C13.5 17.1 13.5 17.7 13.5 18.1C13.5 18.4 13.7 18.7 14.2 18.6C17.7 17.7 20.2 14.4 20.2 10.4C20.2 5.80001 16.5 2.10001 11.9 2.10001H10.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Link href="https://github.com/rz-ve" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Check our GitHub
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border border-border/20 rounded-md p-4">
                  <h3 className="font-medium mb-2">Learning Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.25278V19.2528M12 6.25278L6.75 10.0528M12 6.25278L17.25 10.0528M19.5 16.5L18.8986 16.7894C18.1598 17.1401 17.329 17.2528 16.5 17.1151L15.7655 16.9946C14.8109 16.8362 13.8393 16.8362 12.8847 16.9946L11.6345 17.2099C10.7154 17.3582 9.77326 17.3324 8.86802 17.1342L7.77666 16.8932C6.95287 16.7119 6.1031 16.707 5.27719 16.8786L4.5 17.0528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Link href="https://www.lua.org/manual/5.4/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Lua Documentation
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Link href="#" className="text-primary hover:underline">
                        Xeno API Reference
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C10 22 8.31429 21.2357 7.31429 20.1429C6.34286 19.0857 6.34286 17.5429 7.31429 16.4857C8.31429 15.3929 10 13.1429 12 13.1429C14 13.1429 15.6857 15.3929 16.6857 16.4857C17.6571 17.5429 17.6571 19.0857 16.6857 20.1429C15.6857 21.2357 14 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 5L18 4M18 4L17 3M18 4H17M18 4V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Link href="#" className="text-primary hover:underline">
                        Video Tutorials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
