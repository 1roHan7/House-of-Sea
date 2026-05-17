"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const sizeChart = [
  { size: "5", circumference: "49.3mm", diameter: "15.7mm" },
  { size: "6", circumference: "51.9mm", diameter: "16.5mm" },
  { size: "7", circumference: "54.4mm", diameter: "17.3mm" },
  { size: "8", circumference: "57.0mm", diameter: "18.1mm" },
  { size: "9", circumference: "59.5mm", diameter: "18.9mm" },
  { size: "10", circumference: "62.1mm", diameter: "19.8mm" },
];

export default function SizeGuideModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-xs text-ink-subtle hover:text-gold underline-gold transition-colors">
          Size Guide
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-cream p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="font-serif text-2xl">
              Ring Size Guide
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-1 text-ink-muted hover:text-ink">
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <p className="text-sm text-ink-muted mb-6 leading-relaxed">
            To find your ring size, measure the inner circumference of a ring
            that fits you well, or wrap a thin strip of paper around your
            finger and measure the length.
          </p>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="text-left text-[10px] tracking-widest uppercase text-ink-subtle pb-3">
                  Size
                </th>
                <th className="text-left text-[10px] tracking-widest uppercase text-ink-subtle pb-3">
                  Circumference
                </th>
                <th className="text-left text-[10px] tracking-widest uppercase text-ink-subtle pb-3">
                  Diameter
                </th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row) => (
                <tr key={row.size} className="border-b border-ink/6">
                  <td className="py-3 font-medium">{row.size}</td>
                  <td className="py-3 text-ink-muted">{row.circumference}</td>
                  <td className="py-3 text-ink-muted">{row.diameter}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-xs text-ink-subtle mt-6">
            Between sizes? We recommend sizing up for comfort.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
