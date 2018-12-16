export class TaEvent {
  name: string;
  description: string;
  fromDate: string;
  toDate?: string;
  costs: {
    currency: string;
    value: number;
  };
  url: string;
  tags: string[];
  venue: {
    name: string;
    address: string;
    url?: string
  };
  organizer: {
    name: string;
    url?: string;
  };

}
