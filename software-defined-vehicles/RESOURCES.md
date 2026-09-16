# Software-Defined Vehicles Resources

This topic moves fast — program cancellations, restructurings, and valuations from even a year ago can be stale. Every entry below is "good as of the date it was checked" (research pass: 2026-09-16), and this file should be revisited periodically rather than trusted forever.

## Knowledge — Definitions & frameworks

- [McKinsey Center for Future Mobility — Software-defined vehicles & E/E architecture](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/focus-areas/software-defined-vehicles-and-e-e-architecture)
  The most commonly cited "binary" SDV definition: continuously upgradable via centralized architecture, decoupled hardware/software. **Use for**: the mainstream industry-analyst definition.
- [McKinsey — Mapping the automotive software and electronics landscape](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/mapping-the-automotive-software-and-electronics-landscape)
  Source of the oft-cited automotive software/E&E market-size trajectory (~$238B in 2020 → ~$469B by 2030 in the edition found). **Use for**: market-size anchor figures — but re-verify the exact numbers directly on mckinsey.com before quoting precisely; direct fetch timed out during research and McKinsey has published newer, further-out editions.
- [PwC Japan — What is an SDV (Software Defined Vehicle)?](https://www.pwc.com/jp/en/knowledge/column/definition-of-sdv.html)
  The six-level (0–5) SDV maturity model, explicitly modeled on SAE's autonomy levels. **Use for**: the "continuum, not binary" counter-framing to McKinsey/Gartner.
  Note: page returned a 403 on direct fetch during research — content corroborated via convergent secondary write-ups, not a clean primary read. Re-verify before citing the framework's exact publication date.
- [TechCrunch — "wtf is a software-defined vehicle"](https://techcrunch.com/2024/01/10/wtf-is-a-software-defined-vehicle) (Jaclyn Trop, Jan 10, 2024)
  The best accessible explainer; explicitly states no single person/company is credited with popularizing the term (pushing back on the common "Tesla coined it in 2012" folk history). Quotes named analysts (Gartner's Mike Ramsey, Elektrobit's Moritz Neukirchner, Bosch's Stefan Buerkle on the ECU-consolidation threshold). **Use for**: the primary source for A1's "definitions compared" lesson and the contested-origin story.

## Knowledge — History & architecture evolution

- [CAN in Automation (CiA) — History of CAN technology](https://www.can-cia.org/can-knowledge/history-of-can-technology)
  Primary account of Bosch engineer Uwe Kiencke's 1983 CAN bus development, the 1986 SAE introduction, and 1991 Mercedes W140 first production use. **Use for**: the pre-SDV wiring/architecture baseline.
- [Recharged.com — Tesla Model S Software Update History (2012–2026 Guide)](https://recharged.com/articles/tesla-model-s-software-update-history/)
  Documents Tesla's first OTA update (late 2012, v1.9.11). **Use for**: dating Tesla's OTA inflection precisely.
- [CleanTechnica/InsideEVs — Does Tesla's Centralized Computer Architecture Require Fewer Chips?](https://cleantechnica.com/2021/12/30/does-teslas-centralized-computer-architecture-require-fewer-chips/) (Dec 30, 2021)
  **Use for**: explaining why Tesla's centralized compute (vs. ~100-ECU distributed norm) made frequent OTA economically viable.
- [CNBC — NHTSA asks Tesla why it didn't initiate a recall after a safety-related software update](https://www.cnbc.com/2021/10/13/nhtsa-asks-tesla-why-it-didnt-initiate-a-recall-after-safety-related-software-update.html) (Oct 13, 2021)
  **Use for**: the regulatory collision between OTA updates and recall law — a concrete "why this forced institutions to respond" moment.
- [Tesla Inc. Form 10-Q, Q3 2019 — SEC EDGAR](https://www.sec.gov/Archives/edgar/data/1318605/000156459019038256/Financial_Report.xlsx)
  Primary filing showing $1.30B in deferred revenue tied to Autopilot/FSD/OTA features. **Use for**: proof that software-as-recurring-revenue was a real, audited balance-sheet item, not just marketing.
- [InsideEVs — Tesla Model Y Wiring Is Not Revolutionary, According To Sandy Munro](https://insideevs.com/news/409405/tesla-model-y-wiring-no-revolution/)
  **Use for**: a healthy-skepticism counterpoint — Munro's teardown disputed Tesla's own wiring-harness marketing claims.
- [InsideEVs — How Rivian Developed Its Zonal Architecture In Just Two Years](https://insideevs.com/news/761865/rivian-zonal-architecture-development/)
  Rivian Gen 1 (17 control units) → Gen 2 (7 units, zonal), −1.6 miles of wiring, per SVP Vidya Rajagopalan. **Use for**: a concrete, named-executive zonal-migration case study.
- [BMW Group — Four "Superbrains" for the Neue Klasse](https://www.press.bmwgroup.com/global/article/detail/T0448372EN/four-superbrains-for-the-neue-klasse) (Mar 10, 2025)
  **Use for**: the best-documented legacy-OEM zonal architecture, with real before/after numbers (600m less wiring, 30% lighter harness, 1,000+ software modules).
  - Update, Apr 8, 2025: [Digital Trends – Stellantis STLA Brain / SmartCockpit](https://www.stellantis.com/en/news/press-releases/2026/may/stellantis-and-applied-intuition-expand-collaboration-with-stla-brain-to-advance-vehicle-software-and-enhance-customer-experience)
- [AUTOSAR — History of AUTOSAR](https://www.autosar.org/about/history)
  Founding consortium (BMW, Bosch, Continental, Daimler, Siemens VDO, VW — July 2003), later joiners. **Use for**: the standards-body backbone of automotive software architecture.
- [Vector — AUTOSAR Classic and Adaptive](https://www.vector.com/us/en/know-how/autosar/)
  **Use for**: explaining why Adaptive Platform (2017, POSIX-based, dynamic) had to exist alongside Classic (static, real-time) — the direct technical bridge to SDV.
- [Automotive News — Mitigate chip shortage with new software architectures](https://www.autonews.com/commentary/solution-auto-industry-chip-crisis-new-software-architectures/)
  **Use for**: the 2021 chip shortage as an architecture stress test — commentary/opinion piece, cite as informed perspective, not hard data.
- [Wikipedia — Electronic control unit](https://en.wikipedia.org/wiki/Electronic_control_unit)
  Source of the "up to 150 ECUs in modern vehicles" figure used in A2. **Use for**: a citable (if secondary) anchor for ECU-count claims — cross-check against a primary OEM/supplier source if precision matters.
- [AlixPartners — press release, Sept 23, 2021](https://www.alixpartners.com/newsroom/press-release-shortages-related-to-semiconductors-to-cost-the-auto-industry-210-billion-in-revenues-this-year-says-new-alixpartners-forecast/)
  Primary source for the 2021 chip-shortage forecast: $210B revenue lost / 7.7M units of production lost, revised up sharply from a May 2021 estimate of $110B / 3.9M units. **Use for**: the hard numbers behind the chip-shortage-as-architecture-stress-test narrative in A2.
- [CNBC — Chip shortage expected to cost auto industry $210 billion in 2021](https://www.cnbc.com/2021/09/23/chip-shortage-expected-to-cost-auto-industry-210-billion-in-2021.html)
  Secondary, wider-distribution confirmation of the same AlixPartners figures, same date.

## Knowledge — Business models & economics

- [Electrek — Tesla launches FSD subscription for $199/month](https://electrek.co/2021/07/16/tesla-launches-full-self-driving-subscription-package-199-per-month/) (Jul 16, 2021)
  **Use for**: the cleanest dated proof point of automotive software-as-recurring-revenue.
- [BMWblog — BMW Sticking With Subscription Plan Despite Controversy](https://www.bmwblog.com/2022/08/08/bmw-sticking-with-subscription-plan-despite-controversy/) (Aug 2022) and [TechCrunch — BMW feels the heat, stops charging for warming cheeks](https://techcrunch.com/2023/09/07/bmw-feels-the-heat-stops-charging-for-warming-cheeks/) (Sept 2023)
  **Use for**: the heated-seats-subscription backlash and its resolution — a good "hardware you already paid for" cautionary case.
- [The Drive — Mercedes Makes Better Performance a $1,200 Subscription in its EVs](https://www.thedrive.com/news/mercedes-makes-better-performance-a-1200-subscription-in-its-evs) (Nov 2022)
  **Use for**: a parallel subscription-backlash example, same season as BMW's.
- [GM Authority — GM OnStar Revenue Up 65 Percent In 2025](https://gmauthority.com/blog/2026/01/gm-onstar-revenue-up-65-percent-in-2025/)
  12M OnStar subscribers, 620K+ Super Cruise subscribers, $5.4B deferred OnStar revenue. **Use for**: a working-at-scale example of the subscription model — trade outlet, cross-check against GM's own investor-relations materials/earnings call before quoting precisely.

## Knowledge — Legacy OEM programs

- [Volkswagen Group — Volkswagen strengthens new software organization](https://www.volkswagen-group.com/en/press-releases/volkswagen-strengthens-new-software-organization-17007) (Nov 21, 2019)
  Founding of what became Cariad. **Use for**: the start of the Cariad timeline.
- [TechCrunch — Volkswagen shakes up software arm Cariad — again](https://techcrunch.com/2023/05/08/volkswagen-shakes-up-software-arm-cariad-again/) (May 8, 2023)
- [InsideEVs — VW Group's Cariad Software Division Had A Bad Year. Again](https://insideevs.com/news/753673/vw-group-cariad-billions-losses-2024/)
  2024 operating loss $2.64B on $1.44B revenue; 2022–2024 cumulative losses >$7.5B against ~$3.5B revenue. **Use for**: the hard financial numbers behind the Cariad cautionary tale.
- [electrive.com — VW reassigns Cariad as coordinator of Rivian and Xpeng software](https://www.electrive.com/2025/10/06/vw-reassigns-cariad-as-coordinator-of-rivian-and-xpeng-software/) (Oct 6, 2025)
- [Volkswagen Group — One year after its founding: JV with Rivian shows strong progress](https://www.volkswagen-group.com/en/press-releases/one-year-after-its-founding-joint-venture-between-volkswagen-group-and-rivian-shows-strong-progress-19980) and [Electrek — VW's JV with Rivian hits latest milestone, unlocking another $1B](https://electrek.co/2026/03/27/volkswagen-groups-joint-venture-with-rivian-hits-latest-milestone-unlocking-another-1b-for-the-ev-automaker/) (Mar 27, 2026)
  **Use for**: the Rivian–VW JV, the largest single SDV business transaction covered in this research pass — deal terms also cross-check against [Rivian's SEC 8-K](https://www.sec.gov/Archives/edgar/data/1874178/000119312524256108/d812333d8k.htm).
- [Automotive News — Toyota's Arene, debuting in the 2026 RAV4](https://www.autonews.com/toyota/an-toyota-arene-software-operating-system-rav4-woven-0521/) (May 21, 2025)
- [Autoblog/CBT News — Ford scraps FNV4 software program after $10 billion in losses](https://www.cbtnews.com/ford-scraps-key-software-program-after-10-billion-in-losses/) (~May 2025)
  **Use for**: the clearest "SDV program cancellation" case — note Ford continued incremental SDV delivery on its existing FNV3.X platform even after killing the ground-up rearchitecture; present as nuance, not a flat retreat.
- [news.gm.com — GM's centralized vehicle computing platform](https://news.gm.com/home.detail.html/Pages/news/us/en/2025/oct/1022-UM-GM-eyes-off-driving-conversational-AI-unified-software-platform.html) (Oct 2025)

## Knowledge — China & challengers

- [Businesswire — Wards Intelligence SDV ranking: Tesla maintains lead but Chinese automakers close the gap](https://www.businesswire.com/news/home/20250205794200/en) (Feb 5, 2025)
  NIO and Xiaomi surpass Tesla on the innovation sub-metric; 62% of Leaders/Strong Contenders are Chinese or Chinese-owned. **Use for**: the single best-sourced "who's ahead" data point.
- [AlixPartners — SDV Survey 2026](https://www.alixpartners.com/newsroom/sdv-survey-2026/) (April 8, 2026, 1,002 executives surveyed)
  Chinese OEMs materially ahead on internal sourcing, decoupled tech stacks, and software reuse. **Use for**: the most current quantified evidence for the "China ahead" consensus — pair with the NOTES.md flag that no strong contrarian source was found rebutting this.
- [Forbes — As Tesla Waits For China FSD, BYD Unveils "God's Eye" Autonomy For All](https://www.forbes.com/sites/nicolekobie/2025/02/14/) (Feb 14, 2025)
- [ChinaEVHome — NIO's SkyOS](https://chinaevhome.com/2025/09/28/nios-skyos-awarded-as-a-global-nev-innovation-technology-1/) (Sept 28, 2025)
- [CnEVPost — Xpeng's in-house Turing chip](https://cnevpost.com/2025/04/15/xpeng-to-start-using-turing-chip-q2-report/) (Apr 15, 2025)
- [MarkLines — Huawei: Intelligent driving systems, cockpits, electrification](https://www.marklines.com/en/report/rep2850_202505) (May 2025)
  **Use for**: Huawei's deliberate supplier-not-carmaker strategy (Ren Zhengfei's 2020 internal resolution) and the HIMA partner alliance.

## Knowledge — Suppliers, chips & platforms

- [Continental — Group Sector Automotive introduces itself as AUMOVIO](https://www.continental.com/en/press/press-releases/20250731-iaamobility2025/) (2025) — spin-off, began independent trading Sept 18, 2025.
- [Forbes — ZF Joins Bosch In Layoffs As Europe's EV Pushback Bites](https://www.forbes.com/sites/michaeltaylor/2025/10/02/) (Oct 2, 2025)
- [Qualcomm onQ — Snapdragon automotive market traction and scale](https://www.qualcomm.com/news/onq/2026/03/snapdragon-automotive-market-traction-and-scale) (March 2026) — automotive revenue crossed a $5B annualized run rate.
- [CNBC — Nvidia adds Hyundai, BYD and other automakers to self-driving tech business](https://www.cnbc.com/2026/03/16/nvidia-hyundai-byd-nissan-self-driving-tech.html) (March 16, 2026)
- [Applied Intuition — Series F press release](https://www.appliedintuition.com/press-releases/series-f) (June 2025) — $600M at $15B valuation.
- [Motley Fool — BlackBerry Q4 2025 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/04/08/blackberry-bb-q4-2025-earnings-call-transcript/) (April 8, 2026) — QNX in 275M+ vehicles.
- [ABI Research — Fewer than 6% of AAOS vehicles will include full Google Automotive Services in 2025](https://www.abiresearch.com/press/less-6-new-vehicles-shipped-android-automotive-os-will-feature-google-automotive-services-2025)
- [AWS/Amazon Press Center — Nissan's AWS-powered SDV platform](https://press.aboutamazon.com/aws/2025/12/nissan-accelerates-software-defined-vehicle-development-and-strengthens-ai-development-environment-with-new-aws-powered-platform) (Dec 2025)

## Knowledge — Regulation & standards

- [Umbrex — What is UNECE WP.29?](https://umbrex.com/resources/umbrex-explainers/automotive-mobility-explainers/unece-wp-29/)
- [Applus Laboratories — UNECE WP.29 R155/R156: new cybersecurity regulations for vehicles](https://www.appluslaboratories.com/global/en/news/publications/new-cybersecurity-regulations-vehicles-unece-wp29)
  R155 (Cybersecurity Management System) and R156 (Software Update Management System), adopted June 2020, mandatory for all new vehicles produced from July 2024 in UNECE contracting markets (not the US). **Use for**: the compliance skeleton behind OTA and cybersecurity claims.
- [PTC — An Overview of ISO 21434 for Automotive Cybersecurity](https://www.ptc.com/en/blogs/alm/iso-21434-for-automotive-cybersecurity)
- [Grapeup — EU Data Act vehicle guidance 2025](https://grapeup.com/blog/eu-data-act-vehicle-guidance-2025-what-automotive-oems-must-share-by-september-2026)
  Vehicle-specific data-sharing obligations apply from Sept 12, 2026. **Use for**: the "who controls vehicle data" regulatory angle, distinct from cybersecurity.

## Wisdom (Communities & ongoing sources)

- [Eclipse SDV Working Group](https://sdv.eclipse.org/) — open-source community and standards effort (includes the S-CORE project referenced by several OEMs/suppliers). **Use for**: seeing where open collaboration is happening across competing OEMs.
- [COVESA — Connected Vehicle Systems Alliance](https://covesa.global/) — cross-industry alliance on connected-vehicle data standards (formerly GENIVI). **Use for**: the standards/data-interop side of the ecosystem.
- [SAE International](https://www.sae.org/) — the standards body behind the autonomy-level framework PwC's SDV maturity model is explicitly modeled on; publishes automotive software/E&E conferences and standards.
- [Automotive News](https://www.autonews.com/) and [WardsAuto / Wards Intelligence](https://www.wardsauto.com/) — the two trade-press outlets that produced the most-cited "who's ahead" analyst rankings in this research pass. **Use for**: an ongoing habit of checking who's currently leading.
- [McKinsey Center for Future Mobility](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility) — periodically updated market-sizing and landscape research. **Use for**: resetting the yearly baseline, similar to Stanford HAI's role in the `ai-economy` course.

## Gaps (things not yet resolved — see NOTES.md for full detail)

- No primary-sourced origin for the term "software-defined vehicle" itself.
- The "Cariad €1.2 trillion by 2030" figure is likely a misattributed industry-wide TAM statistic — do not repeat as a Cariad-specific claim without further verification.
- No contrarian source found on the "China is ahead on SDV" consensus — worth an explicit search before treating it as fully settled in a lesson.
- Several figures (McKinsey market sizing, Bosch/ZF job cuts, Cariad layoff counts) are approximate/contested across sources — present as ranges, not precise numbers.
