import { Injectable } from '@nestjs/common';
import { AuthData } from 'src/model/model.data';
import { v4 as uuidv4} from 'uuid';


@Injectable()
export class AuthService {

    private users : AuthData[] = [];
    userData(
        // generatedid : string,
        username : string,
        age : number,
        email : string,
        firstName : string,
        middlename: string,
        lastName : string
        ) 
        {
            const userId = uuidv4();
            const newuser = new AuthData(
                userId, username,age, email, firstName, middlename, lastName
            );

            this.users.push(newuser);

         
    }

    switchUserData() {
        
    }
}
