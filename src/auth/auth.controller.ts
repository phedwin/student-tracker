import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}


    @Post()
    insertUser(


        @Body('username')  username : string,
        @Body('username')  age : number,
        @Body('username')  email : string,
        @Body('username')  firstName: string,
        @Body('username')  middleName : string,
        @Body('username')  lastName : string

    ) {

        const userId = this.authService.userData(
            username, age, email, firstName, middleName,lastName
        )

        return {
            userId
        }

        // this.authService.userData();
    }

}
