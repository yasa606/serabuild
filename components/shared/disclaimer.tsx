// components/shared/disclaimer.tsx
import { AlertTriangle } from "lucide-react";

export default function Disclaimer({
  message = "Case Study Infrastructure: All project briefs, specifications, metrics, and price estimations are illustrative only to model localized residential performance.",
}) {
  return (
    <div className="bg-[#F8FAFC] border-l-4 border-[#D4A72C] p-4 my-4 rounded-r-md shadow-sm">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="h-5 w-5 text-[#D4A72C] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-[#64748B] font-mono leading-relaxed">
          <strong className="text-[#0F172A] font-semibold uppercase tracking-wider">
            SeraBuild Notice:
          </strong>{" "}
          {message}
        </p>
      </div>
    </div>
  );
}
