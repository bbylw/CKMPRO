/* 大众科普版扩展内容：症状警示 / 自测清单 / 常见问题 / 就医指南 */

/* ---------- 症状与警示信号 ---------- */

export interface SymptomCategory {
  category: string;
  icon: string;
  color: string;
  symptoms: string[];
  urgency: "attention" | "warning" | "emergency";
  description: string;
}

export const symptomCategories: SymptomCategory[] = [
  {
    category: "代谢异常信号",
    icon: "Flame",
    color: "#C75D3A",
    urgency: "attention",
    description: "出现以下信号提示代谢系统可能出了问题，建议尽早检查",
    symptoms: [
      "体重在短期内明显增加，尤其腹部脂肪增多",
      "总是感觉口渴、尿量增多（可能是血糖升高）",
      "容易疲劳、乏力，饭后特别困倦",
      "皮肤褶皱处出现黑色粗糙斑块（黑棘皮病，提示胰岛素抵抗）",
      "女性月经不规律，男性性功能下降",
    ],
  },
  {
    category: "血压与心脏警示",
    icon: "HeartPulse",
    color: "#B85C38",
    urgency: "warning",
    description: "以下症状提示心血管系统可能受到影响，应及时就医评估",
    symptoms: [
      "血压持续升高（≥ 130/80 mmHg），或服药后仍控制不佳",
      "活动后胸闷、气短，休息后可缓解（可能是心绞痛）",
      "夜间阵发性呼吸困难，需要坐起才能缓解（可能是心衰）",
      "下肢水肿，按压后凹陷不易恢复",
      "心跳不规则，感觉心慌、心悸",
    ],
  },
  {
    category: "肾脏异常信号",
    icon: "Droplets",
    color: "#2E7D6B",
    urgency: "attention",
    description: "肾脏疾病早期往往无症状，以下信号提示需要检查肾功能",
    symptoms: [
      "尿中泡沫增多，久不消散（提示尿蛋白升高）",
      "夜尿增多，每晚起夜 2 次以上",
      "眼睑或面部晨起水肿",
      "血压突然升高且难以控制",
      "不明原因贫血、乏力（肾功能下降可导致贫血）",
    ],
  },
  {
    category: "紧急就医信号",
    icon: "AlertTriangle",
    color: "#DC2626",
    urgency: "emergency",
    description: "出现以下症状请立即拨打 120 或前往急诊",
    symptoms: [
      "突发剧烈胸痛，持续 15 分钟以上不缓解（可能是心肌梗死）",
      "一侧肢体无力或麻木、说话含糊、口角歪斜（可能是卒中）",
      "突发严重呼吸困难，不能平卧（可能是急性心衰）",
      "突然意识丧失、晕厥",
      "严重腹痛伴腰背部放射痛",
    ],
  },
];

/* ---------- AI 辅助 PREVENT 风险评估 ---------- */

export interface PreventDataItem {
  name: string;
  description: string;
  source: string;
  required: boolean;
}

export const preventDataItems: PreventDataItem[] = [
  { name: "年龄", description: "您的实际年龄", source: "已知", required: true },
  { name: "性别", description: "男性或女性", source: "已知", required: true },
  { name: "收缩压（mmHg）", description: "体检时测量的高压值，如 125", source: "体检报告或家用血压计", required: true },
  { name: "总胆固醇（mg/dL）", description: "血液中总胆固醇含量，如 180", source: "血脂化验单", required: true },
  { name: "HDL 胆固醇（mg/dL）", description: "好胆固醇含量，如 45", source: "血脂化验单", required: true },
  { name: "糖化血红蛋白 HbA1c（%）", description: "反映近 3 个月平均血糖水平，如 5.8", source: "糖尿病筛查化验单", required: true },
  { name: "eGFR（mL/min/1.73m²）", description: "肾小球滤过率，反映肾脏过滤能力，如 85", source: "肾功能化验单", required: true },
  { name: "UACR（mg/g）", description: "尿白蛋白/肌酐比值，反映尿蛋白含量，如 10", source: "尿常规或尿微量白蛋白化验", required: true },
  { name: "BMI（kg/m²）", description: "体格指数 = 体重 ÷ 身高²，如 24.5", source: "体检报告或自行计算", required: true },
  { name: "是否吸烟", description: "目前是否吸烟（是/否）", source: "已知", required: true },
  { name: "是否有糖尿病", description: "是否已被诊断为糖尿病（是/否）", source: "病历或体检报告", required: true },
  { name: "是否在服用降压药", description: "是否正在服用降压药物（是/否）", source: "用药记录", required: true },
  { name: "是否在服用他汀类降脂药", description: "是否正在服用降脂药物（如阿托伐他汀、瑞舒伐他汀等）（是/否）", source: "用药记录", required: true },
  { name: "是否在服用 SGLT2 抑制剂", description: "排糖药，如达格列净/安达唐、恩格列净/欧唐宁、卡格列净/怡可安（是/否/不确定）", source: "用药记录或药盒", required: false },
  { name: "是否在服用 GLP-1 受体激动剂", description: "减肥降糖针，如司美格鲁肽/诺和泰、利拉鲁肽/诺和力、替尔泊肽/穆峰达（是/否/不确定）", source: "用药记录或注射笔", required: false },
  { name: "是否在服用 RAS 抑制剂", description: "心脏肾脏保护药，如沙库巴曲缬沙坦/诺欣妥、依那普利、缬沙坦/代文、氯沙坦/科素亚（是/否/不确定）", source: "用药记录", required: false },
  { name: "是否在服用 MRA", description: "螺内酯/安体舒通或非奈利酮/可申达（是/否/不确定）", source: "用药记录", required: false },
  { name: "是否在服用其他降糖药", description: "如二甲双胍、胰岛素、磺脲类等，请列出药名", source: "用药记录", required: false },
  { name: "是否在服用抗血小板/抗凝药", description: "如阿司匹林、氯吡格雷、利伐沙班/拜瑞妥、阿哌沙班/艾乐妥等（是/否/不确定）", source: "用药记录", required: false },
  { name: "居住地邮编", description: "用于评估社会健康决定因素（SDOH）", source: "已知", required: false },
];

