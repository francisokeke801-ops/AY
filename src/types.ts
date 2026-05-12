export type ServiceItem = {
  id: string;
  name: string;
  price: number;
};

export type OrderStatusType = 'Received' | 'Washing' | 'Ironing' | 'Ready' | 'Delivered';

export type Order = {
  trackingId: string;
  customerName: string;
  status: OrderStatusType;
  date: string;
};
