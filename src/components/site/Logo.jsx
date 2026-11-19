import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const LOGO_FULL =
  "https://base44.app/api/apps/6afbe902735418e3d0251319/files/mp/public/6afbe902735418e3d0251319/6fb2c965d_allevando-logo-reale.png";

export default function Logo({ className = "" }) {
  return (
    <span translate="no" className={cn("notranslate inline-flex items-center", className)}>
      <Image
        src={LOGO_FULL}
        alt="ALLEVANDO — Il gestionale degli allevatori, per gli allevatori"
        fittingType="fit"
        className="h-12 w-auto sm:h-14"
      />
    </span>
  );
}