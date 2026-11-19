"use client";

import { useRouter } from "next/navigation";

/** Returns the user to the previous page, matching the Roaccutane conditions-of-use page. */
export default function BackToWebsiteButton() {
  const router = useRouter();

  return (
    <button type="button" className="btn g" onClick={() => router.back()}>
      ← Back to Website
    </button>
  );
}
