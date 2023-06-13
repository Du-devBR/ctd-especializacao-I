export type ResponseProducts = {
  _id?: string;
  title: string;
  company: string;
  price: string;
  urlImg: string;
  onClick?: () => void;
};

export type SendProducts = {
  title: string;
  company: string;
  price: string;
  urlImg: string;
}
