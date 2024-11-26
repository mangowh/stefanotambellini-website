import siteMetadata from "../../data/siteMetadata";
import CustomLink from "./CustomLink";

const iconSize = 3;

/**
 * Footer che inserisco alla base della pagina per indirizzare a tutti i social e inserire dicitura di copyright
 *
 * Attenzione: inserisco più link possibili per incrementare SEO, non sono necessariamente link di interesse!
 */
export function SocialLinks() {
  return (
    <div style={{ display: "inline-block", verticalAlign: "sub" }}>
      <p>
        <CustomLink href={siteMetadata.linkedin}>Linkedin</CustomLink>
      </p>
      <p>
        <CustomLink href={siteMetadata.github}>Github</CustomLink>
      </p>
    </div>
  );
}
