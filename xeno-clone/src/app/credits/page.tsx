import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Mock team members data
const teamMembers = [
  {
    id: "1",
    name: "AstralDev",
    role: "Founder & Lead Developer",
    avatar: "https://ext.same-assets.com/444325741/3173792314.svg",
    links: {
      github: "https://github.com/rz-ve",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "2",
    name: "Nexus",
    role: "Core Developer",
    avatar: "https://ext.same-assets.com/444325741/3173792314.svg",
    links: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "3",
    name: "Quantum",
    role: "UI/UX Designer",
    avatar: "https://ext.same-assets.com/444325741/3173792314.svg",
    links: {
      github: "https://github.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "4",
    name: "Synth",
    role: "Backend Developer",
    avatar: "https://ext.same-assets.com/444325741/3173792314.svg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// Mock contributors data
const contributors = [
  { id: "1", name: "Void", contributions: "Script Execution Engine" },
  { id: "2", name: "Echo", contributions: "Memory Management" },
  { id: "3", name: "Cipher", contributions: "Security Enhancements" },
  { id: "4", name: "Binary", contributions: "Performance Optimizations" },
  { id: "5", name: "Pulse", contributions: "Documentation" },
  { id: "6", name: "Nova", contributions: "Testing & QA" },
];

// Mock libraries/tools
const libraries = [
  { id: "1", name: "Lua", url: "https://www.lua.org/", description: "Scripting language" },
  { id: "2", name: "React", url: "https://reactjs.org/", description: "UI library" },
  { id: "3", name: "Monaco Editor", url: "https://microsoft.github.io/monaco-editor/", description: "Code editor" },
  { id: "4", name: "Electron", url: "https://www.electronjs.org/", description: "Desktop framework" },
];

export default function CreditsPage() {
  return (
    <Layout>
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Credits</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Xeno is made possible by the dedication and hard work of our amazing team and contributors. We'd like to thank everyone involved.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Core Team */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Core Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="bg-card/50 border-border/20">
                    <CardHeader className="text-center pb-3">
                      <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full bg-secondary/20 p-1">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="rounded-full h-full w-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center gap-4 pt-2">
                      {Object.entries(member.links).map(([platform, url]) => (
                        <Link
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-secondary/30 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span className="sr-only">{platform}</span>
                          {platform === "github" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : platform === "twitter" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : platform === "dribbble" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.29 19.31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2.42 10.8C8.47 10 12.53 10.09 19.27 12.09" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21.56 13.14C15.13 17.76 9.22 17.1 2.67 13.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </Link>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contributors */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Contributors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributors.map((contributor) => (
                  <div key={contributor.id} className="flex items-center p-4 rounded-lg bg-card/50 border border-border/20">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary/20 mr-4">
                      <span className="text-lg font-semibold">{contributor.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{contributor.name}</h3>
                      <p className="text-sm text-muted-foreground">{contributor.contributions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Libraries & Tools */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Libraries & Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {libraries.map((lib) => (
                  <Link
                    key={lib.id}
                    href={lib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-card/50 border border-border/20 hover:bg-secondary/20 transition-colors"
                  >
                    <div className="mr-4 rounded-md bg-secondary/20 p-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{lib.name}</h3>
                      <p className="text-sm text-muted-foreground">{lib.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Special Thanks */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Special Thanks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We'd also like to extend our appreciation to the entire Xeno community for your support, feedback, and contributions that have helped shape this project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
