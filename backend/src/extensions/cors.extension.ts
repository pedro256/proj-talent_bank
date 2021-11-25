import { INestApplication } from "@nestjs/common";

export function appCorsExtension(app: INestApplication): void {
    app.enableCors();
}