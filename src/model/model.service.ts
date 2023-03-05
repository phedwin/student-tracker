import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelService {


    signUpService() {
        return {
            msg : 'hello world',
            values : 8392,
            username : "don"
        }
    }

    signinService() {
        return {
            msg : 'signed in',
            values : 4984,
            username : "phedwine"
        }
    }
}
