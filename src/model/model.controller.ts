import { Controller, Post } from '@nestjs/common';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {


    constructor(private modelService : ModelService ) {}



    @Post("signup")
    postMessage() {
        return this.modelService.signUpService();
    }

    @Post("signin")
    
    postSignIn() {
        return this.modelService.signinService();
    }
}
