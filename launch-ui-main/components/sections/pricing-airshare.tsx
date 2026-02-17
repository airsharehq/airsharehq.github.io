"use client";

import { useState, useCallback } from "react";
import { Gift } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PricingColumn } from "@/components/ui/pricing-column";
import { cn } from "@/lib/utils";

const FREE_FEATURES = [
  "Seamless local transfers",
  "All file types",
  "Max file size 100 MB",
  "Transfers/day 5",
  "Transfer history 7 days",
  "License for one device",
];

const PRO_FEATURES_YEARLY = [
  "Everything in FREE",
  "Unlimited file size",
  "Transfers/day Unlimited",
  "Transfer history Unlimited",
  "Global sharing (out-of-network via Iroh relays)",
  "License for one device — purchase extra seats for additional devices",
  "All future updates",
];

const PRO_FEATURES_LIFETIME = [
  "Everything in FREE",
  "Unlimited file size",
  "Transfers/day Unlimited",
  "Transfer history Unlimited",
  "Global sharing (out-of-network via Iroh relays)",
  "License for one device — purchase extra seats for additional devices",
  "All future updates",
];

export default function PricingAirShare() {
  const [plan, setPlan] = useState<"yearly" | "lifetime">("yearly");

  return (
    <Section id="pricing">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Simple, fair pricing
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            Start free. Upgrade when you need more.
          </p>
          <div className="mt-6 inline-flex items-center justify-center rounded-full border border-border bg-muted/50 p-1">
            <button
              type="button"
              onClick={() => setPlan("yearly")}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                plan === "yearly"
                  ? "bg-gradient-to-r from-brand to-brand-secondary text-primary-foreground"
                  : "hover:bg-muted",
              )}
            >
              Yearly (one-time)
            </button>
            <button
              type="button"
              onClick={() => setPlan("lifetime")}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                plan === "lifetime"
                  ? "bg-gradient-to-r from-brand to-brand-secondary text-primary-foreground"
                  : "hover:bg-muted",
              )}
            >
              Lifetime
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            One-time purchase — no auto-renew. License is per device.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-5xl w-full">
          <PricingColumn
            name="Free"
            description="For personal use on your local network"
            price={0}
            priceNote="Free forever. Get started now."
            cta={{
              variant: "glow",
              label: "Get started",
              href: "/#download",
            }}
            features={FREE_FEATURES}
            variant="default"
          />
          <PricingColumn
            name="Pro"
            description="For power users & teams"
            price={plan === "yearly" ? 5.8 : 79}
            originalPrice={plan === "yearly" ? 29 : undefined}
            promotionText={plan === "yearly" ? "80% OFF — Limited time" : undefined}
            priceNote={
              plan === "yearly"
                ? "One-time purchase, valid 12 months. License is per device."
                : "Lifetime license — no expiry. License is per device."
            }
            cta={{
              variant: "default",
              label: "Buy Pro Now",
              href:
                plan === "yearly"
                  ? siteConfig.pricing.yearly
                  : siteConfig.pricing.lifetime,
            }}
            features={
              plan === "yearly" ? PRO_FEATURES_YEARLY : PRO_FEATURES_LIFETIME
            }
            variant="glow-brand"
          />
        </div>
      </div>
    </Section>
  );
}