export interface AIPromptTemplate {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

export const aiPromptTemplates: AIPromptTemplate[] = [
  {
    id: "prevent-10yr",
    title: "PREVENT 10 年风险评估",
    description: "计算未来 10 年心血管疾病、动脉粥样硬化和心衰的风险",
    prompt: `你是一位心血管-肾脏-代谢（CKM）领域的临床专家。请根据以下信息，使用 2023 年 AHA/ACC 发布的 PREVENT 公式（PREVENT Equations）帮我估算心血管风险。

【我的基本信息】
- 年龄：[填写年龄] 岁
- 性别：[男/女]
- 收缩压：[填写数值] mmHg
- 总胆固醇：[填写数值] mg/dL
- HDL 胆固醇：[填写数值] mg/dL
- 糖化血红蛋白 HbA1c：[填写数值] %
- eGFR（肾小球滤过率）：[填写数值] mL/min/1.73m²
- UACR（尿白蛋白/肌酐比值）：[填写数值] mg/g
- BMI：[填写数值] kg/m²
- 是否吸烟：[是/否]
- 是否有糖尿病：[是/否]

【当前用药情况】
- 是否在服用降压药：[是/否，如是请列出药名]
- 是否在服用他汀类降脂药：[是/否，如是请列出药名，如阿托伐他汀、瑞舒伐他汀]
- 是否在服用 SGLT2 抑制剂（达格列净、恩格列净、卡格列净等）：[是/否/不确定]
- 是否在服用 GLP-1 受体激动剂（司美格鲁肽、利拉鲁肽、替尔泊肽等）：[是/否/不确定]
- 是否在服用 RAS 抑制剂（沙库巴曲缬沙坦、依那普利、缬沙坦、氯沙坦等）：[是/否/不确定]
- 是否在服用 MRA（螺内酯、非奈利酮等）：[是/否/不确定]
- 是否在服用其他降糖药（二甲双胍、胰岛素等）：[是/否，如是请列出药名]
- 是否在服用抗血小板/抗凝药（阿司匹林、氯吡格雷、利伐沙班等）：[是/否/不确定]

【请帮我完成以下评估】
1. 使用 PREVENT-CVD 公式估算 10 年总心血管疾病风险（百分比）
2. 使用 PREVENT-ASCVD 公式估算 10 年动脉粥样硬化性心血管疾病风险（百分比）
3. 使用 PREVENT-HF 公式估算 10 年心力衰竭风险（百分比）
4. 根据以下阈值判断我的风险等级：
   - 总 CVD 风险 ≥ 20%：极高危（CKM 3 期标准）
   - 总 CVD 风险 ≥ 7.5%：高危（需优先启动护心降糖药）
   - ASCVD 风险 3%–<10%：建议做冠状动脉钙化检查
   - ASCVD 风险 ≥ 5%：推荐开始降脂治疗
   - HF 风险 ≥ 5%：需评估早期心衰
5. 结合我当前的用药情况，分析是否已有 CKM 保护性药物，是否需要调整治疗方案
6. 给出针对性的健康建议

请注意：PREVENT 公式适用于 30–79 岁、无心脑血管疾病史的人群。如有不确定的数据项，请提示我补充。`,
  },
  {
    id: "prevent-30yr",
    title: "PREVENT 30 年风险评估",
    description: "适合 30–59 岁年轻人评估长期心血管风险",
    prompt: `你是一位心血管-肾脏-代谢（CKM）领域的临床专家。我今年 [填写年龄] 岁（30–59 岁之间），希望了解自己的长期心血管风险。

请根据以下信息，使用 PREVENT 公式估算我未来 30 年的 ASCVD（动脉粥样硬化性心血管疾病）风险：

【我的基本信息】
- 年龄：[填写年龄] 岁
- 性别：[男/女]
- 收缩压：[填写数值] mmHg
- 总胆固醇：[填写数值] mg/dL
- HDL 胆固醇：[填写数值] mg/dL
- 糖化血红蛋白 HbA1c：[填写数值] %
- eGFR：[填写数值] mL/min/1.73m²
- UACR：[填写数值] mg/g
- BMI：[填写数值] kg/m²
- 是否吸烟：[是/否]
- 是否有糖尿病：[是/否]

【当前用药情况】
- 是否在服用降压药：[是/否，如是请列出药名]
- 是否在服用他汀类降脂药：[是/否，如是请列出药名]
- 是否在服用 SGLT2 抑制剂（达格列净、恩格列净等）：[是/否/不确定]
- 是否在服用 GLP-1 受体激动剂（司美格鲁肽、利拉鲁肽等）：[是/否/不确定]
- 是否在服用 RAS 抑制剂（沙库巴曲缬沙坦、缬沙坦、氯沙坦等）：[是/否/不确定]
- 是否在服用其他降糖药（二甲双胍、胰岛素等）：[是/否，如是请列出药名]
- 是否在服用抗血小板/抗凝药（阿司匹林、氯吡格雷等）：[是/否/不确定]

【请帮我完成】
1. 估算 30 年 ASCVD 风险（百分比）
2. 如果 30 年风险 ≥ 10%，提示需考虑启动降脂治疗
3. 与同龄人平均水平对比，说明我的风险处于什么位置
4. 结合我当前的用药情况，分析是否已有 CKM 保护性药物
5. 给出降低长期风险的具体建议`,
  },
  {
    id: "ckm-staging",
    title: "CKM 分期评估",
    description: "根据体检数据判断您处于 CKM 哪一期",
    prompt: `你是一位心血管-肾脏-代谢（CKM）领域的临床专家。请根据 2026 AHA/ACC/ADA/ASN CKM 综合征防治指南，帮我判断我处于 CKM 综合征的哪一期。

【我的健康信息】
- 年龄：[填写] 岁，性别：[男/女]
- 身高：[填写] cm，体重：[填写] kg
- 腰围：[填写] cm
- BMI：[填写或留空让 AI 计算]
- 血压：[填写] / [填写] mmHg
- 空腹血糖：[填写] mg/dL
- 糖化血红蛋白 HbA1c：[填写] %
- 甘油三酯：[填写] mg/dL
- 总胆固醇：[填写] mg/dL，HDL：[填写] mg/dL，LDL：[填写] mg/dL
- eGFR：[填写] mL/min/1.73m²
- UACR：[填写] mg/g
- 是否有糖尿病：[是/否]
- 是否有高血压：[是/否]
- 是否有冠心病/心衰/卒中/外周动脉疾病：[是/否，如有请说明]
- 是否做过冠状动脉钙化（CAC）检查：[是/否，如有请填写评分]
- 是否做过心脏超声或 NT-proBNP 检查：[是/否，如有请填写结果]

【当前用药情况】
- 降压药：[填写药名或"无"，如缬沙坦 80mg、氨氯地平 5mg]
- 降脂药：[填写药名或"无"，如阿托伐他汀 20mg]
- SGLT2 抑制剂（达格列净、恩格列净等）：[填写药名或"无"]
- GLP-1 受体激动剂（司美格鲁肽、利拉鲁肽等）：[填写药名或"无"]
- RAS 抑制剂（沙库巴曲缬沙坦、依那普利、缬沙坦等）：[填写药名或"无"]
- MRA（螺内酯、非奈利酮等）：[填写药名或"无"]
- 其他降糖药（二甲双胍、胰岛素等）：[填写药名或"无"]
- 抗血小板/抗凝药（阿司匹林、氯吡格雷、利伐沙班等）：[填写药名或"无"]
- 其他长期用药：[填写药名或"无"]

【请帮我完成】
1. 计算我的 BMI
2. 逐项对照 CKM 0–4 期的诊断标准，判断我处于哪一期
3. 说明判断依据
4. 结合我当前的用药情况，分析是否已使用该期推荐的 CKM 保护性药物，是否有需要调整的地方
5. 给出该期的管理建议
6. 建议下一步需要做哪些检查`,
  },
];

export interface PreventInterpretation {
  riskLevel: string;
  threshold: string;
  meaning: string;
  action: string;
  color: string;
}

export const preventInterpretations: PreventInterpretation[] = [
  {
    riskLevel: "低风险",
    threshold: "10 年总 CVD 风险 < 5%",
    meaning: "您目前的心血管风险较低，继续保持健康生活方式",
    action: "每 3–5 年复查血脂、血糖和肾功能，每年测量血压",
    color: "#2E7D6B",
  },
  {
    riskLevel: "中等风险",
    threshold: "10 年总 CVD 风险 5%–<7.5%",
    meaning: "存在一定风险因素，需要关注和改善",
    action: "积极改善生活方式，每 1–2 年复查，考虑冠状动脉钙化检查",
    color: "#C8A04A",
  },
  {
    riskLevel: "高风险",
    threshold: "10 年总 CVD 风险 ≥ 7.5%",
    meaning: "心血管风险较高，可能需要药物干预",
    action: "咨询医生是否需要启动护心降糖药或降脂治疗，每年复查",
    color: "#C75D3A",
  },
  {
    riskLevel: "极高风险",
    threshold: "10 年总 CVD 风险 ≥ 20%",
    meaning: "心血管风险极高，相当于已存在亚临床心血管病变（CKM 3 期）",
    action: "尽快到心血管专科就诊，进行全面评估和强化治疗",
    color: "#DC2626",
  },
];

/* ---------- 常见问题 ---------- */

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    category: "基础认知",
    question: "CKM 综合征能治愈吗？",
    answer: "CKM 综合征是一种慢性全身性疾病，目前尚不能完全治愈，但通过早期发现和规范管理，可以有效延缓甚至逆转部分病情。例如，减重 5%–10% 可使 CKM 分期回退，早期肾病通过规范治疗可延缓甚至停止进展。关键在于早发现、早干预、长期坚持。",
  },
  {
    category: "基础认知",
    question: "CKM 综合征和心血管疾病有什么区别？",
    answer: "心血管疾病（如冠心病、心衰）是 CKM 综合征的一个组成部分。CKM 综合征强调的是心脏、肾脏和代谢系统之间的相互影响——代谢异常（肥胖、糖尿病）会损害心脏和肾脏，肾脏损伤反过来又加重心血管风险。CKM 综合征的视角更全面，关注多器官的共同保护。",
  },
  {
    category: "基础认知",
    question: "我没有任何不舒服，需要关注 CKM 吗？",
    answer: "非常需要。CKM 综合征的早期（0–3 期）通常没有明显症状，但血管、肾脏和代谢系统的损害可能已经在悄悄发生。90%–95% 的美国成人已处于 CKM 1–4 期。定期体检（血压、血糖、血脂、肾功能）是早期发现的唯一途径。",
  },
  {
    category: "检查与诊断",
    question: "如何知道自己处于 CKM 几期？",
    answer: "需要通过体检和化验来判断。医生会根据您的 BMI、腰围、血压、血糖、血脂、肾功能（eGFR 和 UACR）以及是否有心血管疾病来确定分期。建议到医院做一次全面评估，包括血液检查和必要时的心脏检查。",
  },
  {
    category: "检查与诊断",
    question: "eGFR 和 UACR 是什么检查？",
    answer: "eGFR（肾小球滤过率）是通过血液化验计算的指标，反映肾脏的过滤能力，正常值 ≥ 90。UACR（尿白蛋白/肌酐比值）需要留尿化验，反映尿中蛋白质含量，正常值 < 30。这两个指标是评估肾脏健康的核心指标，建议 CKM 2 期及以上每年检查一次。",
  },
  {
    category: "检查与诊断",
    question: "什么是 PREVENT 风险评估？普通人能做吗？",
    answer: "PREVENT 是一种心血管风险预测公式，适用于 30–79 岁无心脑血管疾病的人群。它通过您的年龄、血压、胆固醇、肾功能等信息，估算未来 10 年和 30 年发生心血管疾病的风险。这个评估需要由医生或专业工具完成，您可以请医生帮您计算。",
  },
  {
    category: "治疗与管理",
    question: "CKM 综合征一定要吃药吗？",
    answer: "不一定。CKM 0–1 期以生活方式干预为主，通过健康饮食、规律运动和减重即可有效管理。2 期及以上可能需要药物治疗，具体取决于您的风险因素和整体心血管风险。医生会根据您的具体情况决定是否需要用药。",
  },
  {
    category: "治疗与管理",
    question: "SGLT2 抑制剂和 GLP-1 类药物有什么区别？",
    answer: "SGLT2 抑制剂（排糖药，如达格列净/安达唐、恩格列净/欧唐宁）通过促进尿液排糖来降血糖，同时能保护心脏和肾脏，是糖尿病合并心肾疾病的首选药物之一。GLP-1 受体激动剂（减肥降糖针，如司美格鲁肽/诺和泰、利拉鲁肽/诺和力、替尔泊肽/穆峰达）通过抑制食欲和促进胰岛素分泌来降糖减重，还能降低心血管事件风险。两者可以联合使用。",
  },
  {
    category: "治疗与管理",
    question: "减重手术适合所有人吗？",
    answer: "不适合。减重手术（代谢减重手术）通常适用于 BMI ≥ 35（或亚裔 ≥ 30）且通过生活方式和药物治疗效果不佳的人群，或 BMI ≥ 30（亚裔 ≥ 27）合并 2 型糖尿病等严重代谢疾病的患者。手术有风险，需要由多学科团队评估后决定。",
  },
  {
    category: "生活方式",
    question: "什么样的饮食对 CKM 最好？",
    answer: "指南推荐 DASH 饮食或地中海饮食模式。核心原则：多吃蔬菜、水果、全谷物、鱼类和坚果；限制红肉、加工食品、含糖饮料和高盐食物；用橄榄油等健康油脂替代动物油脂。每日盐摄入 < 5 克，饱和脂肪 < 10% 总热量。",
  },
  {
    category: "生活方式",
    question: "运动多久才能改善 CKM？",
    answer: "指南推荐每周至少 150 分钟中等强度有氧运动（如快走、游泳、骑车），加上每周 2–3 次力量训练。即使每天步行 30 分钟，坚持 3 个月即可看到血压、血糖和体重的改善。关键是长期坚持，从少量开始逐步增加。",
  },
  {
    category: "生活方式",
    question: "CKM 患者可以喝酒吗？",
    answer: "如果饮酒，应适量（男性每日 ≤ 2 个标准杯，女性 ≤ 1 个标准杯）。但 CKM 合并肝病（如脂肪肝）、心衰或正在服用多种药物时，建议戒酒。酒精会增加热量摄入、影响血糖控制和药物代谢，不利于 CKM 管理。",
  },
];

