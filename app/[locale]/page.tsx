import About from "@/components/About";
import Contact from "@/components/Contact";
import Logos from "@/components/Logos";
import Main from "@/components/Main";
import Production from "@/components/Production";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import ScrollToHash from "@/components/subc/ScrollToHash";
import type { Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <ScrollToHash />
      <Main locale={locale} />
      <Products locale={locale} />
      <About locale={locale} />
      <Logos />
      <Production locale={locale} />
      <Testimonials locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
