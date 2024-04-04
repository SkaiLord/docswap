import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiX } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                alt="logo"
                className="cursor-pointer w-10 h-10 rounded-full object-cover"
                src="/logo.svg"
                height={50}
                width={50}
              />
              <span className="hidden md:block self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                DocSwap
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link
                  href="https://docswap.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Image Tool
                </Link>
              </ul>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link
                  href="https://docswap.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Audio Tool
                </Link>
              </ul>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link
                  href="https://docswap.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Tool
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-4">
                <Link
                  href="https://x.com/SkaiLord007"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <SiX /> @SkaiLord007
                </Link>

                <Link
                  href="https://github.com/SkaiLord"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <SiGithub /> @SkaiLord
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-4">
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="https://docswap.vercel.app/" className="hover:underline">
              DocSwap
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
