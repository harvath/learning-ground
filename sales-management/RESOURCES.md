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

- [Factors.ai — "Customer Profiling and Segmentation: The B2B SaaS GTM Guide"](https://www.factors.ai/blog/customer-profiling-and-segmentation)
  ファーモグラフィックセグメンテーションの主要な軸（業種・企業規模・地域・売上）と、複数軸を組み合わせる考え方。**使いどころ**：セグメント分析レッスンの土台。
- [SalesIntel — "Firmographic Segmentation: A B2B Marketing Guide"](https://salesintel.io/blog/firmographic-segmentation/)
  セグメンテーションがICP定義・ABM・テリトリー設計・価格帯設計に直結する理由と、データ品質への依存。**使いどころ**：セグメント分析が「分類趣味」ではなく意思決定に直結する理由を説明するとき。
- [HubSpot — "The top performance metrics sales pros are tracking"](https://blog.hubspot.com/sales/sales-performance-metrics)
  2026年、1,000人以上の営業担当者を対象にした調査。粗利率55%・YoY成長率53%・クオータ達成率42%・勝率42%など、何が実際にどれだけ追われているかの実数。**使いどころ**：「指標として存在する」と「実際に追われている」の差を示すとき。
- [Sendspark — "Sales Rep Productivity Metrics: Complete Guide"](https://blog.sendspark.com/sales-rep-productivity-metrics)
  アクティビティ指標（入力＝努力の量）とアウトカム指標（出力＝成果）の対比。「架電80件で成約ゼロ＝活動の問題／クオータ達成だが事務作業に10時間＝効率の問題」という診断フレーム。**使いどころ**：メンバー別効率レッスンの土台。
- [Count.co — "Sales Quota Attainment: Formula & Improvement"](https://count.co/metric/sales-rep-quota-attainment)
  クオータ達成率の計算式（実績÷クオータ×100）。**使いどころ**：達成率系KPIの定義を揃えるとき。
- [Klue — "The Ultimate 7-Step Guide to Win-Loss Analysis"](https://klue.com/blog/win-loss-analysis-guide)
  失注（Win-Loss）分析の進め方：バイヤーへの直接インタビュー、クローズ直後の実施、失注理由の定型カテゴリ化。**使いどころ**：失注インパクト分析レッスンの土台、失注理由フィールドの設計。
- [Product Marketing Alliance — "8 tips for effective win loss analysis"](https://www.productmarketingalliance.com/8-tips-for-effective-win-loss-analysis/)
  失注分析を戦略的インサイトに変える実務Tips。**使いどころ**：失注理由の「使われ方」（製品・営業プロセス・競合）を整理するとき。
- [rework.com（旧iSEEit）— "Pipeline Forecast Categories: Commit & Best Case"](https://resources.rework.com/libraries/pipeline-management/forecast-categories)
  フォーキャストカテゴリ（Pipeline/Best Case/Commit/Closed-Won）の定義。**使いどころ**：着地予測レッスンの土台。
- [rework.com — "Weighted Pipeline: How to Forecast Sales Revenue Accurately"](https://resources.rework.com/libraries/pipeline-management/weighted-pipeline)
  ステージ確度（win probability）を使った加重パイプライン予測の仕組みと限界。**使いどころ**：着地予測の計算方法を説明するとき。
- [Cogsy — "Ecommerce Guide to Seasonal Demand Forecasting"](https://cogsy.com/demand-planning/forecasting-seasonal-demand/)
  季節性の定義（価格・在庫・販促と独立した、暦年で繰り返す需要変動）とYoY比較の基本、移動平均・指数平滑法などの手法。**使いどころ**：季節性/YoYレッスンの土台。

## Knowledge — 日本語のSFA/KPI実務解説

- [Mazrica Sales — 「営業KPIとは？成果に直結する設定方法・指標例」](https://mazrica.com/product/senseslab/management/kpi/)
  BtoB／BtoCそれぞれで重視されるKPIの違い（商談件数・案件化率 vs 訪問数・成約率）。**使いどころ**：日本の商習慣に即したKPI設計の相場観を掴むとき。
- [SFA JOURNAL — 「営業KPIの例は？成果につながる指標の考え方と設定方法」](https://next-sfa.jp/journal/basic-knowledge/sfa-basic-knowledge/sales-kpi-examples-guide/)
  営業プロセスの見える化とKPIの関係。**使いどころ**：指標をプロセスのどの段階に紐づけるかを整理するとき。
- [GENIEE's library — 「営業管理に欠かせない指標の設定から達成までのポイント」](https://geniee.co.jp/media/management/sales_management_point/)
  日本企業向けの営業管理指標の実務解説。**使いどころ**：クライアントとの要件ヒアリングで使う語彙を日本語で揃えるとき。

## Knowledge — Twentyのデータモデル

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
- [Twenty Docs — Create a Table View with Grouping](https://docs.twenty.com/user-guide/views-pipelines/how-tos/create-a-table-view-with-grouping)
  Group By機能の公式How-to。「CompaniesをIndustryでグループ化」という、まさにセグメント分析そのものの例が載っている。表示グループ10〜15個の推奨上限も明記。**使いどころ**：セグメント分析をTwenty上でどう組むか説明するとき。
- [Twenty Docs — Dashboards](https://docs.twenty.com/getting-started/core-concepts/dashboards)
  Chart種類（棒・折れ線・円・数値等）、集計（Count/Sum/Average/Min/Max）、Filter・Group Byの組み合わせ方。**使いどころ**：Group Byでは対応しきれない規模のセグメント分析を説明するとき。

## Gaps（今後埋めたい）

- 日本のBtoB営業に特化した高信頼コミュニティ（実務者が指標設計を議論する場）は未探索。Wisdom枠として次回以降に探す。

## Wisdom（Communities）

- 現時点で未選定。ユーザーは実務案件としてこのコースを使っており、コミュニティ参加の希望は聞いていない。要望があれば r/sales・RevOps系コミュニティなどを候補として探索する。
