export type ChilrenProps = {
  children: React.ReactNode;
};

export type InputProps = {
  type: any;
  placeholder: string;
  value: any;
  name: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  icon: any;
  handleClick: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
};
