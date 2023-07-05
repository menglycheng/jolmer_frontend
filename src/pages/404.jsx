import Link from "next/link";

export default function Custom404() {
  return (
    <div class="w-full h-screen bg-primary-lowGray flex items-center justify-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-primary-lowBlack">
        <div class="max-w-md">
          <div class="text-5xl md:text-7xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p class="mb-8">
            You may have mistyped the address or the page may have moved.{" "}
          </p>

          <Link
            href="/"
            class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-primary-blue active:bg-primary-blue hover:bg-white hover:text-primary-blue hover:border-primary-blue"
          >
            back to homepage
          </Link>
        </div>
        <div class="max-w-lg"></div>
      </div>
    </div>
  );
}
