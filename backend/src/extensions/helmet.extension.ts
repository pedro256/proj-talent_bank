import * as helmet from 'helmet';

import { INestApplication } from '@nestjs/common';

export function helmetExtension(app: INestApplication): void {
    app.use(helmet());
}