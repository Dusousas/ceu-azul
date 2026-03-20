import HistoryPage from "@/components/HistoryPage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <HistoryPage locale={locale} />;
}
