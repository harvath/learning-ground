# RESOURCES — 営業管理（セールスマネジメント）

このコースの拠り所となる情報源。特に指標の定義・計算式は、記憶ではなくここに挙げた一次情報を優先する。

## Knowledge — パイプライン・案件管理の基礎

- [Salesforce — "What are the Stages of a Sales Pipeline?"](https://www.salesforce.com/sales/pipeline/stages/)
  パイプラインステージの標準的な考え方（Lead→Qualification→Proposal→Negotiation→Closed）。**使いどころ**：ステージ設計の型を確認するとき。
- [HubSpot — "Sales Velocity: What It Is & How to Measure It"](https://blog.hubspot.com/sales/sales-velocity)
  案件の「4つのV」（Volume/Value/Velocity/Conversion）の元になっているSales Velocityの式（案件数×平均金額×勝率÷商談期間）を明確に定義している。**使いどころ**：パイプライン健全性の指標を説明するとき。
- [Pipedrive — "Building a Sales Pipeline: Ultimate Guide"](https://www.pipedrive.com/en/blog/sales-pipeline-fundamental-stages)
  実務寄りのステージ例とパイプライン運用の基本。**使いどころ**：業種による典型的ステージ差を確認するとき。
- [Scratchpad — "BANT vs MEDDIC"](https://www.scratchpad.com/blog/bant-vs-meddic)
  リード・案件の「クオリフィケーション」フレームワーク比較。BANT（Budget/Authority/Need/Timeline）とMEDDIC（Metrics/Economic Buyer/Decision Criteria/Decision Process/Identify Pain/Champion）の使い分け。**使いどころ**：「案件化」の判断基準を設計するとき。
- [Apollo — "How Do You Map a B2B Buying Committee?"](https://www.apollo.io/insights/how-do-i-identify-decision-makers-and-buying-committee-members-within-a-target-account)
  購買委員会の規模（他調査の引用含め9〜19人）と6つの役割（Economic Buyer/Technical Evaluator/End-User Champion/Procurement-Legal/Executive Sponsor/Internal Validator）を整理。**使いどころ**：MEDDICのEconomic Buyer/Championを、より広い合議体の中に位置づけるとき。
- [DealHub — "What is an Account Hierarchy?"](https://dealhub.io/glossary/account-hierarchy/)
  本社・子会社・部門というアカウント階層の定義と、管理しない場合の実務上の摩擦（テリトリー衝突・重複営業）。**使いどころ**：顧客企業の組織構造をデータモデルに落とすとき。
- [Method — "Sales Activity Tracking: Ultimate Guide"](https://www.method.me/blog/sales-activity-tracking/)
  活動記録が着地予測の先行指標になるという考え方と、自動化の重要性。**使いどころ**：活動管理レッスンの土台。
- [Weflow — "Sales Activity Tracking: KPIs, Setup, and Best Practices"](https://www.weflow.ai/blog/sales-activity-tracking)
  「手動記録は続かない、自動化がソースで捕捉する」という実務原則。**使いどころ**：自動化と手動記録の分担を説明するとき。
- [Zuora — "What Is Quote-to-Cash (Q2C)?"](https://www.zuora.com/glossary/quote-to-cash/)
  CRM（案件・見積）とERP（注文・請求・収益計上）の責任分担の定義。**使いどころ**：CRMとERPの境界線を説明するとき。
- [Clarity — "SAP CPQ Integration Explained: CRM, ERP & Quote-to-Cash Boundaries"](https://www.clarity.cx/blog/erp-and-sap-cpq-integration-where-boundaries-sit-and-why-they-matter/)
  境界が曖昧なまま設計すると機能が重複し意思決定が分裂する、という実務上の警告。**使いどころ**：Twenty内に何を作り込むかの判断を説明するとき。
- [Salesforce — "Revenue Cloud Billing"](https://www.salesforce.com/sales/revenue-cloud-billing/)
  標準のSales Cloudには請求・入金機能が無く、Revenue Cloud Billingという別売り製品が担うという公式情報。**使いどころ**：TwentyとSalesforceがQuote-to-Cashの境界という点で構造的に同じであることを示すとき。
- [株式会社オロ — ZAC機能一覧](https://www.oro.com/zac/function/)
  原価管理・購買管理・経費管理・請求書発行・SFA/CRM（コンタクト管理）が最初から同じ製品内に同居する、統合型ERPとしての構造。**使いどころ**：CRMとERPを分けるTwenty/Salesforceの構造と対比するとき。

## Knowledge — 経営指標（セグメント分析・生産性・失注・予測・季節性）

- [TWSales — "How to Define Your Ideal Customer Profile (ICP) as a Startup"](https://twsales.com/founder-led-sales-icp/)
  データがまだ無い段階でのICP仮説の作り方。仮説に合う見込み客50〜100社に直接アプローチして検証する、という具体的な手法。**使いどころ**：セグメント分析を「売り始める前」の段階から説明するとき。
- [CRO Expert — "ICP Sharpening: Stop Chasing Deals You Can't Win"](https://cro.expert/blog/icp-sharpening-stop-chasing-wrong-deals)
  受注・失注（理由付き）・チャーン（12か月以内）を3つ揃えて分析する手法。受注だけで判断する危険性（解約アカウントの65%が「コア」業種に集中していた実例）と、四半期・半期・年次・イベント起点の見直しサイクル。**使いどころ**：セグメント分析を「データが溜まった後」どう反復運用するか説明するとき。
- [Factors.ai — "Customer Profiling and Segmentation: The B2B SaaS GTM Guide"](https://www.factors.ai/blog/customer-profiling-and-segmentation)
  ファーモグラフィックセグメンテーションの土台となる5つの軸（業種・企業規模〈従業員数または売上〉・地域・成長段階・所有形態）。価格帯を層ごとに変える具体例あり。**使いどころ**：セグメント分析レッスンの土台。軸の一覧は正確に5つとして引用すること（4つに削ったり、企業規模を2軸に分けたりしない）。
- [Vena — "Average Revenue per Employee by Industry: 2026 Benchmarks"](https://www.venasolutions.com/blog/average-revenue-per-employee)
  従業員一人あたり売上の業種別ベンチマーク（病院約8,700ドル〜エンタメ系ソフトウェア約176万ドル）。**使いどころ**：企業規模を「従業員数」と「売上」の2通りで見る理由を、数字で裏付けるとき。
- [Tomba — "Company Sizes: SMB vs Mid-Market vs Enterprise"](https://tomba.io/blog/company-sizes)
  従業員数は公開情報として入手しやすい一方、売上は予算・案件規模を反映するという、2指標の使い分けの実務的な理由。**使いどころ**：企業規模の測り方を説明するとき。
- [ZoomInfo — "What Is an Ideal Customer Profile? ICP Guide for B2B"](https://pipeline.zoominfo.com/marketing/ideal-customer-profile)
  ICPの作り方（既存優良顧客のfirmographicデータから抽出）と、ICP適合アカウントのパイプライン到達率が43%高いという実例。**使いどころ**：セグメンテーション軸がICP・リソース配分にどう繋がるかを具体的に説明するとき。
- [SalesIntel — "Firmographic Segmentation: A B2B Marketing Guide"](https://salesintel.io/blog/firmographic-segmentation/)
  セグメンテーションがデータ品質に依存するという論点。**使いどころ**：セグメント分析の運用上の注意点を説明するとき。
- [HubSpot — "The top performance metrics sales pros are tracking"](https://blog.hubspot.com/sales/sales-performance-metrics)
  2026年、1,000人以上の営業担当者を対象にした調査。粗利率55%・YoY成長率53%・クオータ達成率42%・勝率42%など、何が実際にどれだけ追われているかの実数。**使いどころ**：「指標として存在する」と「実際に追われている」の差を示すとき。
- [Forecastio — "Sales Capacity Planning: Strategic Guide for 2026"](https://forecastio.ai/blog/sales-capacity-planning)
  営業担当の実売り時間は全体の約28%（Salesforce調査の引用）。活動の「件数」と「稼働（時間）」が別物である理由。**使いどころ**：Task件数集計が稼働管理の代わりにならない理由を説明するとき。
- [Sendspark — "Sales Rep Productivity Metrics: Complete Guide"](https://blog.sendspark.com/sales-rep-productivity-metrics)
  アクティビティ指標（入力＝努力の量）とアウトカム指標（出力＝成果）の対比。「架電80件で成約ゼロ＝活動の問題／クオータ達成だが事務作業に10時間＝効率の問題」という診断フレーム。**使いどころ**：メンバー別効率レッスンの土台。
- [Count.co — "Sales Quota Attainment: Formula & Improvement"](https://count.co/metric/sales-rep-quota-attainment)
  クオータ達成率の計算式（実績÷クオータ×100）。**使いどころ**：達成率系KPIの定義を揃えるとき。
- [Klue — "The Ultimate 7-Step Guide to Win-Loss Analysis"](https://klue.com/blog/win-loss-analysis-guide)
  営業担当の6割が自分の失注理由を部分的・完全に誤解しているという調査、CRMのドロップダウン選択への批判、買い手への直接インタビューと「Five Whys」による深掘り手法。**使いどころ**：失注インパクト分析レッスンの土台、営業担当の自己申告を鵜呑みにできない理由を説明するとき。
- [Product Marketing Alliance — "8 tips for effective win loss analysis"](https://www.productmarketingalliance.com/8-tips-for-effective-win-loss-analysis/)
  失注分析を戦略的インサイトに変える実務Tips。**使いどころ**：失注理由の「使われ方」（製品・営業プロセス・競合）を整理するとき。
- [Forecastio — "Root Cause Analysis of Lost Deals"](https://forecastio.ai/blog/how-to-conduct-a-root-cause-analysis-of-closed-lost-deals)
  CRMの表面的な失注理由（価格・機能不足・競合負け）は、ディスカバリー不足・デモの失敗・マルチスレッディング不足等の営業プロセス上の根本原因の「症状」でしかない、という批判的な指摘。**使いどころ**：失注理由フィールドの限界を説明するとき。
- [DealHub — "What are Stalled Opportunities?"](https://dealhub.io/glossary/stalled-opportunities/)
  停滞案件の定義・兆候（活動記録の欠如、成約予定日の後ろ倒し）・しきい値の目安（平均滞留日数の1.5倍、セグメント別）。**使いどころ**：失注ですらない「消えた案件」を扱うとき。
- [I'mBoard — "Deals Lost Value: Definition & Benchmark"](https://www.imboard.ai/kpis/closed-lost-value)
  Closed-Lost Valueの計算式（Σ案件金額）と、金額上位（80パーセンタイル）に絞って深掘りするという優先順位づけの実務。**使いどころ**：機会損失額の計算方法を説明するとき。
- [rework.com（旧iSEEit）— "Pipeline Forecast Categories: Commit & Best Case"](https://resources.rework.com/libraries/pipeline-management/forecast-categories)
  フォーキャストカテゴリ（Closed/Commit/Best Case/Pipeline/Omitted）の定義、担当者判断とマネージャーレビューの役割分担、ステージとの別軸性。**使いどころ**：着地予測レッスンの土台。
- [rework.com — "Weighted Pipeline: How to Forecast Sales Revenue Accurately"](https://resources.rework.com/libraries/pipeline-management/weighted-pipeline)
  加重パイプラインの式（金額×確度）と構造的弱点（案件固有の事情を無視、サンドバッギングの温床）。**使いどころ**：着地予測の計算方法と限界を説明するとき。
- [ORM — "CRM Stage Probability vs Historical Conversion Rates"](https://orm-tech.com/blog/crm-stage-probability-vs-historical-conversion-rates)
  ステージ確度は「設定値」ではなく「実測値」であるべき理由、実測の計算式（ステージ入場数を分母にする）、停滞パイプラインが予測を歪める問題。**使いどころ**：着地予測の精度を左右する最重要ポイントを説明するとき。
- [Cogsy — "Ecommerce Guide to Seasonal Demand Forecasting"](https://cogsy.com/demand-planning/forecasting-seasonal-demand/)
  季節性の一般的な定義。定量・定性の予測手法の大枠のみで、YoY比較や移動祝日の具体的な手法は扱っていない（直接検証済み、2026-08-19）。**使いどころ**：季節性の導入レベルの参照のみ。
- [Nutshell — "Understanding 'Seasonality' in Sales"](https://www.nutshell.com/blog/sales-seasonality-definition-and-causes)
  季節性の見つけ方（3年分のチャート）と、B2B特有の季節要因（期末予算消化、四半期末の追い込み、夏の停滞、顧客の季節性の継承）。**使いどころ**：季節性レッスンの土台。
- [peasy.nu — "Year-end budget spending patterns in B2B"](https://www.peasy.nu/blog/year-end-budget-spending-patterns-in-b2b)
  「使い切らないと来年の予算が減らされる」というB2B期末予算消化のメカニズム。ページ内の具体的な統計値（Q4増加率等）は出典が明示されていないため引用しない。**使いどころ**：期末駆け込み需要のメカニズムを説明するとき。
- [Statistics Canada — "Seasonal adjustment: Concepts and interpretation"](https://www150.statcan.gc.ca/n1/pub/19-20-0001/192000012026001-eng.htm)（2026年）
  移動祝日効果・カレンダー効果の一次情報。イースターの日付変動（2023年4月9日→2024年3月31日）を使った具体例、季節調整の定義。政府統計機関による高信頼ソース。**使いどころ**：YoY比較が壊れる理由を具体例で説明するとき。

## Knowledge — 日本語のSFA/KPI実務解説

- [Mazrica Sales — 「営業KPIとは？成果に直結する設定方法・指標例」](https://mazrica.com/product/senseslab/management/kpi/)
  BtoB／BtoCそれぞれで重視されるKPIの違い（商談件数・案件化率 vs 訪問数・成約率）。**使いどころ**：日本の商習慣に即したKPI設計の相場観を掴むとき。
- [SFA JOURNAL — 「営業KPIの例は？成果につながる指標の考え方と設定方法」](https://next-sfa.jp/journal/basic-knowledge/sfa-basic-knowledge/sales-kpi-examples-guide/)
  営業プロセスの見える化とKPIの関係。**使いどころ**：指標をプロセスのどの段階に紐づけるかを整理するとき。
- [GENIEE's library — 「営業管理に欠かせない指標の設定から達成までのポイント」](https://geniee.co.jp/media/management/sales_management_point/)
  日本企業向けの営業管理指標の実務解説。**使いどころ**：クライアントとの要件ヒアリングで使う語彙を日本語で揃えるとき。

## Knowledge — Twentyのデータモデル

- [Twenty Docs — Setup (Multi-Workspace Mode)](https://docs.twenty.com/developers/self-host/capabilities/setup)
  Workspaceが独立したチーム・組織ごとのテナント空間であることの一次情報。**使いどころ**：Owner等「Workspace内のメンバー」という表現が出てきたときの前提知識として。
- [Twenty Docs — Data Model Overview](https://docs.twenty.com/user-guide/data-model/overview)
  標準オブジェクト（People/Companies/Opportunities/Tasks/Notes）、リレーションの考え方。**使いどころ**：一般的な案件データ構造とTwentyのオブジェクトを対応づけるとき。
- [Twenty Docs — Objects](https://docs.twenty.com/user-guide/data-model/capabilities/objects)
  Opportunitiesオブジェクトの標準的な役割（ステージ・案件規模・関連会社・成約予定日、カンバン表示）とカスタムオブジェクトの作り方。**使いどころ**：失注理由・フォーキャストカテゴリなど、標準にない属性をどう追加するか検討するとき。
- [Twenty Docs — Fields](https://docs.twenty.com/user-guide/data-model/capabilities/fields)
  フィールドの型（テキスト・数値・日付・選択・複数選択・リレーションなど）。**使いどころ**：指標算出に必要なフィールド型を設計するとき。
- [Twenty Docs — Create Custom Fields](https://docs.twenty.com/user-guide/data-model/how-tos/create-custom-fields)
  カスタムフィールドの作成手順。**使いどころ**：Unit Cで実際の設定演習を行うとき。
- [GitHub — twentyhq/twenty](https://github.com/twentyhq/twenty)
  Twenty本体のOSSリポジトリ。「Salesforceのオープンな代替」を標榜。**使いどころ**：バージョンや機能の最新状況を確認するとき（動きが速い領域なので日付を明記する）。
- [Twenty Docs — "Why Twenty"](https://docs.twenty.com/getting-started/introduction)
  「platform you can build on, not a product you configure」という設計思想の一次情報。**使いどころ**：Twentyが特定オブジェクト（Lead等）を持たない理由を説明するとき。
- [TechCrunch — "Twenty is building an open source alternative to Salesforce"](https://techcrunch.com/2024/11/18/twenty-is-building-an-open-source-alternative-to-salesforce/)（2024年11月）
  創業者Félix Malfaitへのインタビュー。Salesforceの強さを「柔軟なデータモデル・Apex・フロントエンドカスタマイズ」の3要素に分解し、Twentyがその3要素の再現を狙っていると明言。**使いどころ**：Twentyの設計判断の「なぜ」を説明するとき。
- [Twenty Releases](https://twenty.com/releases)
  バージョンごとの変更履歴。多対多リレーション（v1.16.0, 2026年1月）や柔軟なリレーション（v1.11.0, 2025年11月）など、データモデル機能の進化を日付付きで追える。**使いどころ**：Twentyの機能について「いつから」を確認するとき（動きが速い領域）。
- [GitHub — twentyhq/twenty PR #10459](https://github.com/twentyhq/twenty/pull/10459)
  Lead限定の変換機能を実装した実際のPR。創業者Félix Malfaitが「ワークフローのフォーム機能でもっと抽象的に実現できる」として却下したやり取りそのものが読める。**使いどころ**：プラットフォーム思想が実際の意思決定にどう表れるかを示すとき。
- [Twenty Docs — Workflows Overview](https://docs.twenty.com/user-guide/workflows/overview)
  トリガー（レコード作成/更新/削除・スケジュール・手動・Webhook）とアクション（Formアクション含む）の一覧。**使いどころ**：Lead Convert相当の機能をワークフローで組む方法を説明するとき。
- [GitHub — twentyhq/twenty Issue #14611](https://github.com/twentyhq/twenty/issues/14611)（2025年9月）
  ワークフローのFormアクションが、レコード更新トリガー後に実行者へ表示されない不具合。**使いどころ**：「抽象化された解決策」の実際の完成度・限界を示すとき。
- [Twenty Docs — Detect Stale Opportunities](https://docs.twenty.com/user-guide/workflows/how-tos/crm-automations/detect-stale-opportunities.md)
  スケジュールトリガー＋Search Recordsアクションで停滞案件を検知し、担当者別にメール通知するワークフローの具体的な組み方。**使いどころ**：失注分析レッスンで停滞案件の自動検知を説明するとき。
- [Twenty Docs — Track How Long Opportunities Stay in Each Stage](https://docs.twenty.com/user-guide/views-pipelines/how-tos/track-time-in-stage.md)
  「Last Entered」日付フィールドと「Days in」数値フィールドでステージ滞留日数を追跡する方法。Table Viewのソート・Kanbanの平均集計での活用。**使いどころ**：パイプラインのボトルネックを特定する方法を説明するとき。
- [Twenty Docs — Show Expected Amount in Your Pipeline](https://docs.twenty.com/user-guide/views-pipelines/how-tos/show-expected-amount-in-pipeline.md)
  Probability・Expected Amountはどちらも標準搭載ではなく、カスタムフィールド＋ワークフロー2本（Stage変更時にProbabilityをセット／Amount変更時にExpected Amountを再計算）で組む具体的手順。**使いどころ**：着地予測をTwentyでどう実装するか説明するとき。
- [Twenty Docs — Formula Fields](https://docs.twenty.com/user-guide/workflows/how-tos/crm-automations/formula-fields)
  ネイティブな数式フィールドは2026年内に追加予定（本記事の時点では未実装）で、現状はワークフローのコードアクションで代替するという注記。**使いどころ**：Expected Amountの計算方法と、今後変わりうる点を示すとき（動きが速い領域）。
- [Twenty Docs — Chart Settings](https://docs.twenty.com/user-guide/dashboards/capabilities/chart-settings)
  Dashboard ChartのDate granularity設定（Day/Week/Month/Quarter/Year、およびDay of week/Month of year/Quarter of yearという複数年横断の粒度）。**使いどころ**：季節性・YoY比較をTwenty上でどう組むか説明するとき。
- [codeline.co — "Twenty: Building a CRM where the data model is runtime, not code"](https://www.codeline.co/thoughts/repo-review/2024/twenty-open-source-crm)
  独立した技術者によるTwentyのコードベース分析。メタデータ駆動アーキテクチャ（オブジェクト定義がfieldMetadataテーブルにデータとして保存され、GraphQLスキーマが実行時に生成される仕組み）とworkspace-as-schemaのマルチテナンシーを、具体的なコードパスまで踏み込んで説明。**使いどころ**：「プラットフォームであり製品ではない」の技術的根拠を説明するとき。
- [Twenty Docs — Relation Fields](https://docs.twenty.com/user-guide/data-model/capabilities/relation-fields)
  リレーションの3カーディナリティ（One-to-Many/Many-to-One/Many-to-Many）とJunction Relation機能（中間オブジェクトをUIから隠す、執筆時点でベータ）の公式ドキュメント。**使いどころ**：A3の中間オブジェクトパターンを正式な用語で説明するとき。
- [Twenty Docs — Permissions & Access Overview](https://docs.twenty.com/user-guide/permissions-access/overview)
  ロール／オブジェクト権限／フィールド権限の3層構造。**使いどころ**：B6のダッシュボード3層設計を、実際のアクセス制御に落とし込むとき。
- [Twenty Docs — Create a Table View with Grouping](https://docs.twenty.com/user-guide/views-pipelines/how-tos/create-a-table-view-with-grouping)
  Group By機能の公式How-to。「CompaniesをIndustryでグループ化」という、まさにセグメント分析そのものの例が載っている。表示グループ10〜15個の推奨上限も明記。**使いどころ**：セグメント分析をTwenty上でどう組むか説明するとき。
- [Twenty Docs — Dashboards](https://docs.twenty.com/getting-started/core-concepts/dashboards)
  Chart種類（棒・折れ線・円・数値等）、集計（Count/Sum/Average/Min/Max）、Filter・Group Byの組み合わせ方。**使いどころ**：Group Byでは対応しきれない規模のセグメント分析を説明するとき。

- [Salesscreen — "Sales Reporting Cadence: How to Build One That Drives Action"](https://www.salesscreen.com/blog/sales-reporting-cadence-how-to-build-one-that-drives-action)
  担当者（日次）／マネージャー（週次）／経営層（月次〜四半期）の3層カデンス、先行指標と遅行指標の区別。**使いどころ**：ダッシュボード設計レッスンの中核。
- [Improvado — "Dashboard Design: Best Practices & How-Tos 2026"](https://improvado.io/blog/dashboard-design-guide)
  指標を絞る判断軸（行動につながるか・頻繁に必要か）とバニティメトリクスの考え方。具体的な数値（KPI上限数等）は出典不明のため参考程度に。**使いどころ**：ダッシュボードに何を載せ、何を外すか説明するとき。
- [Twenty Docs — Dashboards Overview](https://docs.twenty.com/user-guide/dashboards/overview)
  Dashboard／Tab／Widgetの構造、用途別に複数Dashboardを持てる設計、社外共有・エクスポート未対応という現時点の制約。**使いどころ**：Unit B全体をTwenty上でどう組織化するか説明するとき。

## Gaps（今後埋めたい）

- 日本のBtoB営業に特化した高信頼コミュニティ（実務者が指標設計を議論する場）は未探索。Wisdom枠として次回以降に探す。

## Wisdom（Communities）

- 現時点で未選定。ユーザーは実務案件としてこのコースを使っており、コミュニティ参加の希望は聞いていない。要望があれば r/sales・RevOps系コミュニティなどを候補として探索する。
