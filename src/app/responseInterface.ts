import { UserDetails } from './userDetails';



export interface UserResult {

    incomplete_results: boolean;
    items: UserDetails[];
    total_count: number;

}