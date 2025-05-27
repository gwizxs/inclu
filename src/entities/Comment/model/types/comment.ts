import { User } from '@/entities/User';

export interface Comment {
  id: string;
  text: string;
  user: User;
}
