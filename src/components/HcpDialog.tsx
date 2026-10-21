"use client";

import { useEffect, useRef, useState } from "react";

export default function HcpDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [showNotHcp, setShowNotHcp] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.sessionStorage.getItem("zyp-hcp") !== "yes") {
        dialogRef.current?.showModal();
      }
    } catch {
      // Ignore sessionStorage exceptions
    }
  }, []);

  const handleConfirm = () => {
    try {
      window.sessionStorage.setItem("zyp-hcp", "yes");
    } catch {}
    dialogRef.current?.close();
  };

  const handleDecline = () => {
    setShowNotHcp(true);
  };

  return (
    <dialog
      className="hcp"
      id="hcp-dialog"
      ref={dialogRef}
      aria-labelledby="hcp-title"
      onCancel={(e) => e.preventDefault()}
    >
      <div className="hcp-body">
        <span className="eyebrow">ZYPREXA (olanzapine)</span>
        <h2 id="hcp-title">This website is intended for healthcare professionals</h2>
        <p>
          It contains information about a prescription-only medicine, based on
          the EU Summary of Product Characteristics. Please confirm that you are a
          healthcare professional.
        </p>
        <div className="actions">
          <button
            className="btn btn--primary"
            id="hcp-yes"
            type="button"
            onClick={handleConfirm}
          >
            I am a healthcare professional
          </button>
          <button
            className="btn btn--secondary"
            id="hcp-no"
            type="button"
            onClick={handleDecline}
          >
            I am not
          </button>
        </div>
        {showNotHcp && (
          <p id="hcp-not" className="small" tabIndex={-1} style={{ marginTop: "1rem" }}>
            This website is not intended for you. If you have questions about your
            medicine, please speak with your doctor or pharmacist, or read the
            package leaflet on the{" "}
            <a
              className="ext"
              href="https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa"
              target="_blank"
              rel="noopener noreferrer"
            >
              European Medicines Agency website
            </a>
            .
          </p>
        )}
      </div>
    </dialog>
  );
}
