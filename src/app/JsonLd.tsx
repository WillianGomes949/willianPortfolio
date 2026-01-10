export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Willian Gomes - Desenvolvedor FullStack",
          url: "https://www.williangomesdev.com",
          logo: "https://www.williangomesdev.com/og-image.webp",
          image: "https://www.williangomesdev.com/og-image.webp",
          description:
            "Desenvolvimento de sites profissionais, lojas virtuais e sistemas web em Fortaleza e Ceará.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fortaleza",
            addressRegion: "CE",
            addressCountry: "BR",
          },
          priceRange: "$$",
          telephone: "+5585988954195",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          sameAs: [
            "https://www.instagram.com/williangomes949",
            "https://github.com/williangomes949",
            "https://www.linkedin.com/in/williangomes949",
          ],
        }),
      }}
    />
  );
}
