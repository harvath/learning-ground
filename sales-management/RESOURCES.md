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

## Knowledge — 経営指標（セグメント分析・生産性・失注・予測・季節性）

- [HubSpot — "The top performance metrics sales pros are tracking"](https://blog.hubspot.com/sales/sales-performance-metrics)
  営業パフォーマンス指標の年次サーベイ。**使いどころ**：メンバー別効率の指標設計、何を追う組織が多いかの相場観。
- [Sendspark — "Sales Rep Productivity Metrics: Complete Guide"](https://blog.sendspark.com/sales-rep-productivity-metrics)
  活動指標（コール数・メール数）と成果指標（パイプライン・クオータ達成率）の対比、activity-to-outcome比の考え方。**使いどころ**：メンバー別効率レッスンの土台。
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

## Gaps（今後埋めたい）

- ZACなど日本製ERP/SFAの一般的な機能範囲についての高品質な一次情報が未特定。Twentyとの比較で「従来型はこう」と言う場面のために、次回以降に探す。
- 日本のBtoB営業に特化した高信頼コミュニティ（実務者が指標設計を議論する場）は未探索。Wisdom枠として次回以降に探す。
- Twentyの標準ダッシュボード／レポート機能（ネイティブでどこまでセグメント分析・予測ができるか）の一次ドキュメントは未確認。Unit Cで深掘りする際に調査する。

## Wisdom（Communities）

- 現時点で未選定。ユーザーは実務案件としてこのコースを使っており、コミュニティ参加の希望は聞いていない。要望があれば r/sales・RevOps系コミュニティなどを候補として探索する。
