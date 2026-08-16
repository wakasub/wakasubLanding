import { LandingPage } from "@/components/landing-page";
import { getDataPlans } from "@/lib/data-plans-server";

/**
 * Thin server shell: it resolves the data-plan price feed and hands it to the
 * (client) landing page, so the pricing table renders with live prices instead
 * of hydrating into them. See `lib/data-plans-server.ts` for the cache window.
 */
export default async function Page() {
  const { payload, source } = await getDataPlans();

  return <LandingPage initialPlans={payload} plansSource={source} />;
}
