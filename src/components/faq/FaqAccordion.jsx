import { useState } from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="border-t border-deep/15">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.title} className="border-b border-deep/15">
            <h3 className="border-l border-deep/15">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center gap-4 py-4 pl-4 pr-4 text-left text-deep transition-colors hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 sm:gap-5 sm:pl-6 sm:pr-6">
                
                <span className="relative block h-4 w-4 shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-[7px] h-0.5 w-4 bg-current" />
                  <span
                    className={cn(
                      "absolute left-[7px] top-0 h-4 w-0.5 origin-center bg-current transition-all duration-300",
                      open && "scale-y-0 opacity-0"
                    )} />
                  
                </span>
                <span className="font-heading text-[19px] font-medium leading-none tracking-[0.01em] sm:text-[22px]">
                  {item.title}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-[400ms] ease-out",
                open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
              )}>
              
              <div className="overflow-hidden">
                <div className="flex flex-wrap items-stretch gap-x-6 gap-y-4 py-3 pl-4 pr-4 sm:pl-6 sm:pr-6">
                  <div className="min-w-[240px] flex-[368_1_0] overflow-hidden rounded-lg border border-deep/10 bg-white">
                    


                    
                    
                  </div>
                  <div className="flex min-w-[240px] flex-[343_1_0] flex-col justify-end gap-5 pb-1">
                    <p className="text-[15px] leading-[1.6] text-muted-foreground">{item.body}</p>
                    <p className="text-[13px] italic leading-[1.4] text-deep/50">{item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>);

      })}
    </div>);

}