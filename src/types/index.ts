export interface Operator {
  createdAt: string;
  name: string;
  avatar: string;
  isWorking: boolean;
  id: string;
}

export interface OperatorAddon {
  fieldName: string;
  text: string;
  isChecked: boolean;
  id: string;
}

export interface TableRow extends Operator {
  text: string;
}

export type IOperatorState = {
  data: Operator[];
  isLoading: boolean;
  errors: string | null;
};

export type PaginationType = {
  page: number;
  pageSize: number;
};
