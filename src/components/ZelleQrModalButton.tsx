"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

export default function ZelleQrModalButton({
  className,
  buttonLabel = "Zelle QR Code",
}: {
  className?: string;
  buttonLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100">
              <h2 id={titleId} className="text-lg font-semibold text-gray-900">
                Zelle QR Code
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <div className="relative mx-auto w-full max-w-[520px] aspect-square rounded-xl border border-gray-100 bg-warm-50 overflow-hidden">
                <Image
                  src="/images/zelleqr.JPG"
                  alt="Zelle QR code"
                  fill
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 768px) 92vw, 520px"
                  priority
                />
              </div>
              <p className="text-gray-500 text-sm mt-5 text-center">
                Tip: press <span className="font-medium text-gray-700">Esc</span>{" "}
                to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

