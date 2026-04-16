"use client";

import { useEffect, useState } from "react";

export type Secret = {
  id: string;
  path: string;
  title: string;
  riddle: string;
  hint?: string;
};

export const SECRETS: Secret[] = [
  {
    id: "madrugada",
    path: "/madrugada",
    title: "La noche del ghosteo honesto",
    riddle:
      "Soy el momento donde la noche deja de ser noche pero aún no amanece. Tu tía me habló a mí, y yo no dormía.",
    hint: "Tu tía no dormía. Buscá el nombre de esa hora en español.",
  },
];

const STORAGE_KEY = "solangegf-secrets";

function readStore(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStore(list: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent("solangegf-secrets-changed"));
}

export function useMarkDiscovered(id: string) {
  useEffect(() => {
    const current = readStore();
    if (!current.includes(id)) {
      writeStore([...current, id]);
    }
  }, [id]);
}

export function useDiscovered(): Set<string> {
  const [set, setSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    const sync = () => setSet(new Set(readStore()));
    sync();
    window.addEventListener("solangegf-secrets-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("solangegf-secrets-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return set;
}
