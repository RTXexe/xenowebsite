import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b border-border/20 bg-background/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/1296868399/1388939149.png"
              alt="Xeno Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">Xeno</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Home
          </Link>
          <Link href="/tutorial" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Help
          </Link>
          <Link href="/executor" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Executor
          </Link>
          <Link href="/download" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Download
          </Link>
          <Link href="/credits" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Credits
          </Link>
          <Link href="/donate" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://discord.gg/getxeno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium rounded-md hover:bg-secondary px-3 py-1.5 transition-colors"
          >
            <Image
              src="https://ext.same-assets.com/1296868399/4181375868.png"
              alt="Discord"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="hidden md:inline">Join Discord</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
