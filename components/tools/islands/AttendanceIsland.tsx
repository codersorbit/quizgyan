"use client";

import { useMemo, useState } from "react";
import { attendancePercent, targetPlan } from "@/lib/tools/logic/attendance";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

export default function AttendanceIsland() {
  const [lang, setLang] = useLang();
  const [held, setHeld] = useState("");
  const [attended, setAttended] = useState("");
  const [target, setTarget] = useState("75");

  useUrlSync({ h: held, a: attended, g: target }, (q) => {
    const h = q.get("h");
    const a = q.get("a");
    const g = q.get("g");
    if (h != null) setHeld(h);
    if (a != null) setAttended(a);
    if (g != null) setTarget(g);
  });

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);

  const base = useMemo(() => attendancePercent(held, attended), [held, attended]);
  const plan = useMemo(() => targetPlan(held, attended, target), [held, attended, target]);

  const hasInput = held.trim() !== "" && attended.trim() !== "";
  const show = hasInput && base.ok;

  const shareText = () => {
    if (!show) return "";
    let s = `Attendance: ${attended}/${held} = ${base.percent}% (target ${target}%)`;
    if (plan.ok) {
      if (plan.meetsTarget) s += ` · can miss ${plan.canMiss} more`;
      else s += plan.mustAttend === Infinity ? ` · target not reachable` : ` · attend ${plan.mustAttend} more to reach target`;
    }
    return s;
  };

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField id="held" label={t("Classes held", "মোট ক্লাস")} value={held} onChange={setHeld} placeholder="120" min={1} inputMode="numeric" />
        <NumberField id="att" label={t("Classes attended", "উপস্থিত ক্লাস")} value={attended} onChange={setAttended} placeholder="96" min={0} inputMode="numeric" />
      </div>
      <div className="mt-3 max-w-[12rem]">
        <NumberField id="target" label={t("Target (%)", "লক্ষ্য (%)")} value={target} onChange={setTarget} min={1} max={100} suffix="%" inputMode="numeric" />
      </div>

      {hasInput && !base.ok && <ErrorText>{base.error}</ErrorText>}

      <div aria-live="polite" className="mt-4 space-y-3">
        {show && (
          <>
            <div className="rounded-2xl bg-cobalt-soft p-4">
              <p className="text-sm font-medium text-muted">{t("Your attendance", "তোমার উপস্থিতি")}</p>
              <p className="font-display text-4xl font-bold text-cobalt">{base.percent}%</p>
              <div className="mt-3" aria-hidden>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-white">
                  <div
                    className={`h-full rounded-full transition-[width] duration-300 ${
                      base.percent >= Number(target) ? "bg-green" : "bg-coral"
                    }`}
                    style={{ width: `${Math.min(100, base.percent)}%` }}
                  />
                  <span
                    className="absolute top-0 h-full border-l-2 border-dashed border-ink/50"
                    style={{ left: `${Math.min(100, Number(target) || 75)}%` }}
                  />
                </div>
                <p className="mt-1 text-[11px] text-muted">{t("Dashed line = target", "ড্যাশ লাইন = লক্ষ্য")}</p>
              </div>
            </div>

            {plan.ok && (
              <div
                className={`rounded-2xl p-4 ${
                  plan.meetsTarget ? "bg-green/10" : "bg-amber/15"
                }`}
              >
                {plan.meetsTarget ? (
                  <p className="text-ink">
                    ✅ {t("You're above your target.", "তুমি লক্ষ্যের উপরে আছো।")}{" "}
                    <strong>
                      {t("You can miss", "তুমি বাদ দিতে পারো")} {plan.canMiss}{" "}
                      {t("more class(es)", "টি ক্লাস")}
                    </strong>{" "}
                    {t("and stay at or above", "এবং তবু থাকবে")} {target}%.
                  </p>
                ) : plan.mustAttend === Infinity ? (
                  <p className="text-ink">
                    ⚠️ {t("A 100% target can't be reached once a class is missed.", "একটি ক্লাস বাদ পড়লে ১০০% লক্ষ্য আর ছোঁয়া যায় না।")}
                  </p>
                ) : (
                  <p className="text-ink">
                    📌 {t("Attend the next", "পরের")} <strong>{plan.mustAttend}</strong>{" "}
                    {t("class(es) in a row to reach", "টি ক্লাস পরপর করলে পৌঁছাবে")} {target}%.
                  </p>
                )}
                <p className="mt-2 text-xs text-muted">
                  {t(
                    "Formula: attendance % = attended ÷ held × 100. To reach a target t, attend x where (attended + x) ÷ (held + x) ≥ t.",
                    "সূত্র: উপস্থিতি % = উপস্থিত ÷ মোট × ১০০। লক্ষ্য t ছুঁতে এমন x ক্লাস করো যেখানে (উপস্থিত + x) ÷ (মোট + x) ≥ t।",
                  )}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Attendance Calculator — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
