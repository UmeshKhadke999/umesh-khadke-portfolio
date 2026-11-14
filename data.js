/* ==========================================================================
   STRUCTURED DATA REPOSITORY: PROJECTS (12) & INSIGHTS ARTICLES
   All projects are explicitly labeled (Personal / Academic / Experimental)
   using simulated or publicly available benchmark datasets.
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: "proj-01",
    category: "credit",
    title: "Borrower Credit Profile Analysis",
    classification: "Personal Analytical Study",
    status: "Completed",
    tools: ["Microsoft Excel", "Power BI"],
    businessProblem: "Lending operations require standardized borrower risk stratification to separate prime applicants from marginal profiles requiring enhanced underwriting review.",
    objective: "Build a multi-factor borrower credit profiling framework evaluating credit depth, age of tradelines, inquiry velocity, and derogatory events.",
    dataset: "Simulated dataset of 1,500 anonymized U.S. residential borrower profiles modeled on standard credit bureau attributes (Synthetic / Non-Client Data).",
    methodology: "Structured data normalization in Excel, tiered rule-based risk bucketing, and interactive cohort filtering in Power BI.",
    analyticalApproach: "Segmented borrowers across 4 credit tiers using weighted scoring across tradeline seasoning, recent inquiries, and public record flags.",
    findings: "Borrowers with under 24 months of revolving tradeline seasoning exhibited 2.3x higher payment volatility despite mid-tier headline scores.",
    recommendations: "Incorporate tradeline seasoning thresholds alongside headline scores when routing files for manual underwriting review.",
    chartType: "bars",
    chartCaption: "Simulated Cohort Distribution by Credit Tier",
    chartData: [
      { label: "Tier 1 (Prime)", value: 42 },
      { label: "Tier 2 (Near-Prime)", value: 31 },
      { label: "Tier 3 (Sub-Tier)", value: 18 },
      { label: "Tier 4 (High Review)", value: 9 }
    ]
  },
  {
    id: "proj-02",
    category: "credit",
    title: "Credit Report Analysis and Evaluation",
    classification: "Personal Operational Template",
    status: "Completed",
    tools: ["Google Sheets", "Google Apps Script"],
    businessProblem: "Manual line-by-line review of multi-tradeline credit reports increases review time and risks overlooking disputed accounts or recent late-payment flags.",
    objective: "Create an automated credit report summary worksheet that flags key underwriting exceptions upon data entry.",
    dataset: "Simulated multi-bureau tradeline dataset (500 sample credit report records created for analytical testing).",
    methodology: "Built structured tradeline parsing tables in Google Sheets enhanced with Google Apps Script exception-flagging triggers.",
    analyticalApproach: "Automated checks for 30/60/90-day delinquency counts, open collections, authorized user tradelines, and monthly debt obligations.",
    findings: "Automated exception rules reduced manual screening time by approximately 35% in simulated file reviews while eliminating missed 30-day late flags.",
    recommendations: "Deploy standardized exception checklists prior to formal debt-to-income calculation to prevent downstream rework.",
    chartType: "bars",
    chartCaption: "Exception Flag Frequency in Sample Review (%)",
    chartData: [
      { label: "Clean Tradelines", value: 64 },
      { label: "Inquiry Spike", value: 19 },
      { label: "30D Late Flag", value: 11 },
      { label: "Dispute/Collection", value: 6 }
    ]
  },
  {
    id: "proj-03",
    category: "credit",
    title: "FICO Score Analysis and Segmentation",
    classification: "Academic & Personal Study",
    status: "Completed",
    tools: ["Microsoft Excel", "Power BI"],
    businessProblem: "Treating credit scores as a single continuous metric obscures risk cliffs around standard mortgage pricing and eligibility thresholds (620, 680, 740).",
    objective: "Analyze score distribution across standard U.S. mortgage FICO bands and quantify sensitivity to utilization and payment history shifts.",
    dataset: "Simulated dataset of 2,000 borrower scorecards calibrated to published FICO factor weights (35% payment history, 30% utilization, 15% length).",
    methodology: "Histogram distribution modeling, band-boundary sensitivity testing, and Power BI band drill-down.",
    analyticalApproach: "Grouped borrowers into 20-point FICO buckets to identify concentration near critical Loan-Level Price Adjustment (LLPA) cutoffs.",
    findings: "18% of sample borrowers sat within 15 points below a higher pricing tier, where minor revolving balance paydowns could improve tier placement.",
    recommendations: "Flag near-threshold borrowers early in origination to evaluate rapid rescore or balance paydown feasibility.",
    chartType: "bars",
    chartCaption: "Borrower Distribution Across FICO Bands (%)",
    chartData: [
      { label: "740+", value: 34 },
      { label: "700–739", value: 28 },
      { label: "660–699", value: 22 },
      { label: "620–659", value: 16 }
    ]
  },
  {
    id: "proj-04",
    category: "credit",
    title: "Payment Behaviour Analysis",
    classification: "Experimental Analytical Model",
    status: "Completed",
    tools: ["Microsoft Excel", "Google Sheets"],
    businessProblem: "Static point-in-time credit snapshots fail to capture whether a borrower's payment discipline is improving or deteriorating over a 24-month window.",
    objective: "Track 24-month rolling payment behavior to distinguish isolated administrative late payments from progressive repayment stress.",
    dataset: "Simulated 24-month payment string dataset across 1,000 installment and revolving accounts.",
    methodology: "Time-series string parsing in Excel using rolling 6-month and 12-month delinquency velocity indicators.",
    analyticalApproach: "Classified accounts into Stable Current, Recovered Isolated Late, and Progressive Deterioration cohorts.",
    findings: "Accounts with two consecutive 30-day late payments within 6 months showed a 44% probability of rolling into 60+ day delinquency.",
    recommendations: "Weight recent 6-month payment trend velocity more heavily than older 18–24 month isolated occurrences.",
    chartType: "line",
    chartCaption: "24-Month On-Time Payment Rate Trend (%)",
    chartData: [98, 97, 96, 95, 93, 91, 92, 94]
  },
  {
    id: "proj-05",
    category: "credit",
    title: "Delinquency Analysis",
    classification: "Personal Risk Case Study",
    status: "Completed",
    tools: ["Power BI", "Microsoft Excel"],
    businessProblem: "Portfolio managers need visibility into early-stage delinquency roll rates (Current to 30 DPD, 30 to 60 DPD, 60 to 90+ DPD) to prioritize loss mitigation.",
    objective: "Construct a delinquency transition and roll-rate matrix to monitor bucket migration across loan vintages.",
    dataset: "Publicly inspired simulated residential loan servicing dataset (3,000 synthetic loan records over 12 months).",
    methodology: "Cohort roll-rate matrix calculations in Excel feeding a Power BI vintage and delinquency dashboard.",
    analyticalApproach: "Measured month-over-month cure rates versus forward roll rates across 30, 60, and 90+ days past due buckets.",
    findings: "Cure rates dropped sharply from 68% in the 30-day bucket to 29% once loans crossed 60 days past due.",
    recommendations: "Concentrate borrower outreach and payment plan interventions within the first 15–30 days of missed payment.",
    chartType: "bars",
    chartCaption: "Simulated Cure Rate by Delinquency Bucket (%)",
    chartData: [
      { label: "30 DPD Cure", value: 68 },
      { label: "60 DPD Cure", value: 29 },
      { label: "90 DPD Cure", value: 12 },
      { label: "120+ Cure", value: 5 }
    ]
  },
  {
    id: "proj-06",
    category: "credit",
    title: "Revolving Credit Utilization Analysis",
    classification: "Personal Analytical Study",
    status: "Completed",
    tools: ["Microsoft Excel", "Google Apps Script"],
    businessProblem: "High revolving credit card utilization compresses borrower cash buffers and signals elevated reliance on short-term unsecured credit.",
    objective: "Analyze both aggregate revolving utilization and per-card max utilization across borrower income brackets.",
    dataset: "Simulated dataset of 1,200 borrower credit profiles with multi-card limit and balance structures.",
    methodology: "Calculated aggregate vs. individual tradeline utilization ratios and modeled debt-paydown scenarios.",
    analyticalApproach: "Compared borrowers with aggregate utilization below 30% against those carrying single maxed-out tradelines (>80%).",
    findings: "Borrowers with aggregate utilization under 30% but one card above 85% exhibited materially higher debt-service strain than balanced utilizers.",
    recommendations: "Monitor both aggregate utilization and individual tradeline concentration during credit evaluation.",
    chartType: "bars",
    chartCaption: "Sample Portfolio by Revolving Utilization Band (%)",
    chartData: [
      { label: "0–10%", value: 29 },
      { label: "11–30%", value: 36 },
      { label: "31–50%", value: 21 },
      { label: "50%+", value: 14 }
    ]
  },
  {
    id: "proj-07",
    category: "mortgage",
    title: "Debt-to-Income (DTI) Analysis",
    classification: "Personal Underwriting Model",
    status: "Completed",
    tools: ["Microsoft Excel", "Google Sheets"],
    businessProblem: "Accurate Front-End (Housing) and Back-End (Total) DTI calculation is critical to verifying borrower repayment capacity under U.S. mortgage guidelines.",
    objective: "Build a dynamic DTI calculator and stress-testing model incorporating PITI, HOA dues, student loans, and revolving obligations.",
    dataset: "Simulated dataset of 800 mortgage application income and liability schedules.",
    methodology: "Structured income verification worksheets (W-2 base, overtime/bonus averaging) paired with monthly debt obligation aggregation.",
    analyticalApproach: "Tested borrower DTI sensitivity to interest rate fluctuations (+50 bps to +150 bps) and variable income haircuts.",
    findings: "A 100 bps rate increase pushed 14% of borderline borrowers (41%–43% baseline DTI) above the 45% back-end threshold.",
    recommendations: "Include rate-shock DTI buffers and conservative variable-income averaging during pre-underwriting file checks.",
    chartType: "bars",
    chartCaption: "Back-End DTI Distribution in Sample Pool (%)",
    chartData: [
      { label: "< 36% DTI", value: 45 },
      { label: "36%–43%", value: 33 },
      { label: "44%–50%", value: 17 },
      { label: "> 50% DTI", value: 5 }
    ]
  },
  {
    id: "proj-08",
    category: "mortgage",
    title: "Loan-to-Value (LTV) Analysis",
    classification: "Personal Underwriting Model",
    status: "Completed",
    tools: ["Microsoft Excel", "Power BI"],
    businessProblem: "Collateral protection depends on accurate LTV and Combined LTV (CLTV) measurement across purchase and refinance transactions.",
    objective: "Analyze LTV tiers, private mortgage insurance (PMI) triggers above 80% LTV, and equity cushion sensitivity to property value changes.",
    dataset: "Simulated collateral dataset of 1,000 residential property valuations and loan amounts.",
    methodology: "Calculated LTV/CLTV matrices and modeled 5%–15% collateral valuation stress scenarios.",
    analyticalApproach: "Segmented loans into <=60%, 61–75%, 76–80%, and >80% LTV buckets to evaluate collateral risk concentration.",
    findings: "Loans clustered at exactly 80% LTV eliminated PMI requirements but required strict subordinate financing (CLTV) verification.",
    recommendations: "Enforce automated CLTV cross-checks whenever secondary liens or down-payment assistance programs are present.",
    chartType: "bars",
    chartCaption: "Loan Volume by LTV Bucket (%)",
    chartData: [
      { label: "<= 60% LTV", value: 24 },
      { label: "61–75% LTV", value: 31 },
      { label: "76–80% LTV", value: 28 },
      { label: "> 80% LTV", value: 17 }
    ]
  },
  {
    id: "proj-09",
    category: "mortgage",
    title: "Mortgage Credit Risk Dashboard",
    classification: "Personal BI Capstone",
    status: "Completed",
    tools: ["Power BI", "Microsoft Excel"],
    businessProblem: "Credit risk teams need a unified executive view combining FICO, DTI, LTV, occupancy type, and loan purpose rather than isolated spreadsheets.",
    objective: "Design an interactive Power BI dashboard synthesizing multi-dimensional mortgage credit risk indicators.",
    dataset: "Integrated simulated dataset of 2,500 residential mortgage applications across purchase and refinance channels.",
    methodology: "Star-schema data modeling in Power BI with DAX measures for weighted average FICO, weighted average LTV, and high-DTI concentration.",
    analyticalApproach: "Created cross-filtering visuals highlighting layered risk (e.g., loans combining >80% LTV with >43% DTI).",
    findings: "Layered risk combinations accounted for only 7% of total loan volume but represented over 28% of projected risk-weighted exposure.",
    recommendations: "Apply layered-risk flags in operational dashboards to prioritize senior underwriter review.",
    chartType: "bars",
    chartCaption: "Risk Layering Concentration (% of Pool)",
    chartData: [
      { label: "Low Layered Risk", value: 62 },
      { label: "Single Factor Elevated", value: 31 },
      { label: "Dual Factor Layered", value: 7 }
    ]
  },
  {
    id: "proj-10",
    category: "finance-bi",
    title: "Financial Statement Analysis",
    classification: "Academic MBA Finance Project",
    status: "Completed",
    tools: ["Microsoft Excel"],
    businessProblem: "Evaluating corporate creditworthiness or investment quality requires looking beyond top-line revenue growth to cash conversion and leverage.",
    objective: "Perform a 5-year horizontal, vertical, and ratio analysis of publicly listed manufacturing and financial services companies.",
    dataset: "Publicly available audited annual financial statements (FY2020–FY2024) from corporate filings.",
    methodology: "Common-size statement normalization, DuPont ROE decomposition, liquidity/solvency ratio modeling, and working capital cycle analysis.",
    analyticalApproach: "Decomposed Return on Equity into net profit margin, asset turnover, and equity multiplier to separate operational efficiency from leverage.",
    findings: "Identified cases where headline ROE expansion was driven primarily by rising financial leverage rather than operating margin improvement.",
    recommendations: "Pair DuPont decomposition with Operating Cash Flow-to-EBITDA conversion ratios when assessing corporate financial health.",
    chartType: "line",
    chartCaption: "5-Year Operating Margin Benchmark (%)",
    chartData: [14.2, 15.1, 14.8, 16.4, 17.1]
  },
  {
    id: "proj-11",
    category: "finance-bi",
    title: "Financial Performance Dashboard",
    classification: "Personal BI Project",
    status: "Completed",
    tools: ["Power BI", "Microsoft Excel"],
    businessProblem: "Static monthly financial packs delay variance diagnosis across revenue lines, cost centers, and budget targets.",
    objective: "Develop an interactive executive financial performance dashboard tracking Revenue, Gross Margin, OPEX, EBITDA, and Budget vs. Actual variance.",
    dataset: "Simulated multi-region corporate P&L ledger (24 months of budgeted vs. actual department figures).",
    methodology: "Built dynamic variance measures in DAX (Actual vs. Budget, YoY Growth %) with drill-down by business unit and expense category.",
    analyticalApproach: "Structured waterfall-style variance logic to isolate volume variance from operating expense overruns.",
    findings: "Visualizing department-level OPEX variance revealed that 70% of unfavorable budget variance originated in two non-revenue cost centers.",
    recommendations: "Adopt monthly automated variance alerts for expense lines exceeding 5% threshold deviation.",
    chartType: "line",
    chartCaption: "Quarterly EBITDA Margin Progression (%)",
    chartData: [18.5, 19.2, 20.1, 19.8, 21.4, 22.0]
  },
  {
    id: "proj-12",
    category: "finance-bi",
    title: "Business Intelligence Solutions & Workflow Automation",
    classification: "Experimental Operations Solution",
    status: "Completed",
    tools: ["Google Sheets", "Google Apps Script", "Power BI"],
    businessProblem: "Operational teams spend significant hours manually compiling daily production logs, checking SLA turnaround times, and emailing status summaries.",
    objective: "Engineer an end-to-end automated operational reporting pipeline connecting structured Google Sheets logs to executive dashboards.",
    dataset: "Simulated operational production and SLA tracking log (1,000 task records).",
    methodology: "Automated timestamping, SLA breach highlighting, and daily summary generation using Google Apps Script, paired with BI visualization.",
    analyticalApproach: "Measured turnaround time (TAT) distributions by process stage to pinpoint queue bottlenecks.",
    findings: "Automated validation and script-driven consolidation reduced daily reporting preparation time by ~40% in test runs.",
    recommendations: "Standardize data capture schemas at the point of entry to enable zero-touch downstream BI reporting.",
    chartType: "bars",
    chartCaption: "Process Stage Turnaround Efficiency (%)",
    chartData: [
      { label: "Within SLA", value: 88 },
      { label: "Near Threshold", value: 9 },
      { label: "SLA Exception", value: 3 }
    ]
  }
];

const INSIGHTS_DATA = [
  {
    id: "ins-01",
    topic: "U.S. Mortgage Industry Insights",
    title: "Key Documentation Checkpoints in U.S. Residential Mortgage Origination",
    summary: "An operational overview of how structured income, asset, and credit verification prevents late-stage underwriting conditions and protects loan quality.",
    readTime: "4 min read",
    date: "Operational Note",
    body: [
      "In U.S. residential mortgage operations, loan file quality is determined well before final underwriting sign-off. Missing pages on bank statements, unexplained large deposits, or inconsistent employment dates across the URLA (Uniform Residential Loan Application) and W-2 records are primary drivers of processing delays.",
      "From an operational analyst's perspective, applying a disciplined pre-underwriting verification checklist—cross-referencing borrower identity, income continuity, asset seasoning, and credit tradeline obligations—significantly reduces rework loops.",
      "Modern mortgage platforms such as AngelAi, SkyOne, and proprietary Loan Origination Systems streamline document indexing, yet analytical human verification remains essential to catch nuanced discrepancies in variable income or subordinate financing."
    ]
  },
  {
    id: "ins-02",
    topic: "Credit Risk Analysis",
    title: "Evaluating Risk Layering: Why FICO, DTI, and LTV Must Be Analyzed Together",
    summary: "Examining why single-metric underwriting cutoffs can miss compounded borrower risk when high leverage intersects with tight monthly cash flow.",
    readTime: "5 min read",
    date: "Analytical Brief",
    body: [
      "Credit risk evaluation in residential lending relies on three foundational pillars: borrower willingness to pay (credit history and FICO), capacity to pay (Debt-to-Income ratio), and collateral protection (Loan-to-Value ratio).",
      "While an applicant may satisfy individual minimum thresholds on each metric independently, risk layering occurs when multiple marginal indicators coexist—for example, an 85% LTV purchase combined with a 44% back-end DTI and thin post-closing cash reserves.",
      "Using structured segmentation matrices in Excel and Power BI enables analysts to isolate multi-factor combinations early, supporting clearer risk escalation and pricing accuracy."
    ]
  },
  {
    id: "ins-03",
    topic: "Financial Technology & Process Improvement",
    title: "Practical Workflow Automation in Operations Using Google Apps Script",
    summary: "How lightweight scripting inside Google Sheets eliminates manual reconciliation errors and standardizes operational reporting.",
    readTime: "4 min read",
    date: "Technical Note",
    body: [
      "Many operational and financial teams rely heavily on spreadsheets for daily tracking, exception logging, and quality assurance. However, manual copy-pasting and ad-hoc formatting introduce version drift and human error.",
      "Google Apps Script provides a zero-cost, enterprise-compatible automation layer directly inside Google Workspace. Simple custom functions and event triggers can enforce data validation, timestamp milestone completions, flag SLA thresholds, and compile clean summary tables automatically.",
      "When paired with structured schema design, spreadsheet automation bridges the gap between daily operational execution and executive Business Intelligence dashboards."
    ]
  }
];
