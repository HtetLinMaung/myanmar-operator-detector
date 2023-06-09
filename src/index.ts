export interface Rule {
  prefix: string;
  length: number;
}

const mptRules: Rule[] = [
  { prefix: "0920", length: 9 },
  { prefix: "0921", length: 9 },
  { prefix: "0922", length: 9 },
  { prefix: "0923", length: 11 },
  { prefix: "0924", length: 11 },
  { prefix: "0925", length: 11 },
  { prefix: "0926", length: 10 },
  { prefix: "0940", length: 11 },
  { prefix: "0941", length: 10 },
  { prefix: "0942", length: 11 },
  { prefix: "0943", length: 11 },
  { prefix: "0944", length: 10 },
  { prefix: "0945", length: 11 },
  { prefix: "0946", length: 11 },
  { prefix: "0947", length: 10 },
  { prefix: "0948", length: 11 },
  { prefix: "0949", length: 10 },
  { prefix: "0950", length: 9 },
  { prefix: "0951", length: 9 },
  { prefix: "0952", length: 9 },
  { prefix: "0953", length: 9 },
  { prefix: "0954", length: 9 },
  { prefix: "0955", length: 9 },
  { prefix: "0956", length: 9 },
  { prefix: "0973", length: 10 },
  { prefix: "0970", length: 8 },
  { prefix: "0971", length: 8 },
  { prefix: "0981", length: 9 },
  { prefix: "0983", length: 9 },
  { prefix: "0984", length: 9 },
  { prefix: "0985", length: 9 },
  { prefix: "0986", length: 9 },
  { prefix: "0987", length: 9 },
  { prefix: "0988", length: 11 },
  { prefix: "0989", length: 11 },
  { prefix: "0991", length: 10 },
];

const ooredooRules: Rule[] = [
  { prefix: "0994", length: 11 },
  { prefix: "0995", length: 11 },
  { prefix: "0996", length: 11 },
  { prefix: "0997", length: 11 },
  { prefix: "0998", length: 11 },
];

const telenorRules: Rule[] = [
  { prefix: "0974", length: 11 },
  { prefix: "0975", length: 11 },
  { prefix: "0976", length: 11 },
  { prefix: "0977", length: 11 },
  { prefix: "0978", length: 11 },
  { prefix: "0979", length: 11 },
];

const mecTelRules: Rule[] = [
  { prefix: "0930", length: 10 },
  { prefix: "0931", length: 10 },
  { prefix: "0932", length: 10 },
  { prefix: "0933", length: 10 },
  { prefix: "0934", length: 11 },
  { prefix: "0935", length: 11 },
  { prefix: "0936", length: 10 },
  { prefix: "0937", length: 10 },
  { prefix: "0938", length: 10 },
  { prefix: "0939", length: 10 },
];

const myTelRules: Rule[] = [
  { prefix: "0966", length: 11 },
  { prefix: "0967", length: 11 },
  { prefix: "0968", length: 11 },
  { prefix: "0969", length: 11 },
];

export function detectMyanmarMobileOperator(mobileNo: string): string {
  // Remove country code if exists
  if (mobileNo.startsWith("+95")) {
    mobileNo = "0" + mobileNo.substring(3);
  } else if (mobileNo.startsWith("95")) {
    mobileNo = "0" + mobileNo.substring(2);
  }

  // Check for MPT rules
  for (const rule of mptRules) {
    if (mobileNo.startsWith(rule.prefix) && mobileNo.length === rule.length) {
      return "MPT";
    }
  }

  // Check for Ooredoo rules
  for (const rule of ooredooRules) {
    if (mobileNo.startsWith(rule.prefix) && mobileNo.length === rule.length) {
      return "Ooredoo";
    }
  }

  // Check for Telenor rules
  for (const rule of telenorRules) {
    if (mobileNo.startsWith(rule.prefix) && mobileNo.length === rule.length) {
      return "Telenor";
    }
  }

  // Check for MEC Tel rules
  for (const rule of mecTelRules) {
    if (mobileNo.startsWith(rule.prefix) && mobileNo.length === rule.length) {
      return "MECTel";
    }
  }

  // Check for My Tel rules
  for (const rule of myTelRules) {
    if (mobileNo.startsWith(rule.prefix) && mobileNo.length === rule.length) {
      return "MyTel";
    }
  }

  return "Unknown operator";
}

// console.log(detectMyanmarMobileOperator("95912345678")); // MPT
// console.log(detectMyanmarMobileOperator("959912345678")); // Unknown operator
// console.log(detectMyanmarMobileOperator("959711123456")); // Unknown operator
// console.log(detectMyanmarMobileOperator("959611123456")); // Unknown operator
// console.log(detectMyanmarMobileOperator("959312345678")); // Unknown operator
