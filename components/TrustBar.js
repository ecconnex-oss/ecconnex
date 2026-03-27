import { trustSignals } from "@/data/site";

export function TrustBar() {
  return (
    <div className="mx-auto mt-6 grid max-w-7xl gap-3 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
      {trustSignals.map((item) => (
        <div
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85 backdrop-blur"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
