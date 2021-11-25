import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swaggerExtension(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('Talents Bank Service')
        .setDescription('api of talents-bank application endpoits ...')
        .setVersion('1.0')
        .build();

    SwaggerModule.setup(
        'api/doc',
        app,
        SwaggerModule.createDocument(app, config),
    );
}