// Pure attendance logic. No React, no I/O.

const round2 = (n: number) => Math.round(n * 100) / 100;

export interface AttendanceResult {
  ok: boolean;
  percent: number;
  error?: string;
}

export interface TargetResult {
  ok: boolean;
  /** true if the student is already at/above the target */
  meetsTarget: boolean;
  /** consecutive classes to ATTEND to reach the target (0 if already there) */
  mustAttend: number;
  /** classes the student can still MISS and stay >= target (0 if not above) */
  canMiss: number;
  error?: string;
}

function n(v: string | number): number {
  if (typeof v === "number") return v;
  const t = v.trim();
  return t === "" ? NaN : Number(t);
}

/** attended / held × 100. */
export function attendancePercent(
  heldIn: string | number,
  attendedIn: string | number,
): AttendanceResult {
  const held = n(heldIn);
  const attended = n(attendedIn);
  if (Number.isNaN(held) || Number.isNaN(attended)) {
    return { ok: false, percent: 0, error: "Enter classes held and classes attended." };
  }
  if (held <= 0) {
    return { ok: false, percent: 0, error: "Classes held must be greater than 0." };
  }
  if (attended < 0) {
    return { ok: false, percent: 0, error: "Classes attended cannot be negative." };
  }
  if (attended > held) {
    return { ok: false, percent: 0, error: "Attended cannot be more than classes held." };
  }
  return { ok: true, percent: round2((attended / held) * 100) };
}

/**
 * Given a target % (e.g. 75), compute:
 *  - mustAttend: smallest x where (attended + x) / (held + x) >= target/100
 *  - canMiss:    largest y where attended / (held + y) >= target/100
 * The formula for mustAttend solves x >= (t·held − attended) / (1 − t), t = target/100.
 */
export function targetPlan(
  heldIn: string | number,
  attendedIn: string | number,
  targetIn: string | number = 75,
): TargetResult {
  const base = attendancePercent(heldIn, attendedIn);
  if (!base.ok) return { ok: false, meetsTarget: false, mustAttend: 0, canMiss: 0, error: base.error };

  const held = n(heldIn);
  const attended = n(attendedIn);
  const target = n(targetIn);
  if (Number.isNaN(target) || target <= 0 || target > 100) {
    return { ok: false, meetsTarget: false, mustAttend: 0, canMiss: 0, error: "Target must be between 1 and 100." };
  }
  const t = target / 100;

  const meetsTarget = attended / held >= t;

  // How many consecutive classes to attend to reach target.
  let mustAttend = 0;
  if (!meetsTarget) {
    if (t >= 1) {
      // 100% target is only reachable if already at 100%.
      mustAttend = Infinity;
    } else {
      mustAttend = Math.max(0, Math.ceil((t * held - attended) / (1 - t)));
    }
  }

  // How many classes can be missed (added but not attended) and still stay >= target.
  let canMiss = 0;
  if (meetsTarget) {
    // attended / (held + y) >= t  ->  y <= attended/t - held
    canMiss = Math.max(0, Math.floor(attended / t - held));
  }

  return {
    ok: true,
    meetsTarget,
    mustAttend,
    canMiss,
  };
}
