import { INestApplication, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { appCorsExtension } from "./cors.extension";
import { helmetExtension } from "./helmet.extension";
import { swaggerExtension } from "./swagger.extension";

const logger = new Logger('ConfigExtensions')
const extensions = {
    appCorsExtension,
    helmetExtension,
    swaggerExtension,
};

export function configExtensions(app: INestApplication): void {
    //const configService = app.get(ConfigService);

    const mapperExtensions: Record<string, boolean> = {
        appCorsExtension: true,
        helmetExtension: true,
        swaggerExtension: true,
    };

    Object.entries(mapperExtensions).forEach(([extensionName, enabled]) => {
        logger.log(`Extension Config[${extensionName}]: ${enabled}`);
        
        if (enabled) {
            extensions[extensionName](app);
        }
        
    });
}