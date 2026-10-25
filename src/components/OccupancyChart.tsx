import { Cite } from "@/components/Cite";

const DOSES = [
  { dose: "5 mg/day", label: "5 mg", mean: "55%", value: 55, range: "43–64%", ht: "> 90%" },
  { dose: "10 mg/day", label: "10 mg", mean: "73%", value: 73, range: "71–75%", ht: "> 90%" },
  { dose: "15 mg/day", label: "15 mg", mean: "75%", value: 75, range: "73–76%", ht: "> 90%" },
  { dose: "20 mg/day", label: "20 mg", mean: "76%", value: 76, range: "74–80%", ht: "> 90%" },
] as const;

export function OccupancyChart() {
  return (
    <div className="g2">
      <div className="card tw" style={{ padding: 18 }}>
        <table>
          <caption>Table. Striatal D2 and 5-HT2 occupancy across daily doses</caption>
          <thead>
            <tr>
              <th>Dose</th>
              <th>Mean D2</th>
              <th>Individual D2 range</th>
              <th>5-HT2 occupancy</th>
            </tr>
          </thead>
          <tbody>
            {DOSES.map((item) => (
              <tr key={item.dose}>
                <td>
                  <strong>{item.dose}</strong>
                </td>
                <td>
                  <strong style={{ color: "var(--pri)" }}>{item.mean}</strong>
                </td>
                <td>{item.range}</td>
                <td>{item.ht}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="source-line" style={{ marginTop: 12 }}>
          Three patients per dose, at steady state.
          <Cite n={12} />
        </p>
        <details style={{ marginTop: 12 }}>
          <summary>Study design and limitations</summary>
          <p>
            Twelve patients with schizophrenia were randomly assigned to fixed daily doses of 5–20 mg. Striatal D2
            occupancy was measured with [11C]raclopride PET; baseline was estimated from age-corrected controls rather
            than each patient&apos;s own scan.
            <Cite n={12} />
          </p>
          <p>Receptor occupancy does not by itself predict the clinical response of an individual patient.</p>
        </details>
      </div>

      <figure className="card" style={{ padding: 18 }}>
        <div className="vbars" aria-hidden="true">
          {DOSES.map((item) => (
            <div className="vbar" key={item.dose}>
              <strong>{item.mean}</strong>
              <i style={{ height: `${item.value * 1.6}px`, opacity: 1 }} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <figcaption className="source-line">
          Mean D2 occupancy by dose. 5-HT2 occupancy was above 90% at every dose from 5 to 20 mg/day (individual values
          about 91% to 100%). Doses above 20 mg/day reported in the paper are not shown.
          <Cite n={12} />
        </figcaption>
      </figure>
    </div>
  );
}
