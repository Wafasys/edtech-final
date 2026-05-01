export type DemoRole = "student" | "admin";

export interface DemoUser {
  role: DemoRole;
  name: string;
  email: string;
}

const STORAGE_KEY = "demo-auth";

export function setDemoUser(user: DemoUser): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch {
    // ignore — preview only
  }
}

export function getDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DemoUser;
  } catch {
    return null;
  }
}

export function clearDemoUser(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export const DEMO_STUDENT = {
  email: "student@demo.com",
  password: "student123",
  name: "Jane Cooper",
};

export const DEMO_ADMIN = {
  email: "admin@demo.com",
  password: "admin123",
  name: "Alex Morgan",
};
