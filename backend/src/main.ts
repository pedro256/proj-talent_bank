import { ConfigService } from '@nestjs/config';
import { bootstrap } from './bootstrap';


async function init() {
  const app = await bootstrap()
  const configService = app.get(ConfigService)
  const port = configService.get<number>('port' as never)
  await app.listen(port);
}
init();
