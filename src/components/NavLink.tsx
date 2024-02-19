import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block rounded py-2 pl-3 pr-4 hover:text-white dark:text-[#ADB7BE] sm:text-xl md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
