import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/20 py-6 bg-background/50 backdrop-blur-md">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/4226205619/20395290.png"
              alt="Xeno Small Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>
          <div className="h-6 w-[1px] bg-border/40" />
          <span className="text-sm text-muted-foreground">Experience the future</span>
        </div>

        <nav className="flex items-center space-x-6 text-sm">
          <Link href="/credits" className="text-muted-foreground hover:text-foreground transition-colors">
            Credits
          </Link>
          <Link href="/tutorial" className="text-muted-foreground hover:text-foreground transition-colors">
            Help
          </Link>
          <Link href="/download" className="text-muted-foreground hover:text-foreground transition-colors">
            Download
          </Link>
          <Link href="/donate" className="text-muted-foreground hover:text-foreground transition-colors">
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://discord.gg/getxeno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Image
              src="https://ext.same-assets.com/1296868399/4181375868.png"
              alt="Discord"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="https://github.com/rz-ve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Image
              src="https://ext.same-assets.com/444325741/3173792314.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
