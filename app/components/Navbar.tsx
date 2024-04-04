// imports
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ModeToggle } from '@/components/custom-ui/mode-toggle';

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md z-50 fixed h-24 flex justify-between items-center py-8 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="flex items-center text-2xl font-bold">
        <Image
          alt="logo"
          className="cursor-pointer w-10 h-10 rounded-full object-cover"
          src="/logo.svg"
          height={50}
          width={50}
        />
        DocSwap
      </Link>
      <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-xl">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-xl">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-xl">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <Link href="https://github.com/SkaiLord/docswap">
          <Button
            variant="default"
            className="rounded-full w-fit bg-main-green gap-2 items-center hidden md:flex"
            size="lg"
          >
            <span>Github Repo</span>
            <span className="text-xl">
              <BsGithub />
            </span>
          </Button>
        </Link>
        <ModeToggle />
      </div>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    About
                  </Button>
                </Link>
                <Link href="/privacy-policy">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Privacy Policy
                  </Button>
                </Link>
                <div className="flex gap-4 items-center justify-center">
                  <Link href="https://github.com/SkaiLord/docswap">
                    <Button
                      variant="default"
                      className="rounded-full w-fit bg-main-green items-center flex"
                      size="sm"
                    >
                      <BsGithub className="h-6 w-6" />
                    </Button>
                  </Link>
                  <ModeToggle />
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
