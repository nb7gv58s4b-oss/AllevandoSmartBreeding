import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CartProvider } from "@/components/cart/CartContext";
import { SiteContentProvider } from "@/components/site/SiteContentContext";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const staticContent = {};

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <SiteContentProvider value={staticContent}>
      <CartProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </CartProvider>
    </SiteContentProvider>
  );
}