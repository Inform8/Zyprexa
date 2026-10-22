export default function MoodSpectrum() {
  return (
    <figure className="spectrum">
      <svg className="fig-svg" viewBox="0 0 1000 300" role="img" aria-label="Mood episode spectrum from mania through hypomania and euthymia to depression">
        <text x="8" y="78" className="spectrum__axis spectrum__axis--mania">+ MANIA</text>
        <text x="8" y="118" className="spectrum__axis spectrum__axis--hypo">+ HYPOMANIA</text>
        <text x="8" y="154" className="spectrum__axis">0 BASELINE</text>
        <text x="8" y="230" className="spectrum__axis spectrum__axis--dep">– DEPRESSION</text>

        <line x1="148" y1="150" x2="586" y2="150" stroke="var(--line)" strokeDasharray="4 5" />
        <line x1="750" y1="150" x2="970" y2="150" stroke="var(--line)" strokeDasharray="4 5" />

        <path d="M155 150 C200 150 205 46 258 46 C311 46 316 150 360 150 L155 150 Z" fill="#db2777" opacity="0.16" />
        <path d="M155 150 C200 150 205 46 258 46 C311 46 316 150 360 150" fill="none" stroke="#db2777" strokeWidth="2.5" />
        <circle cx="258" cy="46" r="4.5" fill="#db2777" />

        <path d="M360 150 C405 150 412 98 470 98 C528 98 535 150 580 150 L360 150 Z" fill="#d97706" opacity="0.16" />
        <path d="M360 150 C405 150 412 98 470 98 C528 98 535 150 580 150" fill="none" stroke="#d97706" strokeWidth="2.5" />
        <circle cx="470" cy="98" r="4.5" fill="#d97706" />

        <path d="M760 150 C805 150 818 236 878 236 C938 236 950 150 980 150 L760 150 Z" fill="#2563eb" opacity="0.14" />
        <path d="M760 150 C805 150 818 236 878 236 C938 236 950 150 980 150" fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx="878" cy="236" r="4.5" fill="#2563eb" />

        <g>
          <rect x="168" y="12" width="180" height="28" rx="14" fill="#fff" stroke="#db2777" />
          <text x="258" y="31" textAnchor="middle" className="spectrum__chip" fill="#db2777">Mania (acute episode)</text>
        </g>
        <g>
          <rect x="412" y="62" width="116" height="28" rx="14" fill="#fff" stroke="#d97706" />
          <text x="470" y="81" textAnchor="middle" className="spectrum__chip" fill="#d97706">Hypomania</text>
        </g>
        <g>
          <rect x="590" y="136" width="156" height="28" rx="14" fill="#fff" stroke="var(--p2)" />
          <text x="668" y="155" textAnchor="middle" className="spectrum__chip" fill="var(--pri)">Euthymia (stability)</text>
        </g>
        <g>
          <rect x="800" y="258" width="156" height="28" rx="14" fill="#fff" stroke="#2563eb" />
          <text x="878" y="277" textAnchor="middle" className="spectrum__chip" fill="#2563eb">Depression (episode)</text>
        </g>
      </svg>

      <ul className="spectrum__legend">
        <li className="spectrum__key spectrum__key--mania">Mania: acute mood elevation</li>
        <li className="spectrum__key spectrum__key--hypo">Hypomania: sub-syndromal</li>
        <li className="spectrum__key spectrum__key--eu">Euthymia: maintenance target</li>
        <li className="spectrum__key spectrum__key--dep">Depression: negative polarity</li>
      </ul>
      <figcaption>
        Syndromic bipolar polarity across acute and maintenance phases. Olanzapine is indicated for moderate to severe manic episodes and for recurrence prevention in patients whose manic episode has responded to olanzapine. Oral olanzapine monotherapy is not indicated for acute bipolar depression (EU SmPC 4.1).
      </figcaption>
    </figure>
  );
}
