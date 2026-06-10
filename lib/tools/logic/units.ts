// Pure unit-conversion logic for Class 6–10 science/maths. No React, no I/O.

export type Category = "length" | "mass" | "time" | "temperature" | "area" | "volume" | "speed";

export interface Unit {
  id: string;
  label: string;
  /** factor to the category's base unit (not used for temperature) */
  factor: number;
}

export interface UnitCategory {
  key: Category;
  label: string;
  base: string;
  units: Unit[];
}

// Base units: length=m, mass=g, time=s, area=m², volume=l, speed=m/s.
export const CATEGORIES: ReadonlyArray<UnitCategory> = [
  {
    key: "length",
    label: "Length",
    base: "m",
    units: [
      { id: "mm", label: "millimetre (mm)", factor: 0.001 },
      { id: "cm", label: "centimetre (cm)", factor: 0.01 },
      { id: "m", label: "metre (m)", factor: 1 },
      { id: "km", label: "kilometre (km)", factor: 1000 },
    ],
  },
  {
    key: "mass",
    label: "Mass",
    base: "g",
    units: [
      { id: "mg", label: "milligram (mg)", factor: 0.001 },
      { id: "g", label: "gram (g)", factor: 1 },
      { id: "kg", label: "kilogram (kg)", factor: 1000 },
      { id: "t", label: "tonne (t)", factor: 1_000_000 },
    ],
  },
  {
    key: "time",
    label: "Time",
    base: "s",
    units: [
      { id: "s", label: "second (s)", factor: 1 },
      { id: "min", label: "minute (min)", factor: 60 },
      { id: "h", label: "hour (h)", factor: 3600 },
      { id: "day", label: "day", factor: 86400 },
    ],
  },
  {
    key: "temperature",
    label: "Temperature",
    base: "°C",
    units: [
      { id: "C", label: "Celsius (°C)", factor: 1 },
      { id: "F", label: "Fahrenheit (°F)", factor: 1 },
      { id: "K", label: "Kelvin (K)", factor: 1 },
    ],
  },
  {
    key: "area",
    label: "Area",
    base: "m²",
    units: [
      { id: "cm2", label: "square cm (cm²)", factor: 0.0001 },
      { id: "m2", label: "square m (m²)", factor: 1 },
      { id: "ha", label: "hectare (ha)", factor: 10000 },
      { id: "km2", label: "square km (km²)", factor: 1_000_000 },
    ],
  },
  {
    key: "volume",
    label: "Volume",
    base: "l",
    units: [
      { id: "ml", label: "millilitre (ml)", factor: 0.001 },
      { id: "l", label: "litre (l)", factor: 1 },
      { id: "m3", label: "cubic metre (m³)", factor: 1000 },
    ],
  },
  {
    key: "speed",
    label: "Speed",
    base: "m/s",
    units: [
      { id: "ms", label: "metre/second (m/s)", factor: 1 },
      { id: "kmh", label: "kilometre/hour (km/h)", factor: 1000 / 3600 },
    ],
  },
];

export function getCategory(key: Category): UnitCategory {
  return CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];
}

export interface ConvertResult {
  ok: boolean;
  value: number;
  /** human note, e.g. "1 km = 1000 m, so 3.5 km = 3500 m" */
  note: string;
  error?: string;
}

const tidy = (n: number) => {
  // up to 6 significant-ish digits without trailing zeros
  const r = Math.round(n * 1e6) / 1e6;
  return r;
};

/* ------------------------------ temperature ------------------------------ */

function toCelsius(v: number, from: string): number {
  if (from === "C") return v;
  if (from === "F") return (v - 32) * (5 / 9);
  return v - 273.15; // K
}
function fromCelsius(c: number, to: string): number {
  if (to === "C") return c;
  if (to === "F") return c * (9 / 5) + 32;
  return c + 273.15; // K
}

export function convert(value: string | number, cat: Category, fromId: string, toId: string): ConvertResult {
  const v = typeof value === "number" ? value : value.trim() === "" ? NaN : Number(value);
  if (Number.isNaN(v)) return { ok: false, value: 0, note: "", error: "Enter a number to convert." };

  const category = getCategory(cat);
  const from = category.units.find((u) => u.id === fromId) ?? category.units[0];
  const to = category.units.find((u) => u.id === toId) ?? category.units[0];

  if (cat === "temperature") {
    const out = tidy(fromCelsius(toCelsius(v, from.id), to.id));
    return { ok: true, value: out, note: `${from.label} → ${to.label}: ${v}° converts to ${out}°.` };
  }

  // base-factor conversion
  const inBase = v * from.factor;
  const out = tidy(inBase / to.factor);
  const oneFrom = tidy(from.factor / to.factor);
  return {
    ok: true,
    value: out,
    note: `1 ${from.id} = ${oneFrom} ${to.id}, so ${v} ${from.id} = ${out} ${to.id}.`,
  };
}
