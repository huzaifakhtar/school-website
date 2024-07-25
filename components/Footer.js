import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="https://flowbite.com/" passHref>
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </div>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" passHref>
                <span className="hover:underline me-4 md:me-6">About</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:underline me-4 md:me-6">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:underline me-4 md:me-6">Licensing</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:underline">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <Link href="https://flowbite.com/" passHref><span className="hover:underline">Flowbite™</span></Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;