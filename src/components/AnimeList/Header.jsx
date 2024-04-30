import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-5 items-center">
      <h1 className="font-bold text-2xl text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="text-color-primary md:text-xl text-md underline hover:text-color-accent transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
