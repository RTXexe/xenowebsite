import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DonatePage() {
  // Updated donation tiers with unique IDs for benefits
  const donationTiers = [
    {
      id: "basic",
      name: "Basic Supporter",
      price: "$5",
      description: "Every contribution helps us continue development",
      benefits: [
        { id: "basic-1", text: "Name in credits" },
        { id: "basic-2", text: "Supporter badge on Discord" },
      ]
    },
    {
      id: "premium",
      name: "Premium Supporter",
      price: "$15",
      featured: true,
      description: "Get exclusive benefits and help us grow faster",
      benefits: [
        { id: "premium-1", text: "Name in credits" },
        { id: "premium-2", text: "Supporter badge on Discord" },
        { id: "premium-3", text: "Early access to updates" },
        { id: "premium-4", text: "Premium support channel access" },
      ]
    },
    {
      id: "elite",
      name: "Elite Supporter",
      price: "$30",
      description: "Become a VIP with the best perks and benefits",
      benefits: [
        { id: "elite-1", text: "Name in credits" },
        { id: "elite-2", text: "Elite badge on Discord" },
        { id: "elite-3", text: "Early access to updates" },
        { id: "elite-4", text: "Priority support channel access" },
        { id: "elite-5", text: "Access to experimental features" },
        { id: "elite-6", text: "Vote on future features" },
      ]
    }
  ];

  const cryptoOptions = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      address: "bc1q...x8z5",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.17-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.4s.974.225.955.238c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.322.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: "ethereum",
      name: "Ethereum",
      address: "0x...f1e2",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 12.2 12 22l9-9.8L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12.2l9 4 9-4M12 2v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: "monero",
      name: "Monero",
      address: "4...7f9",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6v12M6 12h12M8 8l8 8M8 16l8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Support Xeno</h1>
            <p className="text-muted-foreground text-lg">
              Help us keep Xeno free and actively developed. Your contributions directly support the team and infrastructure costs.
            </p>
          </div>

          <Tabs defaultValue="regular" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="regular">Regular Donations</TabsTrigger>
              <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
            </TabsList>

            <TabsContent value="regular">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {donationTiers.map((tier) => (
                  <Card
                    key={tier.id}
                    className={`border-border/20 ${tier.featured ? 'border-2 border-primary/20 shadow-lg' : ''}`}
                  >
                    <CardHeader>
                      <CardTitle>{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4">{tier.price}</div>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit) => (
                          <li key={benefit.id} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm">{benefit.text}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        Donate {tier.price}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm">
                  Want to contribute a different amount? Feel free to select a custom amount on the next page.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="crypto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cryptoOptions.map((option) => (
                  <Card key={option.id} className="border-border/20">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-md bg-secondary/20 text-primary">
                        {option.icon}
                      </div>
                      <div>
                        <CardTitle>{option.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md bg-secondary/20 p-3 flex items-center justify-between">
                          <span className="text-sm font-mono truncate">{option.address}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Show QR Code
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-md bg-secondary/20 text-center">
                <p className="text-sm">
                  <strong>Note:</strong> After sending a crypto donation, please reach out to us on Discord with your transaction ID to receive supporter benefits.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="border border-border/20 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Where does my donation go?</h3>
                <p className="text-muted-foreground">
                  Your donations directly support Xeno's development and infrastructure costs. This includes server hosting, development tools, and supporting the team to work on improvements and new features.
                </p>
              </div>

              <div className="border border-border/20 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">When will I receive my benefits?</h3>
                <p className="text-muted-foreground">
                  Discord benefits (badges and channel access) are typically applied within 24 hours after your donation. You'll receive a confirmation message once they've been assigned.
                </p>
              </div>

              <div className="border border-border/20 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Can I donate if I don't want benefits?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We appreciate all forms of support. If you prefer to donate without receiving the listed benefits, you can indicate this in the notes section during checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
