import Script from "next/script";
import { CONSTANT_CONTACT_INLINE_FORM_ID } from "@/lib/constants";

const WIDGET_SRC =
  "https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";

/**
 * Inline placeholder + widget script only. `var _ctct_m` is set in root layout
 * (beforeInteractive) so it always runs before React/hydration — required for submit to work.
 */
export default function ConstantContactActiveForm() {
  return (
    <div className="ctct-inline-form-root w-full max-w-xl relative z-10">
      <div
        className="ctct-inline-form"
        data-form-id={CONSTANT_CONTACT_INLINE_FORM_ID}
        suppressHydrationWarning
      />
      <Script
        id="signupScript"
        src={WIDGET_SRC}
        strategy="afterInteractive"
        async
        defer
      />
    </div>
  );
}
