import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],//Écoute les routes défini dans les controllers déclarés
  providers: [AppService],
})
export class AppModule {}