/* ---------- 就医指南 ---------- */

export interface DoctorGuideItem {
  title: string;
  icon: string;
  content: string;
  details?: string[];
}

export const doctorGuideItems: DoctorGuideItem[] = [
  {
    title: "什么时候该看医生",
    icon: "Stethoscope",
    content: "出现以下任一情况，建议尽快就诊：",
    details: [
      "体检发现血压、血糖、血脂或肾功能异常",
      "BMI ≥ 25 或腰围超标",
      "有心血管疾病、糖尿病或肾病家族史",
      "出现胸痛、气短、水肿等不适症状",
      "已被诊断为高血压、糖尿病或慢性肾脏病",
    ],
  },
  {
    title: "应该看什么科室",
    icon: "Building2",
    content: "根据您的主要问题选择科室，必要时多科室协作：",
    details: [
      "初诊建议：全科医学科或心内科（全面评估）",
      "血糖异常/糖尿病：内分泌科",
      "血压异常/心脏问题：心血管内科",
      "肾功能异常：肾脏内科",
      "体重管理/减重手术：减重代谢外科或营养科",
    ],
  },
  {
    title: "就诊前需要准备什么",
    icon: "ClipboardList",
    content: "带齐以下资料，帮助医生更准确地评估您的病情：",
    details: [
      "近期体检报告（血压、血糖、血脂、肝肾功能等）",
      "正在服用的所有药物清单（包括保健品）",
      "家族病史记录（父母、兄弟姐妹的重大疾病）",
      "记录一周的饮食和运动情况",
      "如果有，带上既往的心电图、心脏超声等检查结果",
    ],
  },
  {
    title: "看医生时该问什么",
    icon: "HelpCircle",
    content: "建议向医生提出以下问题，帮助您更好地了解病情：",
    details: [
      "我目前处于 CKM 几期？风险有多高？",
      "我需要做哪些检查？多久复查一次？",
      "我需要吃药吗？药物有什么副作用？",
      "我的饮食和运动需要注意什么？",
      "我的血压/血糖/血脂应该控制在什么目标？",
    ],
  },
];
