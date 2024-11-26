import type React from "react";

export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function CustomLink({ href, children }: CustomLinkProps) {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <a className="underline text-blue-600 hover:text-blue-800">{children}</a>
    );
  }

  if (isAnchorLink) {
    return (
      <a className="underline text-blue-600 hover:text-blue-800" href={href}>
        {children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200 hover:crt font-extralight"
      href={href}
    >
      {children}
    </a>
  );
}

export default CustomLink;
