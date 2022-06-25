export interface human {
  worldcoin_nullifier: string;
  walletAddress: string;
  KYC: AnnoKYCDataType;
  creditScore: number;
  monthlyIncome: number;
  monthlyDebt: number;
}
export interface AnnoKYCDataType {
  age: number;
  location: string;
}
export interface KYCDataType extends AnnoKYCDataType {
  firstName: string;
  lastName: string;
}
